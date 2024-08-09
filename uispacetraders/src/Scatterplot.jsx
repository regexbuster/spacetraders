import React from 'react';
import Plot from 'react-plotly.js';

function getSystemTypeColor(type) {
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
                paper_bgcolor: '#1f1f1f',
                plot_bgcolor: '#2f2f2f',
                xaxis: {
                    title: 'X Coordinate',
                    range: [-70000, 70000],
                    color: '#ffffff',
                    linecolor: '#ffffff',
                    tickcolor: '#ffffff',
                },
                yaxis: {
                    title: 'Y Coordinate',
                    range: [-80000, 80000],
                    color: '#ffffff',
                    linecolor: '#ffffff',
                    tickcolor: '#ffffff',
                },

                autosize: true,
                dragmode: 'pan',
            }}
            style={{ width: '80vw', height: '90vh' }}
            config={{
                responsive: true,
                scrollZoom: true,
                displayModeBar: false,
            }}
        />
    );
};

export default Scatterplot;
