import React from 'react';
import '../index.css';

const Jokes = ({joke}) => {

    return(
    <div className = "quote">
        <div className = "dev" title = "DaD">DaD</div>
        <blockquote className="stylingquote">
            {joke.joke}
            </blockquote>
            
        <div className="devlife" title="Jokes">Jokes :)</div>

    </div>
    )
}
export default Jokes;
