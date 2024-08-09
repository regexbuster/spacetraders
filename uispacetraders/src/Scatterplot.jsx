import React from 'react';
import Plot from 'react-plotly.js';

function getSystemTypeColor(type) {
    // return '#000000';
    switch (type) {
        case 'NEUTRON_STAR':
            return '#73F8FA';
        case 'RED_STAR':
            return '#F5382E';
        case 'ORANGE_STAR':
            return '#FF9800';
        case 'BLUE_STAR':
            return '#03A9F4';
        case 'YOUNG_STAR':
            return '#F0A83C';
        case 'WHITE_DWARF':
            return '#ebe8e8';
        case 'BLACK_HOLE':
            return '#BB64D8';
        case 'HYPERGIANT':
            return '#CFFCFC';
        case 'NEBULA':
            return '#B06ABE';
        case 'UNSTABLE':
            return '#9CEB42';
        default:
            return '#CA52C2';
    }
}

const Scatterplot = ({ data }) => {
    const system_trace = {
        x: data.map((point) => point.x),
        y: data.map((point) => point.y),
        mode: 'markers',
        type: 'scatter',
        marker: {
            size: 8,
            color: data.map((point) => getSystemTypeColor(point.data.type)),
        },
        text: data.map((point) =>
            JSON.stringify({
                symbol: point.data.symbol,
                type: point.data.type,
                factions: point.data.factions,
            })
        ),
        textposition: 'top center',
    };

    return (
        <Plot
            data={[system_trace]}
            layout={{
                title: 'Orbital Bodies',
                xaxis: { title: 'X Coordinate', range: [-(2 ** 16), 2 ** 16] },
                yaxis: { title: 'Y Coordinate', range: [-(2 ** 17), 2 ** 17] },
                autosize: true,
            }}
            style={{ width: '100vw', height: '100vh' }}
            config={{ responsive: true, scrollZoom: true }}
        />
    );
};

export default Scatterplot;
