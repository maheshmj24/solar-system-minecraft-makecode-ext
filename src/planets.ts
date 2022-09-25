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
    //% weight=99
    //% radius.defl=5
    export function create_mercury(
        center: Position,
        radius?: number = Radius.Mercury
    ): void {
        shapes.sphere(
            LIGHT_GRAY_CONCRETE,
            center,
            radius,
            ShapeOperation.Outline
        );
    }

    //% blockId=solarsystem_planet_venus block="venus at center %center=minecraftCreatePosition || of radius %radius"
    //% group="Planets"
    //% radius.defl=Radius.Venus
    //% weight=98
    export function create_venus(center: Position, radius?: number = 1): void {
        shapes.sphere(YELLOW_CONCRETE, center, radius, ShapeOperation.Outline);
    }

    //% blockId=solarsystem_planet_earth block="earth at center %center=minecraftCreatePosition || of radius %radius"
    //% group="Planets"
    //% weight=97
    export function create_earth(center: Position, radius?: number): void {
        solarsystem.sphere(
            [GRASS, DIRT],
            center,
            Radius.Earth,
            ShapeOperation.Outline
        );
    }

    //% blockId=solarsystem_planet_mars block="mars at center %center=minecraftCreatePosition || of radius %radius"
    //% group="Planets"
    //% weight=96
    export function create_mars(center: Position, radius?: number): void {
        shapes.sphere(
            RED_SANDSTONE,
            center,
            Radius.Mars,
            ShapeOperation.Outline
        );
    }

    //% blockId=solarsystem_planet_jupiter block="jupiter at center %center=minecraftCreatePosition || of radius %radius"
    //% group="Planets"
    //% weight=95
    export function create_jupiter(center: Position, radius?: number): void {
        shapes.sphere(
            ORANGE_CONCRETE_POWDER,
            center,
            Radius.Jupiter,
            ShapeOperation.Outline
        );
    }

    //% blockId=solarsystem_planet_saturn block="saturn at center %center=minecraftCreatePosition || of radius %radius"
    //% group="Planets"
    //% weight=94
    export function create_saturn(center: Position, radius?: number): void {
        center = center.toWorld();
        shapes.sphere(
            GOLD_BLOCK,
            center,
            Radius.Saturn,
            ShapeOperation.Outline
        );
        shapes.circle(
            GOLD_BLOCK,
            center,
            Radius.Saturn + 3,
            Axis.Y,
            ShapeOperation.Outline
        );
    }

    //% blockId=solarsystem_planet_uranus block="uranus at center %center=minecraftCreatePosition || of radius %radius"
    //% group="Planets"
    //% weight=93
    export function create_uranus(center: Position, radius?: number): void {
        shapes.sphere(
            LIGHT_BLUE_CONCRETE_POWDER,
            center,
            Radius.Uranus,
            ShapeOperation.Outline
        );
    }

    //% blockId=solarsystem_planet_neptune block="neptune at center %center=minecraftCreatePosition || of radius %radius"
    //% group="Planets"
    //% weight=92
    export function create_neptune(center: Position, radius?: number): void {
        shapes.sphere(
            BLUE_CONCRETE,
            center,
            Radius.Neptune,
            ShapeOperation.Outline
        );
    }

    //% blockId=solarsystem_sun block="sun at center %center=minecraftCreatePosition || of radius %radius"
    export function create_sun(center: Position, radius?: number): void {
        shapes.sphere(GLOWSTONE, center, Radius.Sun, ShapeOperation.Outline);
    }

    //% blockId=solarsystem block="solar system at center %center=minecraftCreatePosition"
    //% group="Solar System"
    export function create_solar_system(center: Position): void {
        const xc = Math.round(center.getValue(Axis.X));
        const yc = Math.round(center.getValue(Axis.Y));
        const zc = Math.round(center.getValue(Axis.Z));

        const sun = positions.add(center, pos(xc + Radius.Sun, 0, 0));
        const mercuryCenter = positions.add(
            sun,
            pos(xc + DistanceFromSun.Mercury, yc, zc)
        );
        const venusCenter = positions.add(
            sun,
            pos(xc + DistanceFromSun.Venus, yc, zc)
        );
        const earthCenter = positions.add(
            sun,
            pos(xc + DistanceFromSun.Earth, yc, zc)
        );
        const marsCenter = positions.add(
            sun,
            pos(xc + DistanceFromSun.Mars, yc, zc)
        );
        const jupiterCenter = positions.add(
            sun,
            pos(xc + DistanceFromSun.Jupiter, yc, zc)
        );
        const saturnCenter = positions.add(
            sun,
            pos(xc + DistanceFromSun.Saturn, yc, zc)
        );
        const uranusCenter = positions.add(
            sun,
            pos(xc + DistanceFromSun.Uranus, yc, zc)
        );
        const neptuneCenter = positions.add(
            sun,
            pos(xc + DistanceFromSun.Neptune, yc, zc)
        );

        create_sun(center);
        create_mercury(mercuryCenter);
        create_venus(venusCenter);
        create_earth(earthCenter);
        create_mars(marsCenter);
        create_jupiter(jupiterCenter);
        create_saturn(saturnCenter);
        create_uranus(uranusCenter);
        create_neptune(neptuneCenter);
    }
}
