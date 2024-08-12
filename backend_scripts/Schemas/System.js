class System {
    constructor() {
        this.symbol = '';
        this.sectorSymbol = '';
        this.type = '';
        this.x = 0;
        this.y = 0;
        this.waypoints = [];
        this.factions = [];
    }

    load(obj) {
        Object.keys(obj['data']).forEach((key) => {
            this[key] = obj['data'][key];
        });

        return this;
    }

    unload() {
        return {
            symbol: this.symbol,
            sectorSymbol: this.sectorSymbol,
            type: this.type,
            x: this.x,
            y: this.y,
            waypoints: this.waypoints,
            factions: this.factions,
        };
    }

    toString() {
        return `${this.symbol} is a ${this.type} at (${this.x}, ${this.y})`;
    }

    static createFilter(filters) {
        return function (system) {
            return Object.keys(filters).every((key) =>
                filters[key](system[key])
            );
        };
    }
}

module.exports = System;
