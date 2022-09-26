// Radius of planets
// Radius in KMs divided by 1000
enum Radius {
    Mercury = 2,
    Venus = 6,
    Earth = 6,
    Mars = 3,

    // Jupiter = 71,
    // Saturn = 60,
    // Uranus = 25,
    // Neptune = 24,
    // Sun = 695
    // Radius values adjusted to create the planets faster
    Jupiter = 35,
    Saturn = 30,
    Uranus = 13,
    Neptune = 12,
    Sun = 50,
}

//Distance from Sun in million kms divided by a million
// Mercury = 58
// Venus = 108
// Earth = 150
// Mars = 228
// Jupiter = 778
// Saturn = 1427
// Uranus = 2871
// Neptune = 4497

// Distance above divided by 4
enum DistanceFromSun {
    Mercury = 14,
    Venus = 24,
    Earth = 41,
    Mars = 59,

    // Jupiter = 194,
    // Saturn = 356,
    // Uranus = 717,
    // Neptune = 1124,
    // Distance values adjusted to view them better
    Jupiter = 97,
    Saturn = 178,
    Uranus = 358,
    Neptune = 562,
}

namespace space {
    //% blockId=space_planet_mercury block="mercury at center %center=minecraftCreatePosition || of radius %radius"
    //% group="Planets"
    //% radius.defl=2
    //% weight=99
    export function create_mercury(
        center: Position,
        radius: number = Radius.Mercury
    ): void {
        if (radius <= 0) return;
        space.sphere(
            LIGHT_GRAY_CONCRETE,
            center,
            radius,
            ShapeOperation.Outline
        );
    }

    //% blockId=space_planet_venus block="venus at center %center=minecraftCreatePosition || of radius %radius"
    //% group="Planets"
    //% radius.defl=6
    //% weight=98
    export function create_venus(
        center: Position,
        radius: number = Radius.Venus
    ): void {
        if (radius <= 0) return;
        space.sphere(YELLOW_CONCRETE, center, radius, ShapeOperation.Outline);
    }

    //% blockId=space_planet_earth block="earth at center %center=minecraftCreatePosition || of radius %radius"
    //% group="Planets"
    //% radius.defl=6
    //% weight=97
    export function create_earth(
        center: Position,
        radius: number = Radius.Earth
    ): void {
        if (radius <= 0) return;
        space.random_layer_sphere(
            [LIGHT_BLUE_CONCRETE, WHITE_CONCRETE, GRASS],
            center,
            radius,
            Axis.Y,
            true,
            ShapeOperation.Outline
        );
    }

    //% blockId=space_planet_mars block="mars at center %center=minecraftCreatePosition || of radius %radius"
    //% group="Planets"
    //% radius.defl=3
    //% weight=96
    export function create_mars(
        center: Position,
        radius: number = Radius.Mars
    ): void {
        if (radius <= 0) return;
        space.sphere(RED_SANDSTONE, center, radius, ShapeOperation.Outline);
    }

    //% blockId=space_planet_jupiter block="jupiter at center %center=minecraftCreatePosition || of radius %radius"
    //% group="Planets"
    //% radius.defl=35
    //% weight=95
    export function create_jupiter(
        center: Position,
        radius: number = Radius.Jupiter
    ): void {
        if (radius <= 0) return;
        space.random_layer_sphere(
            [ORANGE_CONCRETE, WHITE_CONCRETE],
            center,
            radius,
            Axis.Y,
            true,
            ShapeOperation.Outline
        );
    }

    //% blockId=space_planet_saturn block="saturn at center %center=minecraftCreatePosition || of radius %radius"
    //% group="Planets"
    //% radius.defl=30
    //% weight=94
    export function create_saturn(
        center: Position,
        radius: number = Radius.Saturn
    ): void {
        if (radius <= 0) return;
        center = center.toWorld();
        space.sphere(GOLD_BLOCK, center, radius, ShapeOperation.Outline);
        shapes.circle(
            GOLD_BLOCK,
            center,
            radius + 3,
            Axis.Y,
            ShapeOperation.Outline
        );
    }

    //% blockId=space_planet_uranus block="uranus at center %center=minecraftCreatePosition || of radius %radius"
    //% group="Planets"
    //% radius.defl=13
    //% weight=93
    export function create_uranus(
        center: Position,
        radius: number = Radius.Uranus
    ): void {
        if (radius <= 0) return;
        space.sphere(
            LIGHT_BLUE_CONCRETE,
            center,
            radius,
            ShapeOperation.Outline
        );
    }

