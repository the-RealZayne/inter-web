import React from 'react';

export interface ContentCreationProps {}

const ContentCreation: React.FC<ContentCreationProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Content Creation</h1>
            <h3>My Content Creation Journey</h3>
            <br />
            <div className="text-block">
                <p>
                    Placeholder text for Content Creation page. Add your content creation content here.
                </p>
            </div>
        </div>
    );
};

export default ContentCreation;
