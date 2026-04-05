import React from 'react';

export interface ContributeProps {}

const Contribute: React.FC<ContributeProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Contribute</h1>
            <h3>Join the Community</h3>
            <br />
            <div className="text-block">
                <p>
                    Placeholder text for Contribute page. Add your contribute content here.
                </p>
            </div>
        </div>
    );
};

export default Contribute;
