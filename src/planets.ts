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
    Venus = 27,
    Earth = 37,
    Mars = 57,

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

namespace solarsystem {
    //% blockId=solarsystem_planet_mercury block="mercury at center %center=minecraftCreatePosition || of radius %radius"
    //% group="Planets"
    //% radius.defl=2
    //% weight=99
    export function create_mercury(
        center: Position,
        radius: number = Radius.Mercury
    ): void {
        if (radius <= 0) return;
        shapes.sphere(
            LIGHT_GRAY_CONCRETE,
            center,
            radius,
            ShapeOperation.Outline
        );
    }

    //% blockId=solarsystem_planet_venus block="venus at center %center=minecraftCreatePosition || of radius %radius"
    //% group="Planets"
    //% radius.defl=6
    //% weight=98
    export function create_venus(
        center: Position,
        radius: number = Radius.Venus
    ): void {
        if (radius <= 0) return;
        shapes.sphere(YELLOW_CONCRETE, center, radius, ShapeOperation.Outline);
    }

    //% blockId=solarsystem_planet_earth block="earth at center %center=minecraftCreatePosition || of radius %radius"
    //% group="Planets"
    //% radius.defl=6
    //% weight=97
    export function create_earth(
        center: Position,
        radius: number = Radius.Earth
    ): void {
        if (radius <= 0) return;
        solarsystem.sphere(
            [GRASS, DIRT],
            center,
            radius,
            ShapeOperation.Outline
        );
    }

    //% blockId=solarsystem_planet_mars block="mars at center %center=minecraftCreatePosition || of radius %radius"
    //% group="Planets"
    //% radius.defl=3
    //% weight=96
    export function create_mars(
        center: Position,
        radius: number = Radius.Mars
    ): void {
        if (radius <= 0) return;
        shapes.sphere(RED_SANDSTONE, center, radius, ShapeOperation.Outline);
    }

    //% blockId=solarsystem_planet_jupiter block="jupiter at center %center=minecraftCreatePosition || of radius %radius"
    //% group="Planets"
    //% radius.defl=35
    //% weight=95
    export function create_jupiter(
        center: Position,
        radius: number = Radius.Jupiter
    ): void {
        if (radius <= 0) return;
        shapes.sphere(
            ORANGE_CONCRETE_POWDER,
            center,
            radius,
            ShapeOperation.Outline
        );
    }

    //% blockId=solarsystem_planet_saturn block="saturn at center %center=minecraftCreatePosition || of radius %radius"
    //% group="Planets"
    //% radius.defl=30
    //% weight=94
    export function create_saturn(
        center: Position,
        radius: number = Radius.Saturn
    ): void {
        if (radius <= 0) return;
        center = center.toWorld();
        shapes.sphere(GOLD_BLOCK, center, radius, ShapeOperation.Outline);
        shapes.circle(
            GOLD_BLOCK,
            center,
            radius + 3,
            Axis.Y,
            ShapeOperation.Outline
        );
    }

    //% blockId=solarsystem_planet_uranus block="uranus at center %center=minecraftCreatePosition || of radius %radius"
    //% group="Planets"
    //% radius.defl=13
    //% weight=93
    export function create_uranus(
        center: Position,
        radius: number = Radius.Uranus
    ): void {
        if (radius <= 0) return;
        shapes.sphere(
            LIGHT_BLUE_CONCRETE_POWDER,
            center,
            radius,
            ShapeOperation.Outline
        );
    }

    //% blockId=solarsystem_planet_neptune block="neptune at center %center=minecraftCreatePosition || of radius %radius"
    //% group="Planets"
    //% radius.defl=12
    //% weight=92
    export function create_neptune(
        center: Position,
        radius: number = Radius.Neptune
    ): void {
        if (radius <= 0) return;
        shapes.sphere(BLUE_CONCRETE, center, radius, ShapeOperation.Outline);
    }

    //% blockId=solarsystem_sun block="sun at center %center=minecraftCreatePosition || of radius %radius"
    //% group="Stars"

    export function create_sun(
        center: Position,
        radius: number = Radius.Sun
    ): void {
        if (radius <= 0) return;
        shapes.sphere(GLOWSTONE, center, radius, ShapeOperation.Outline);
    }

    /**
     * Creates a solar system at a default scale of 5.
     * @param scale scale of radius of planets; eg: 1, 5; Multiplies the actual radius by (scale/5)
     */
    //% blockId=solarsystem block="solar system at center %center=minecraftCreatePosition || scale %scale"
    //% group="Solar System"
    //% scale.min=1 scale.max=5 scale.defl=5
    export function create_solar_system(center: Position, scale: number): void {
        center = center.toWorld();

        const sun = center.add(pos(Math.round(Radius.Sun * (scale / 5)), 0, 0));
        const mercuryCenter = sun.add(
            pos(Math.round(DistanceFromSun.Mercury * (scale / 5)), 0, 0)
        );
        const venusCenter = sun.add(
            pos(Math.round(DistanceFromSun.Venus * (scale / 5)), 0, 0)
        );
        const earthCenter = sun.add(
            pos(Math.round(DistanceFromSun.Earth * (scale / 5)), 0, 0)
        );
        const marsCenter = sun.add(
            pos(Math.round(DistanceFromSun.Mars * (scale / 5)), 0, 0)
        );
        const jupiterCenter = sun.add(
            pos(Math.round(DistanceFromSun.Jupiter * (scale / 5)), 0, 0)
        );
        const saturnCenter = sun.add(
            pos(Math.round(DistanceFromSun.Saturn * (scale / 5)), 0, 0)
        );
        const uranusCenter = sun.add(
            pos(Math.round(DistanceFromSun.Uranus * (scale / 5)), 0, 0)
        );
        const neptuneCenter = sun.add(
            pos(Math.round(DistanceFromSun.Neptune * (scale / 5)), 0, 0)
        );

        create_sun(center, Radius.Sun * (scale / 5));
        create_mercury(mercuryCenter, Radius.Mercury * (scale / 5));
        create_venus(venusCenter, Radius.Venus * (scale / 5));
        create_earth(earthCenter, Radius.Earth * (scale / 5));
        create_mars(marsCenter, Radius.Mars * (scale / 5));
        create_jupiter(jupiterCenter, Radius.Jupiter * (scale / 5));
        create_saturn(saturnCenter, Radius.Saturn * (scale / 5));
        create_uranus(uranusCenter, Radius.Uranus * (scale / 5));
        create_neptune(neptuneCenter, Radius.Neptune * (scale / 5));
    }
}
