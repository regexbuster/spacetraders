import './App.css';
import Scatterplot from './Scatterplot';

import { React, useState, useEffect } from 'react';

function App() {
    const [data, setData] = useState([]);

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
    return (
        <div className="App">
            <Scatterplot data={data} hexSize={1000} />
        </div>
    );
}

export default App;
