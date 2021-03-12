import React from 'react';
import { Link } from 'react-router-dom';
import './Team.css'
import{FaArrowRight} from "react-icons/fa";

const Team = (props) => {
    const { strTeamBadge, strTeam, idTeam } = props.team;
    return (
        <div className="container-fluid d-flex team-card">
            <div className="card">
                        <div className="badge">
                            <img src={strTeamBadge} className='card-img-top img-fluid card-img' />
                        </div>
                        <div className="card-body text-dark">
                            <h2 className="card-title">{strTeam}</h2>
                            <p>Sports type: Football</p>
                           <button className="btn  btn-dark text-light"><Link to={`/team/${idTeam}`}>Explore<span> <FaArrowRight /> </span></Link></button>
                        </div>
            </div>
        </div>
    );
};

export default Team;