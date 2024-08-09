import './App.css';
import Scatterplot from './Scatterplot';
import Navbar from './Navbar';
import FilterMenu from './FilterMenu';

import { React, useState, useEffect } from 'react';

function App() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState({});
    const [filteredData, setFilteredData] = useState([]);

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
            //
        });
        setFilteredData(newData);
    }, [data, filter]);

    return (
        <div className="App">
            <Navbar />
            <div className="plotWrapper">
                <Scatterplot
                    data={data.map((item) => {
                        return item;
                    })}
                    setFilter={setFilter}
                    hexSize={1000}
                />
                <FilterMenu />
            </div>
        </div>
    );
}

export default App;
