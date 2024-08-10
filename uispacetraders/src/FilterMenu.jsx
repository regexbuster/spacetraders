import './FilterMenu.css';

import { React } from 'react';

const FilterMenu = (updateFilter) => {
    const checkboxes = [
        'NEUTRON_STAR',
        'RED_STAR',
        'ORANGE_STAR',
        'BLUE_STAR',
        'YOUNG_STAR',
        'WHITE_DWARF',
        'BLACK_HOLE',
        'HYPERGIANT',
        'NEBULA',
        'UNSTABLE',
    ];

    function makeFilter(event) {
        event.preventDefault();
        alert(event.target.elements.x_low.value);
    }

    return (
        <form onSubmit={makeFilter} className="filterForm">
            <input type="text" id="system_name" value=""></input>
            <div className="horizFilterDiv">
                <input type="number" id="x_low" value="-70000"></input>
                <p> {'< x <'} </p>
                <input type="number" id="x_high" value="70000"></input>
            </div>
            <div className="horizFilterDiv">
                <input type="number" id="y_low" value="-80000"></input>
                <p> {'< y <'} </p>
                <input type="number" id="y_high" value="80000"></input>
            </div>
            <div className="checkFilterDiv">
                {checkboxes.map((item) => {
                    return (
                        <div>
                            <input
                                type="checkbox"
                                id={item}
                                name={item}
                                value={item}
                            ></input>
                            <label for={item}>
                                {item.split('_').join(' ')}
                            </label>
                        </div>
                    );
                })}
            </div>
            <input type="submit" value="Submit"></input>
        </form>
    );
};

export default FilterMenu;
