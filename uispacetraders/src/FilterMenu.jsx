import './FilterMenu.css';

import { React } from 'react';

const FilterMenu = ({ updateFilter }) => {
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

        let newFilter = {};

        if (event.target.elements.system_name.value !== '') {
            newFilter['system_name'] = event.target.elements.system_name.value;
        }

        newFilter['x_low'] = event.target.elements.x_low.value;
        newFilter['x_high'] = event.target.elements.x_high.value;
        newFilter['y_low'] = event.target.elements.y_low.value;
        newFilter['y_high'] = event.target.elements.y_high.value;

        newFilter['system_types'] = checkboxes.filter((item) => {
            return event.target.elements[item].checked;
        });

        console.log(newFilter);
        updateFilter(newFilter);
    }

    return (
        <form onSubmit={makeFilter} className="filterForm">
            <input type="text" id="system_name" defaultValue=""></input>
            <div className="horizFilterDiv">
                <input type="number" id="x_low" defaultValue="-70000"></input>
                <p> {'< x <'} </p>
                <input type="number" id="x_high" defaultValue="70000"></input>
            </div>
            <div className="horizFilterDiv">
                <input type="number" id="y_low" defaultValue="-80000"></input>
                <p> {'< y <'} </p>
                <input type="number" id="y_high" defaultValue="80000"></input>
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
