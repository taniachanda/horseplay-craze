import React, { useEffect, useState } from 'react';

import { FaFacebook, FaFlag, FaFootballBall, FaMapPin, FaMars, FaTwitterSquare, FaYoutubeSquare } from 'react-icons/fa';
import { useParams } from 'react-router';
import './TeamDetail.css'
import maleImage from './male.png'
import femaleImage from './female.png'

const TeamDetail = () => {
    const { teamId } = useParams();
    const [team, setTeam] = useState({});
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.teams[0]))
    }, [teamId]
    );

    return (
        <div className="container-fluid team-detail">
            <div className="img-fluid cover-image" style={{ height: 255, width: 1369, backgroundImage: `url(${team.strStadiumThumb})` }} >
               <div className="team-logo text-center">
               <img className='' width="150px" src={team.strTeamBadge} alt="" />
               </div>
            </div>
            <div className="container">
                <div className="row detail-info ">
                        <div className="col-md-6 col-sm-12 col-xs-6 text-left team-info">
                            <h3 className="">{team.strTeam}</h3>
                            <ul>
                                <h6><span><FaMapPin /></span> Founded: {team.intFormedYear}</h6>
                                <h6><span><FaFlag /> </span>Country: {team.strCountry}</h6>
                                <h6><span><FaFootballBall /> </span>Sport Type: {team.strSport}</h6>
                                <h6><span><FaMars /></span>Gender: {team.strGender}</h6>
                            </ul>
                        </div>
                        <div className="col-md-6 col-sm-12 text-right">
                            {
                                team.strGender === 'Male'
                                    ? <img className="img-fluid" src={maleImage} alt="" />
                                    : <img className="img-fluid" src={femaleImage} alt="" />
                            }
                        </div>
                </div>
                <div className="description">
                    <p>{team.strDescriptionEN}</p>
                </div>
            </div>
            <div className="container social-icon ">
             <div className="">
             <ul className='row justify-content-center'>
                   <li> <a href={team.strFacebook}><FaFacebook size="2em" /></a></li>
                   <li> <a href={team.strTwitter}><FaTwitterSquare size="2em" /></a></li>
                   <li> <a href={team.strYoutube}><FaYoutubeSquare size="2em" /></a></li>
              </ul>   
             </div>
            </div>
        </div>
    );
};

export default TeamDetail;