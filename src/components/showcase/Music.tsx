import React from 'react';

export interface MusicProps {}

const Music: React.FC<MusicProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Music</h1>
            <h3>My Musical World</h3>
            <br />
            <div className="text-block">
                <p>
                    Placeholder text for Music page. Add your music content here.
                </p>
            </div>
        </div>
    );
};

export default Music;
