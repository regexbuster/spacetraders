import React from 'react';
import Plot from 'react-plotly.js';

const Scatterplot = ({ data }) => {
    // Transform your data into Plotly format
    const trace = {
        x: data.map((point) => point.x),
        y: data.map((point) => point.y),
        mode: 'markers',
        type: 'scatter',
        marker: { size: 8, color: 'blue' },
        text: data.map((point) => point.symbol),
        textposition: 'top center',
    };

    return (
        <Plot
            data={[trace]}
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
