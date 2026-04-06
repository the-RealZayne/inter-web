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

            {/* PSN Stats - Centered and Enlarged */}
            <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                margin: '3rem 0',
                transform: 'scale(1.15)', // Enlarges the card slightly
            }}>
                <a href="https://www.exophase.com/user/theRealZayne/" target="_blank" rel="noreferrer">
                    <img 
                        alt="PSN Stats"
                        src="https://card.exophase.com/2/0/319923.png?1773168393" 
                        style={{ borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.5)' }}
                    />
                </a>
            </div>

            <div className="text-block">
                {/* --- Playstation Section --- */}
                <p>
                    <strong>Playstation :</strong><br /><br />
                    - <strong>Fortnite</strong>: I’m all about those clutch Victory Royales! Whether it’s building like a pro in Battle Royale or vibing in Creative mode...<br /><br />
                    - <strong>Call of Duty</strong>: Catch me at my finest! This is where i spend most of my gameplay. From MW3 to BO6 ill always show up for the kill!<br /><br />
                    - <strong>Rainbow 6: SIEGE</strong>: If theres a Tom Clancy game, chances are ive played it atleast once.<br /><br />
                </p>

                {/* Centered Poll Table 1 */}
                <div style={styles.pollWrapper}>
                    <table style={styles.tableMain}>
                        <tbody>
                            <tr>
                                <td style={styles.tableLinkCell}>
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
                                        <img alt="Poll Results" src="https://widgetbite.com/polls/72b376da-0444-47b5-8d1a-dc16d5050067/results" style={styles.pollImg} />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* --- Mobile Section --- */}
                <p>
                    <strong>Mobile :</strong><br /><br />
                    - <strong>Roblox</strong>: This platform is endless creativity. I play everything from intense shooters to chill hangout games.<br /><br />
                    - <strong>Egg Inc.</strong>: One of the <strong>BEST</strong> idle farmer games i've ever played!<br /><br />
                </p>

                {/* Centered Poll Table 2 */}
                <div style={styles.pollWrapper}>
                    <table style={styles.tableMain}>
                        <tbody>
                            <tr>
                                <td style={styles.tableLinkCell}>
                                    <a href="https://widgetbite.com/polls/d41b2786-809a-4a66-a3cf-57180729320f/options/1/vote">👉 Roblox</a>
                                    <hr />
                                    <a href="https://widgetbite.com/polls/d41b2786-809a-4a66-a3cf-57180729320f/options/2/vote">👉 Egg Inc.</a>
                                </td>
                                <td style={{ verticalAlign: 'top' }}>
                                    <div style={{ textAlign: 'center' }}>
                                        <img alt="Poll Results" src="https://widgetbite.com/polls/d41b2786-809a-4a66-a3cf-57180729320f/results" style={styles.pollImg} />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* --- PC Section --- */}
                <p>
                    <strong>PC :</strong><br /><br />
                    - <strong>Minecraft</strong>: Building epic structures, surviving the night, or exploring with friends—Minecraft never gets old.<br /><br />
                    - <strong>Burglin' Gnomes</strong>: I've had soo much fun playing this game!<br /><br />
                </p>

                {/* Centered Poll Table 3 */}
                <div style={styles.pollWrapper}>
                    <table style={styles.tableMain}>
                        <tbody>
                            <tr>
                                <td style={styles.tableLinkCell}>
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
                                        <img alt="Poll Results" src="https://widgetbite.com/polls/5ac6cd5f-4d31-4837-a713-a0827aa9bf33/results" style={styles.pollImg} />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Counter Widget */}
            <div style={{ textAlign: 'center', margin: '3rem 0' }}>
                <div className="elfsight-app-cdf1e580-1e4a-4c61-9afa-a14fc83ab41f" data-elfsight-app-lazy></div>
            </div>
        </div>
    );
};

// Reusable styles for the poll blocks
const styles: Record<string, React.CSSProperties> = {
    pollWrapper: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        margin: '2.5rem 0',
    },
    tableMain: {
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '12px',
        padding: '20px',
        width: '90%', // Enlarged width
        maxWidth: '600px',
        borderCollapse: 'separate',
        borderSpacing: '15px 0',
    },
    tableLinkCell: {
        verticalAlign: 'middle',
        textAlign: 'left',
        minWidth: '150px',
        fontSize: '1.1rem', // Enlarged text
    },
    pollImg: {
        width: '100%',
        minWidth: '250px',
        borderRadius: '8px',
    }
};

export default Gaming;
