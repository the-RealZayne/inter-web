import React from 'react';

export interface CollaborationsProps {}

const Collaborations: React.FC<CollaborationsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Collaborations</h1>
            <h3>Working Together</h3>
            <br />
            <div className="text-block">
                <p>
                    Placeholder text for Collaborations page. Add your collaborations content here.
                </p>
            </div>
        </div>
    );
};

export default Collaborations;
