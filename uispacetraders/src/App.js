import logo from './logo.svg';
import './App.css';
import Scatterplot from './Scatterplot';

const data = [
    { x: 10, y: 20, label: 'Body A' },
    { x: 15, y: 25, label: 'Body B' },
    { x: 20, y: 30, label: 'Body C' },
];

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <Scatterplot data={data} />
        </div>
    );
}

export default App;
