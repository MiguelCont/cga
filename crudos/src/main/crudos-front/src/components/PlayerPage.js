import React from "react";
import '../styles/PlayerPage.css';
import group_pic from '../images/group_photo.jpg'

function PlayerPage() {
    return (
        <>  
            <div class="group-image-container">
                <div className="player-box">
                    <div className="player-inner-box">
                        <h1 className="player-caption">Meet the Players</h1>
                    </div>
                </div>
                <img src={group_pic} className="full-width-image"></img>
            </div>
            <div class="container">
                {/* PLayer Card */}
                
                <div class="player-card">
                    <div class="player-image">
                        <img src="player1.jpg" alt="Player 1"/>
                    </div>
                    <div class="player-info">
                        <h3>Player 1</h3>
                        <p>A brief description of Player 1. A talented athlete known for their skill.</p>
                        <a href="#">View Profile</a>
                    </div>
                </div>

                <div class="player-card">
                    <div class="player-image">
                        <img src="player2.jpg" alt="Player 2"/>
                    </div>
                    <div class="player-info">
                        <h3>Player 2</h3>
                        <p>A brief description of Player 2. A key player in the team with impressive stats.</p>
                        <a href="#">View Profile</a>
                    </div>
                </div>

            </div>
        </>
    );
}

export default PlayerPage;