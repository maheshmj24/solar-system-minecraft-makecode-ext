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

namespace solarsystem {
    //% blockId=solarsystem_planet_mercury block="create mercury"
    //% group="Planets"
    export function create_mercury(): void {
        shapes.sphere(
            LIGHT_GRAY_CONCRETE,
            pos(0, 100, 0),
            Radius.Mercury,
            ShapeOperation.Outline
        );
    }

    //% blockId=solarsystem_planet_venus block="create venus"
    //% group="Planets"
    export function create_venus(): void {
        shapes.sphere(
            YELLOW_CONCRETE,
            pos(0, 100, 0),
            Radius.Venus,
            ShapeOperation.Outline
        );
    }

    //% blockId=solarsystem_planet_earth block="create earth"
    //% group="Planets"
    export function create_earth(): void {
        solarsystem.sphere(
            [GRASS, WATER],
            pos(0, 100, 0),
            Radius.Earth,
            ShapeOperation.Outline
        );
    }

    //% blockId=solarsystem_planet_mars block="create mars"
    //% group="Planets"
    export function create_mars(): void {
        shapes.sphere(
            YELLOW_CONCRETE,
            pos(0, 100, 0),
            Radius.Mars,
            ShapeOperation.Outline
        );
    }

    //% blockId=solarsystem_sun block="create sun"
    export function create_sun(): void {
        shapes.sphere(LAVA, pos(0, 100, 0), Radius.Sun, ShapeOperation.Outline);
    }
}
