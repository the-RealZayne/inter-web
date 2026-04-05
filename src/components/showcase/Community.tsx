import React from 'react';

export interface CommunityProps {}

const Community: React.FC<CommunityProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Community</h1>
            <h3>Building Connections</h3>
            <br />
            <div className="text-block">
                <p>
                    Placeholder text for Community page. Add your community content here.
                </p>
            </div>
        </div>
    );
};

export default Community;
