import { useState, useEffect } from "react";

function DataFetcher() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    return (
        <ul>
            {data.slice(0, 5).map(item => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    );
}

export default DataFetcher;

