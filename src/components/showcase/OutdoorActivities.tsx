import React from 'react';

export interface OutdoorActivitiesProps {}

const OutdoorActivities: React.FC<OutdoorActivitiesProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Outdoor Activities</h1>
            <h3>Exploring the Great Outdoors</h3>
            <br />
            <div className="text-block">
                <p>
                    Placeholder text for Outdoor Activities page. Add your outdoor activities content here.
                </p>
            </div>
        </div>
    );
};

export default OutdoorActivities;
