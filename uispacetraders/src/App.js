import './App.css';
import Scatterplot from './Scatterplot';
import Navbar from './Navbar';
import FilterMenu from './FilterMenu';

import { React, useState, useEffect } from 'react';

function App() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState({});
    // eslint-disable-next-line no-unused-vars
    const [filteredData, setFilteredData] = useState([]);

    const updateFilter = (data) => {
        setFilter(data);
    };

    useEffect(() => {
        (async function () {
            const response = await fetch('http://localhost:3001/systems', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            let json_res = await response.json();

            setData(json_res.data);
        })();
    }, []);

    useEffect(() => {
        const newData = data.filter((item) => {
            let filtered = false;
            Object.keys(filter).forEach((key) => {
                switch (key) {
                    case 'system_name':
                        if (item.symbol !== filter[key]) {
                            filtered = true;
                        }
                        break;
                    case 'x_low':
                        if (item.x < filter[key]) {
                            filtered = true;
                        }
                        break;
                    case 'x_high':
                        if (item.x > filter[key]) {
                            filtered = true;
                        }
                        break;
                    case 'y_low':
                        if (item.y < filter[key]) {
                            filtered = true;
                        }
                        break;
                    case 'y_high':
                        if (item.y > filter[key]) {
                            filtered = true;
                        }
                        break;
                    case 'system_types':
                        //console.log(filter[key], item.type);
                        if (!filter[key].includes(item.data.type)) {
                            filtered = true;
                        }
                        break;
                    default:
                        filtered = true;
                }
            });
            return !filtered;
        });
        console.log(newData);
        setFilteredData(newData);
    }, [data, filter]);

    return (
        <div className="App">
            <Navbar />
            <div className="plotWrapper">
                <Scatterplot
                    data={filteredData.map((item) => {
                        return item;
                    })}
                />
                <FilterMenu updateFilter={updateFilter} />
            </div>
        </div>
    );
}

export default App;
