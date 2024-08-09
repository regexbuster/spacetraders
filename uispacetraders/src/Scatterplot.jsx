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

const Scatterplot = ({ data, hexSize }) => {
    const hexRadius = hexSize;
    const hexWidth = 2 * hexRadius;
    const hexHeight = Math.sqrt(3) * hexRadius;

    const createHexagonVertices = (cx, cy) => {
        const vertices = [];
        for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i;
            const x = cx + hexRadius * Math.cos(angle);
            const y = cy + hexRadius * Math.sin(angle);
            vertices.push([x, y]);
        }
        return vertices;
    };

    const createHexShapes = () => {
        const shapes = [];
        for (let row = 0; row < hexHeight; row++) {
            for (let col = 0; col < hexWidth; col++) {
                const xOffset = col * hexWidth * 0.75;
                const yOffset = row * hexHeight + ((col % 2) * hexHeight) / 2;
                const vertices = createHexagonVertices(xOffset, yOffset);
                const path =
                    vertices.map(([x, y]) => `${x},${y}`).join(' L ') + ' Z';
                shapes.push({
                    type: 'path',
                    path: `M ${path}`,
                    fillcolor: 'rgba(200, 200, 200, 0.3)',
                    line: {
                        width: 1,
                        color: 'gray',
                    },
                });
            }
        }
        return shapes;
    };
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
                shapes: createHexShapes(),
            }}
            style={{ width: '100vw', height: '100vh' }}
            config={{ responsive: true, scrollZoom: true }}
        />
    );
};

export default Scatterplot;
