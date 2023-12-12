// src/DataList.js
import React, { useState, useEffect } from 'react';

const DataList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data from the Zoo Search API when the component mounts
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8081/api/post-data');
            const jsonData = await response.json();
            console.log('Fetched data:', jsonData); // Log the fetched data
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <h1>Zoo UI</h1>
            <h2>Data from Zoo Search API:</h2>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default DataList;
