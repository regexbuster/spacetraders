import './FilterMenu.css';

import { React, useState } from 'react';

const FilterMenu = () => {
    return (
        <div className="filterWrapper">
            <div className="adder">
                <select name="filterVal" id="filterVal">
                    <optgroup label="System">
                        <option value="symbol">Symbol</option>
                        <option value="sectorSymbol">Sector Symbol</option>
                        <option value="type">Type</option>
                        <option value="x">X</option>
                        <option value="y">Y</option>
                    </optgroup>
                    <optgroup label="Waypoint (WP)">
                        <option value="waypointSymbol">Symbol</option>
                        <option value="waypointType">Type</option>
                        <option value="waypointX">X</option>
                        <option value="waypointY">Y</option>
                    </optgroup>
                    <optgroup label="Faction (F)">
                        <option value="factionSymbol">Symbol</option>
                    </optgroup>
                </select>
                <button>+</button>
            </div>
        </div>
    );
};

export default FilterMenu;
