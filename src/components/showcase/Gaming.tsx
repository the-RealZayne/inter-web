import React from 'react';

export interface GamingProps {}

const Gaming: React.FC<GamingProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Gaming</h1>
            <h3>Let's Squad Up !</h3>
            <br />
            <div className="text-block">
                <p>
                    Gaming is my vibe, and I’m always down for a good session.
                    Here’s what I’m playing and why you should join me:
                </p>
            </div>

            {/* PSN Stats */}
            <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                <a href="https://www.exophase.com/user/theRealZayne/">
                    <img 
                        alt="PSN Stats"
                        src="https://card.exophase.com/2/0/319923.png?1773168393" 
                    />
                </a>
            </div>

            <div className="text-block">
                <p>
                    Playstation :<br /><br />
                    - <strong>Fortnite</strong>: I’m all about those clutch Victory Royales! Whether it’s building like a pro in Battle Royale or vibing in Creative mode, I love the fast-paced action and endless customization. If you’re into shooting games with epic skins and wild collabs, let’s drop in together!<br /><br />
                    - <strong>Call of Duty</strong>: Catch me at my finest! This is where i spend most of my gameplay. From MW3 to BO6 ill always show up for the kill!<br /><br />
                    - <strong>Rainbow 6: SIEGE</strong>: If theres a Tom Clancy game, chances are ive played it atleast once. What a great franchise to repersent and embrace.<br /><br />
                    - <strong>GTA 5</strong>: From pulling off heists to cruising Los Santos, GTA 5 is my go-to for open-world chaos. Love story-driven games or just causing mayhem? Join me for some RP or freeroam fun!<br /><br />
                    - <strong>Far Cry 6</strong>: Nothing beats liberating an island with explosive action and a killer soundtrack. If you love immersive FPS games with a gripping story, this one’s for you.<br /><br />
                </p>

                <table style={{ float: 'right', marginLeft: '1rem' }}>
                    <tbody>
                        <tr>
                            <td style={{ verticalAlign: 'middle', textAlign: 'left' }}>
                                <a href="https://widgetbite.com/polls/72b376da-0444-47b5-8d1a-dc16d5050067/options/1/vote">👉 COD</a>
                                <hr />
                                <a href="https://widgetbite.com/polls/72b376da-0444-47b5-8d1a-dc16d5050067/options/2/vote">👉 Ark Raiders</a>
                                <hr />
                                <a href="https://widgetbite.com/polls/72b376da-0444-47b5-8d1a-dc16d5050067/options/3/vote">👉 GTA V</a>
                                <hr />
                                <a href="https://widgetbite.com/polls/72b376da-0444-47b5-8d1a-dc16d5050067/options/4/vote">👉 Rainbow 6</a>
                            </td>
                            <td style={{ verticalAlign: 'top' }}>
                                <div style={{ textAlign: 'center' }}>
                                    <img alt="Poll Results" src="https://widgetbite.com/polls/72b376da-0444-47b5-8d1a-dc16d5050067/results" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div style={{ clear: 'both' }}></div>
                <br />

                <p>
                    Mobile :<br /><br />
                    - <strong>Roblox</strong>: This platform is endless creativity. I play everything from intense shooters to chill hangout games.<br /><br />
                    - <strong>Egg Inc.</strong>: One of the <strong>BEST</strong> idle farmer games i've ever played! Hours have been put into this awesome title.<br /><br />
                </p>

                <table style={{ float: 'right', marginLeft: '1rem' }}>
                    <tbody>
                        <tr>
                            <td style={{ verticalAlign: 'middle', textAlign: 'left' }}>
                                <a href="https://widgetbite.com/polls/d41b2786-809a-4a66-a3cf-57180729320f/options/1/vote">👉 Roblox</a>
                                <hr />
                                <a href="https://widgetbite.com/polls/d41b2786-809a-4a66-a3cf-57180729320f/options/2/vote">👉 Egg Inc.</a>
                            </td>
                            <td style={{ verticalAlign: 'top' }}>
                                <div style={{ textAlign: 'center' }}>
                                    <img alt="Poll Results" src="https://widgetbite.com/polls/d41b2786-809a-4a66-a3cf-57180729320f/results" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div style={{ clear: 'both' }}></div>
                <br />

                <p>
                    PC :<br /><br />
                    - <strong>Roblox</strong>: This platform is endless creativity. I play everything from intense shooters to chill hangout games. I’ve even started editing my own Roblox maps—stay tuned for some dope creations!<br /><br />
                    - <strong>Burglin' Gnomes</strong>: I've had soo much fun playing this game! It has allot of crazy, unexpected events that take place throughout endless hours of gameplay.<br /><br />
                    - <strong>Minecraft</strong>: Building epic structures, surviving the night, or exploring with friends—Minecraft never gets old.<br /><br />
                </p>

                <table style={{ float: 'right', marginLeft: '1rem' }}>
                    <tbody>
                        <tr>
                            <td style={{ verticalAlign: 'middle', textAlign: 'left' }}>
                                <a href="https://widgetbite.com/polls/5ac6cd5f-4d31-4837-a713-a0827aa9bf33/options/1/vote">👉 Minecraft</a>
                                <hr />
                                <a href="https://widgetbite.com/polls/5ac6cd5f-4d31-4837-a713-a0827aa9bf33/options/2/vote">👉 Roblox</a>
                                <hr />
                                <a href="https://widgetbite.com/polls/5ac6cd5f-4d31-4837-a713-a0827aa9bf33/options/3/vote">👉 Burglin' Gnomes</a>
                                <hr />
                                <a href="https://widgetbite.com/polls/5ac6cd5f-4d31-4837-a713-a0827aa9bf33/options/4/vote">👉 Fortnite</a>
                            </td>
                            <td style={{ verticalAlign: 'top' }}>
                                <div style={{ textAlign: 'center' }}>
                                    <img alt="Poll Results" src="https://widgetbite.com/polls/5ac6cd5f-4d31-4837-a713-a0827aa9bf33/results" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div style={{ clear: 'both' }}></div>
            </div>

            <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                {/* Elfsight Number Counter - Script moved to useEffect or public/index.html recommended, but keeping as div for structure */}
                <div className="elfsight-app-cdf1e580-1e4a-4c61-9afa-a14fc83ab41f" data-elfsight-app-lazy></div>
            </div>
        </div>
    );
};

export default Gaming;
