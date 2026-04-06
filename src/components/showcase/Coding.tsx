import React from 'react';
import { useNavigate } from 'react-router-dom';
// Replace these with your actual GIF/Icon imports
import mapIcon from '../../assets/pictures/projects/software.gif'; 
import botIcon from '../../assets/pictures/projects/art.gif'; 
import webIcon from '../../assets/pictures/projects/music.gif';

const Coding: React.FC = () => {
    const navigate = useNavigate();

    const categories = [
        {
            title: "Map Engineering",
            subtitle: "ROBLOX & UEFN",
            route: "coding-maps",
            icon: mapIcon,
        },
        {
            title: "Discord Automation",
            subtitle: "BOT DEVELOPMENT",
            route: "coding-bots",
            icon: botIcon,
        },
        {
            title: "Web Development",
            subtitle: "REACT & TYPESCRIPT",
            route: "coding-web",
            icon: webIcon,
        }
    ];

    return (
        <div className="site-page-content">
            <h1>Coding</h1>
            <h3>& Development</h3>
            <br />
            <p>
                I’m turning logic into interactive experiences. 
                Select a field below to see my current projects, tools, and future goals.
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

export default Coding;