    //% blockId=space_planet_neptune block="neptune at center %center=minecraftCreatePosition || of radius %radius"
    //% group="Planets"
    //% radius.defl=12
    //% weight=92
    export function create_neptune(
        center: Position,
        radius: number = Radius.Neptune
    ): void {
        if (radius <= 0) return;
        space.sphere(BLUE_CONCRETE, center, radius, ShapeOperation.Outline);
    }

    //% blockId=space_stars_sun block="sun at center %center=minecraftCreatePosition || of radius %radius"
    //% group="Stars"

    export function create_sun(
        center: Position,
        radius: number = Radius.Sun
    ): void {
        if (radius <= 0) return;
        space.sphere(GLOWSTONE, center, radius, ShapeOperation.Outline);
    }

    /**
     * Creates a solar system at a default scale of 3.
     * @param scale scale of radius of planets; eg: 1, 5; Multiplies the actual radius by (scale/3)
     */
    //% blockId=space_solarsystem block="solar system at center %center=minecraftCreatePosition || of scale %scale"
    //% group="Solar System"
    //% scale.min=1 scale.max=5 scale.defl=3
    export function create_solar_system(center: Position, scale: number): void {
        center = center.toWorld();
        scale = scale / 3;
        const sunEdge = center.add(pos(Math.round(Radius.Sun * scale), 0, 0));
        const mercuryCenter = sunEdge.add(
            pos(
                Math.round(
                    DistanceFromSun.Mercury * scale +
                        (2 * (Radius.Mercury * scale) + 2)
                ),
                0,
                0
            )
        );
        const venusCenter = sunEdge.add(
            pos(
                Math.round(
                    DistanceFromSun.Venus * scale +
                        (2 * (Radius.Venus * scale) + 2)
                ),
                0,
                0
            )
        );
        const earthCenter = sunEdge.add(
            pos(
                Math.round(
                    DistanceFromSun.Earth * scale +
                        (2 * (Radius.Earth * scale) + 2)
                ),
                0,
                0
            )
        );
        const marsCenter = sunEdge.add(
            pos(
                Math.round(
                    DistanceFromSun.Mars * scale +
                        (2 * (Radius.Mars * scale) + 2)
                ),
                0,
                0
            )
        );
        const jupiterCenter = sunEdge.add(
            pos(
                Math.round(
                    DistanceFromSun.Jupiter * scale +
                        (2 * (Radius.Jupiter * scale) + 2)
                ),
                0,
                0
            )
        );
        const saturnCenter = sunEdge.add(
            pos(
                Math.round(
                    DistanceFromSun.Saturn * scale +
                        (2 * (Radius.Saturn * scale) + 2)
                ),
                0,
                0
            )
        );
        const uranusCenter = sunEdge.add(
            pos(
                Math.round(
                    DistanceFromSun.Uranus * scale +
                        (2 * (Radius.Uranus * scale) + 2)
                ),
                0,
                0
            )
        );
        const neptuneCenter = sunEdge.add(
            pos(
                Math.round(
                    DistanceFromSun.Neptune * scale +
                        (2 * (Radius.Neptune * scale) + 2)
                ),
                0,
                0
            )
        );

        //Teleport player near the planet build area to fix the blocks getting missed out bug
        player.teleport(center.add(pos(0, 0, Radius.Sun + 5)));
        create_sun(center, Radius.Sun * scale);
        player.teleport(mercuryCenter.add(pos(0, 0, Radius.Mercury + 5)));
        create_mercury(mercuryCenter, Radius.Mercury * scale);
        player.teleport(venusCenter.add(pos(0, 0, Radius.Venus + 5)));
        create_venus(venusCenter, Radius.Venus * scale);
        player.teleport(earthCenter.add(pos(0, 0, Radius.Earth + 5)));
        create_earth(earthCenter, Radius.Earth * scale);
        player.teleport(marsCenter.add(pos(0, 0, Radius.Mars + 5)));
        create_mars(marsCenter, Radius.Mars * scale);
        player.teleport(jupiterCenter.add(pos(0, 0, Radius.Jupiter + 5)));
        create_jupiter(jupiterCenter, Radius.Jupiter * scale);
        player.teleport(saturnCenter.add(pos(0, 0, Radius.Saturn + 5)));
        create_saturn(saturnCenter, Radius.Saturn * scale);
        player.teleport(uranusCenter.add(pos(0, 0, Radius.Uranus + 5)));
        create_uranus(uranusCenter, Radius.Uranus * scale);
        player.teleport(neptuneCenter.add(pos(0, 0, Radius.Neptune + 5)));
        create_neptune(neptuneCenter, Radius.Neptune * scale);
    }
}
