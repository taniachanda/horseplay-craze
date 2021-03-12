import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Team from '../Team/Team';

const Home = () => {
    const [ teams, setTeams] = useState([]);

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`)
        .then(res => res.json())
        .then(data => setTeams(data.teams ))
    }, [])
    return (
        <div>
            <Header></Header>
            <div className="container-fluid row m-3">
                {/* <h1 className="text-center fw-bold">Teams: {teams.length}</h1> */}
                {
                    teams.map(team => <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <Team key={team.idTeam} team={team}></Team>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Home;