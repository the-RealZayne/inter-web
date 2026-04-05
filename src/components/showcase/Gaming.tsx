import React from 'react';

export interface GamingProps {}

const Gaming: React.FC<GamingProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Gaming</h1>
            <h3>My Gaming Adventures</h3>
            <br />
            <div className="text-block">
                <p>
                    Placeholder text for Gaming page. Add your gaming content here.
                </p>
            </div>
        </div>
    );
};

export default Gaming;
