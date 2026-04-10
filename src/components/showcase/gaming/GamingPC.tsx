import React from 'react';

const GamingPC: React.FC = () => {
    return (
        <div className="site-page-content">
            <h1>PC Gaming</h1>
            <h3>The Master Race</h3>
            <div className="text-block">
                <p>
                    - <strong>Minecraft</strong>: Building epic structures and exploring with friends.<br /><br />
                    - <strong>Burglin' Gnomes</strong>: Absolute chaotic fun!
                </p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
                <table style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '12px' }}>
                    <tbody>
                        <tr>
                            <td style={{ paddingRight: '20px' }}>
                                <a href="https://widgetbite.com/polls/5ac6cd5f-4d31-4837-a713-a0827aa9bf33/options/1/vote">👉 Minecraft</a><hr />
                                <a href="https://widgetbite.com/polls/5ac6cd5f-4d31-4837-a713-a0827aa9bf33/options/2/vote">👉 Roblox</a><hr />
                                <a href="https://widgetbite.com/polls/5ac6cd5f-4d31-4837-a713-a0827aa9bf33/options/3/vote">👉 Burglin' Gnomes</a><hr />
                                <a href="https://widgetbite.com/polls/5ac6cd5f-4d31-4837-a713-a0827aa9bf33/options/4/vote">👉 Fortnite</a>
                            </td>
                            <td><img src="https://widgetbite.com/polls/5ac6cd5f-4d31-4837-a713-a0827aa9bf33/results" style={{ width: '100%', borderRadius: '8px' }} alt="results" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default GamingPC;