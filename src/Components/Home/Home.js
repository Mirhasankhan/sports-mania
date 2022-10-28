import React, { useEffect, useState } from 'react';
import League from '../League/League';
import './Home.css';
import fakeData from '../../FakeData/Leagues.json';


const Home = () => {
    const [leagues, setLeagues] = useState([]);
    const data = fakeData
    console.log(data)

    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/2/all_leagues.php'

        fetch(url)
            .then(res => res.json())
            .then(data => setLeagues(data.leagues))
    }, [])
    return (
        <div>
            <div style={{ backgroundImage: `url("https://weareipig.com/wp-content/uploads/2020/08/Tottenham-Hotspur-Stadium-Glass-Skybridge-as-seen-on-Dezeen.jpg")`
            , height: '500px'
        }}>
            <h1 className="display-header">Sports Mania</h1>
            </div>
            <div>
          
                {
                    leagues.map(league => <League tournament={league}></League>)
                }
            </div>
        </div>
    );
};

export default Home;