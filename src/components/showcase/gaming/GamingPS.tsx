import React from 'react';

const GamingPS: React.FC = () => {
    return (
        <div className="site-page-content">
            <h1>Playstation</h1>
            <h3>Trophies & Tactics</h3>
            
            <div style={styles.statsWrapper}>
                <a href="https://www.exophase.com/user/theRealZayne/" target="_blank" rel="noreferrer">
                    <img 
                        alt="PSN Stats"
                        src="https://card.exophase.com/2/0/319923.png?1773168393" 
                        style={styles.psnCard}
                    />
                </a>
            </div>

            <div className="text-block">
                <p>
                    - <strong>Fortnite</strong>: All about those clutch Victory Royales!<br /><br />
                    - <strong>Call of Duty</strong>: From MW3 to BO6, I'm always showing up for the kill.<br /><br />
                    - <strong>Rainbow 6: SIEGE</strong>: If it's Tom Clancy, I've played it.
                </p>
            </div>

            <div style={styles.pollWrapper}>
                <table style={styles.tableMain}>
                    <tbody>
                        <tr>
                            <td style={styles.tableLinkCell}>
                                <a href="https://widgetbite.com/polls/72b376da-0444-47b5-8d1a-dc16d5050067/options/1/vote">👉 COD</a><hr />
                                <a href="https://widgetbite.com/polls/72b376da-0444-47b5-8d1a-dc16d5050067/options/2/vote">👉 Ark Raiders</a><hr />
                                <a href="https://widgetbite.com/polls/72b376da-0444-47b5-8d1a-dc16d5050067/options/3/vote">👉 GTA V</a><hr />
                                <a href="https://widgetbite.com/polls/72b376da-0444-47b5-8d1a-dc16d5050067/options/4/vote">👉 Rainbow 6</a>
                            </td>
                            <td><img alt="Poll" src="https://widgetbite.com/polls/72b376da-0444-47b5-8d1a-dc16d5050067/results" style={styles.pollImg} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const styles: Record<string, React.CSSProperties> = {
    statsWrapper: { display: 'flex', justifyContent: 'center', margin: '4rem 0' },
    psnCard: { borderRadius: '12px', boxShadow: '0 8px 30px rgba(0,0,0,0.6)', transform: 'scale(1.2)', maxWidth: '80%', height: 'auto' },
    pollWrapper: { display: 'flex', justifyContent: 'center', margin: '2rem 0' },
    tableMain: { backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '20px', width: '100%' },
    tableLinkCell: { minWidth: '150px', fontSize: '1.1rem' },
    pollImg: { width: '100%', borderRadius: '8px' }
};

export default GamingPS;
