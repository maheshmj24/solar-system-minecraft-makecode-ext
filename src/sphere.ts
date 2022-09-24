namespace solarsystem {
    /**
     * Fill a sphere of blocks at a center position.
     * @param radius the radius of the sphere, eg: 5
     */
    //% blockId=minecraftSphere block="sphere of %blockList=minecraftBlock|center %center=minecraftCreatePosition|radius %radius|%operator"
    //% blockList.shadow=minecraftBlock
    //% blockExternalInputs=1
    //% help=shapes/sphere
    export function sphere(
        blockList: number[],
        center: Position,
        radius: number,
        operator: ShapeOperation
    ) {
        if (radius <= 0) return;

        radius = Math.round(radius);

        center = center.toWorld();
        const xc = Math.round(center.getValue(Axis.X));
        const yc = Math.round(center.getValue(Axis.Y));
        const zc = Math.round(center.getValue(Axis.Z));
        const radius2 = radius * radius;
        const radiuso = (radius - 1) * (radius - 1);
        for (let x = -radius; x <= radius; ++x) {
            const x2 = x * x;
            for (let y = -radius; y <= radius; ++y) {
                const y2 = y * y;
                if (x2 + y2 > radius2) continue;

                for (let z = -radius; z <= radius; ++z) {
                    const z2 = z * z;
                    if (x2 + y2 + z2 > radius2) continue;
                    const p = positions.createWorld(xc + x, yc + y, zc + z);

                    if (
                        operator == ShapeOperation.Replace ||
                        x2 + y2 + z2 >= radiuso
                    )
                        // on the "crust"
                        blocks.place(blockList._pickRandom(), p);
                    else if (operator == ShapeOperation.Hollow)
                        blocks.place(Block.Air, p);
                }
            }
        }
    }
}
