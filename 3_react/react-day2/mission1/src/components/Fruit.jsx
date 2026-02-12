import { useState } from 'react';
import fruits from '../data/fruit.js';

function Fruit() {
    return <ul style={{ listStyle: 'none', padding: 0 }}>
        {fruits.map((fruit) => (
            <li
                key={fruit.id}
                style={{
                    padding: '15px',
                    margin: '10px 0',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '5px',
                    borderLeft: `5px solid ${fruit.color}`,
                }}
            >
                <span style={{ fontSize: '1.5rem' }}>
                    {fruit.name}
                </span>
            </li>
        ))}
    </ul>
}

export default Fruit;