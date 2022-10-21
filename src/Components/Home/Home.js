import React, { useEffect, useState } from 'react';
import League from '../League/League';
import './Home.css';


const Home = () => {
    const [leagues, setLeagues] = useState([]);
    
    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/2/all_leagues.php'
         fetch(url)
        .then(res => res.json())
        .then(data => setLeagues(data.leagues))
    }, [])
    return (
        <div className="display-header">
            <h2 className="display-header">Sports Mania</h2>
            {
                leagues.map(league => <League tournament={league}></League>)
            }
            
        </div>
    );
};

export default Home;