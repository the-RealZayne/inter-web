import React from 'react';

export interface CodingProps {}

const Coding: React.FC<CodingProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Coding</h1>
            <h3>My Coding Projects</h3>
            <br />
            <div className="text-block">
                <p>
                    Placeholder text for Coding page. Add your coding content here.
                </p>
            </div>
        </div>
    );
};

export default Coding;
