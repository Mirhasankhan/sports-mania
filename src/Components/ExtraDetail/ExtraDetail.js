import React from 'react';

const ExtraDetail = (props) => {
    const {strLeague, strSport, idLeague} = props.infos;
    return (
        <div>
            <p>{idLeague}</p>
            <h1>{strLeague}</h1>
            <h2>{strSport}</h2>
        </div>
    );
};

export default ExtraDetail;