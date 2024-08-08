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
        text: data.map((point) => point.label),
        textposition: 'top center',
    };

    return (
        <Plot
            data={[trace]}
            layout={{
                title: 'Orbital Bodies',
                xaxis: { title: 'X Coordinate', range: [-64338, 65431] },
                yaxis: { title: 'Y Coordinate', range: [-65467, 72422] },
                autosize: true,
            }}
            style={{ width: '100%', height: '100%' }}
            config={{ responsive: true, scrollZoom: true }}
        />
    );
};

export default Scatterplot;
