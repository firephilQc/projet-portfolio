import React, { useState } from 'react';
const Search = () => {
    const [query, setQuery] = useState('');

    const [results, setResults] = useState([]);
    const handleSubmit = async event => {
        event.preventDefault(); // Previent le rechargement de la page
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=6ac1e3f9caf32f53c1769ed656dbedd8&query=${query}`);
        const data = await response.json(); 
        console.log(data.results);
        setResults(data.results);
    }

    return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={query} onChange={event => setQuery(event.target.value)}/>
            <button type='submit'>Clic si tu aimes Martin</button>
        </form>
        <ul>
            {results.map(result => (
            <li key={result.id}>{result.title}</li>
            ))}
        </ul>
    </div>
    )
}

export default Search;