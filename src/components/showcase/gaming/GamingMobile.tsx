import React from 'react';

const GamingMobile: React.FC = () => {
    return (
        <div className="site-page-content">
            <h1>Mobile Gaming</h1>
            <h3>Gaming on the Go</h3>
            <div className="text-block">
                <p>
                    - <strong>Roblox</strong>: Endless creativity from shooters to chill hangouts.<br /><br />
                    - <strong>Egg Inc.</strong>: One of the BEST idle farmer games ever!
                </p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
                <table style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '12px' }}>
                    <tbody>
                        <tr>
                            <td style={{ paddingRight: '20px' }}>
                                <a href="https://widgetbite.com/polls/d41b2786-809a-4a66-a3cf-57180729320f/options/1/vote">👉 Roblox</a><hr />
                                <a href="https://widgetbite.com/polls/d41b2786-809a-4a66-a3cf-57180729320f/options/2/vote">👉 Egg Inc.</a>
                            </td>
                            <td><img src="https://widgetbite.com/polls/d41b2786-809a-4a66-a3cf-57180729320f/results" style={{ width: '100%', borderRadius: '8px' }} alt="results" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default GamingMobile;
