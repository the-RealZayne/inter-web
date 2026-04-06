import React from 'react';
import { useNavigate } from 'react-router-dom';
// Replace these with your actual icon/GIF paths
import landIcon from '../../assets/pictures/projects/software.gif'; 
import waterIcon from '../../assets/pictures/projects/art.gif'; 
import winterIcon from '../../assets/pictures/projects/music.gif';

const OutdoorActivities: React.FC = () => {
    const navigate = useNavigate();

    const categories = [
        {
            title: "Land & Trail",
            subtitle: "HIKING • BIKING • TRACK",
            route: "outdoor-land",
            icon: landIcon,
        },
        {
            title: "Water & Thrills",
            subtitle: "FISHING • CLIFF JUMPING",
            route: "outdoor-water",
            icon: waterIcon,
        },
        {
            title: "Winter Sports",
            subtitle: "SKIING • SNOWBOARDING",
            route: "outdoor-winter",
            icon: winterIcon,
        }
    ];

    return (
        <div className="site-page-content">
            <h1>Outdoor Activities</h1>
            <h3>Exploring the Great Outdoors</h3>
            <br />
            <div className="text-block">
                <p>
                    When I’m not gaming or coding, you’ll usually find me clearing my head in nature. 
                    From the Appalachian Trail to the peaks of Sunday River, here is how I stay active:
                </p>
            </div>
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

export default OutdoorActivities;
