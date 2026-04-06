import React from 'react';

export interface CodingProps {}

const Coding: React.FC<CodingProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Coding & Development</h1>
            <h3>Building digital worlds and automated tools.</h3>
            <br />
            
            <div className="text-block">
                <p>
                    I’m diving into the tech world and loving the process of turning logic into 
                    interactive experiences. Here’s a look at my current focus:
                </p>
            </div>

            <div style={styles.grid}>
                {/* Roblox & Fortnite */}
                <div style={styles.card}>
                    <div style={styles.cardHeader}>
                        <span style={styles.emoji}>🎮</span>
                        <h4 style={styles.cardTitle}>Map Engineering</h4>
                    </div>
                    <p style={styles.cardText}>
                        Creating custom maps and game modes in <strong>Roblox (Luau)</strong> and 
                        <strong> Fortnite (UEFN)</strong>. I'm focusing on unique arenas and 
                        mechanic-heavy challenges.
                    </p>
                </div>

                {/* Discord Bots */}
                <div style={styles.card}>
                    <div style={styles.cardHeader}>
                        <span style={styles.emoji}>🤖</span>
                        <h4 style={styles.cardTitle}>Discord Automation</h4>
                    </div>
                    <p style={styles.cardText}>
                        Developing custom bots for my server, 
                        <a href="https://discord.gg/8J5F9KjkS6" target="_blank" rel="noreferrer" style={styles.link}> ᘜOᗪ'S Oᖴ ᘔ</a>. 
                        Building everything from music integration to advanced moderation tools.
                    </p>
                </div>

                {/* Web Dev */}
                <div style={styles.card}>
                    <div style={styles.cardHeader}>
                        <span style={styles.emoji}>🌐</span>
                        <h4 style={styles.cardTitle}>Web Development</h4>
                    </div>
                    <p style={styles.cardText}>
                        Exploring <strong>React</strong> and <strong>TypeScript</strong>. This 
                        PC-folio is my current playground for learning modern front-end 
                        architecture and game design logic.
                    </p>
                </div>
            </div>

            <div className="text-block" style={{ marginTop: '2rem' }}>
                <div style={styles.ctaBox}>
                    <p style={{ margin: 0 }}>
                        Wanna talk code, share a project, or collaborate? <br />
                        Join the <strong><a href="https://discord.gg/8J5F9KjkS6" style={styles.link}>Discord Community</a></strong> and let’s geek out.
                    </p>
                </div>
            </div>
        </div>
    );
};

const styles: Record<string, React.CSSProperties> = {
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        marginTop: '20px',
    },
    card: {
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '12px',
        padding: '20px',
        transition: 'transform 0.2s ease',
    },
    cardHeader: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '12px',
    },
    emoji: {
        fontSize: '24px',
        marginRight: '12px',
    },
    cardTitle: {
        margin: 0,
        fontSize: '18px',
        color: '#00FF00', // Terminal green to match your vibe
    },
    cardText: {
        fontSize: '14px',
        lineHeight: '1.6',
        margin: 0,
    },
    link: {
        color: '#4285f4',
        textDecoration: 'none',
        fontWeight: 'bold',
    },
    ctaBox: {
        borderLeft: '4px solid #00FF00',
        backgroundColor: 'rgba(0, 255, 0, 0.05)',
        padding: '15px 20px',
        borderRadius: '0 8px 8px 0',
    }
};

export default Coding;
