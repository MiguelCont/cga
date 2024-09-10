import React from "react";
import '../styles/PlayerPage.css';
import headshot from './images/1/headshot.png'
import { useEffect, useState } from "react";


function PlayerCard({ player }) {
    const imageSrc = `/pictures/${player.playerId}/headshot.png`
    return (
        <div className="player-card">
            <div className="player-image">
                <img src={imageSrc} alt={player.firstName} />
            </div>
            <div className="player-info">
                <h3>{player.firstName} {player.lastName}</h3>
                <p>{player.shortDescription}</p>
                <a href={player.link}>View Profile</a>
            </div>
        </div>
    );
}

function PlayerGrid({ players }) {
    return (
        <div className="container">
            {players.map((player, index) => (
                <PlayerCard key={index} player={player} />
            ))}
        </div>
    );
}

function PlayerPage() {
    const players =  [
        {playerId: 1, firstName: "Miguel", lastName: "Contreras", shortDescription: "A brief description of Miggy. A key player in the team with impressive stats."},
        {playerId: 2, firstName: "Orlando", lastName: "Alvarez", shortDescription: "A brief description of Orlie. An okay athelete who sometimes does good at golf."}
    ];

    return (
        <>  
            <div class="group-image-container">
                <div className="player-box">
                    <div className="player-inner-box">
                        <h1 className="player-caption">Meet the Players</h1>
                    </div>
                </div>
                <img src='/pictures/group_photo.jpg' className="full-width-image"></img>
            </div>
                {/* PLayer Card */}
                <PlayerGrid players={players}/>
                
                {/* <div class="player-card">
                    <div class="player-image">
                        <img src={orlie} alt="Player 1"/>
                    </div>
                    <div class="player-info">
                        <h3>Orlando Alvarez</h3>
                        <p>A brief description of Orlie. An okay athelete who sometimes does good at golf.</p>
                        <a href="#">View Profile</a>
                    </div>
                </div> */}

                {/* <div class="player-card">
                    <div class="player-image">
                        <img src={miggy} alt="Player 2"/>
                    </div>
                    <div class="player-info">
                        <h3>Miguel Contreras</h3>
                        <p>A brief description of Miggy. A key player in the team with impressive stats.</p>
                        <a href="#">View Profile</a>
                    </div>
                </div> */}
        </>
    );
}

export default PlayerPage;