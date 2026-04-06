import React from 'react';
import { useNavigate } from 'react-router-dom';
// Replace with your actual icon/GIF paths
import psIcon from '../../assets/pictures/projects/software.gif'; 
import mobileIcon from '../../assets/pictures/projects/art.gif'; 
import pcIcon from '../../assets/pictures/projects/music.gif';

const Gaming: React.FC = () => {
    const navigate = useNavigate();

    const categories = [
        {
            title: "Playstation",
            subtitle: "CONSOLING",
            route: "gaming-playstation",
            icon: psIcon,
        },
        {
            title: "Mobile",
            subtitle: "ON THE GO",
            route: "gaming-mobile",
            icon: mobileIcon,
        },
        {
            title: "PC Gaming",
            subtitle: "MASTER RACE",
            route: "gaming-pc",
            icon: pcIcon,
        }
    ];

    return (
        <div className="site-page-content">
            <h1>Gaming</h1>
            <h3>Let's Squad Up!</h3>
            <br />
            <p>
                Gaming is my vibe, and I’m always down for a good session. 
                Pick a platform below to see what I'm playing and vote on what we should play next!
            </p>
            <br />
            <div style={styles.projectLinksContainer}>
                {categories.map((cat, index) => (
                    <div
                        key={index}
                        onMouseDown={() => navigate(`/${cat.route}`)}
                        className="big-button-container"
                        style={styles.projectLink}
                    >
                        <div style={styles.projectLinkLeft}>
                            <img src={cat.icon} style={styles.projectLinkImage} alt="" />
                            <div style={styles.projectText}>
                                <h1 style={{ fontSize: 48, margin: 0 }}>{cat.title}</h1>
                                <h3 style={{ margin: 0 }}>{cat.subtitle}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Global Visitor Counter */}
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                <div className="elfsight-app-cdf1e580-1e4a-4c61-9afa-a14fc83ab41f" data-elfsight-app-lazy></div>
            </div>
        </div>
    );
};

const styles: Record<string, React.CSSProperties> = {
    projectLinksContainer: { display: 'flex', flexDirection: 'column', width: '100%' },
    projectLink: { marginBottom: 24, cursor: 'pointer', width: '100%', display: 'flex', alignItems: 'center', padding: '10px 0' },
    projectLinkLeft: { display: 'flex', alignItems: 'center', marginLeft: 16 },
    projectLinkImage: { width: 56, height: 56, marginRight: 38 },
    projectText: { display: 'flex', flexDirection: 'column', justifyContent: 'center' },
};

export default Gaming;
