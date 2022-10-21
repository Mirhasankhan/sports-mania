import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ExtraDetail from '../ExtraDetail/ExtraDetail';

const LeagueDetail = () => {  
    const [details, setDetails] = useState({})
    const {leagueDetail} = useParams()
       useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/2/all_leagues.php/${leagueDetail}`
       
        fetch(url)
        .then(res => res.json())
        .then(data => setDetails(data.leagues))        
    }, [leagueDetail])
    console.log(details)
    return (
        <div>
            <h2>this is league Detail :{leagueDetail}</h2>
            
            {
                details.map(detail => <ExtraDetail infos={detail}></ExtraDetail>)
            }
        </div>
    );
};

export default LeagueDetail;