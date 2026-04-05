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
                    When I’m not gaming, coding, or making music, you’ll usually find me outside enjoying the outdoors. 
                    I’ve always loved being active and exploring nature, whether that means hitting the trails, spending 
                    time on the water, or heading up into the mountains. Here are a few of the outdoor activities I’m 
                    most passionate about:
                </p>
                <br />
                <ul>
                    <li>
                        <strong>Biking:</strong> Whether I’m riding local trails or cruising around town, biking is one of my favorite ways to stay active and clear my head.
                    </li>
                    <li>
                        <strong>Fishing:</strong> Fishing is one of the most relaxing things I do, especially when in my kayak. Casting a line and enjoying the quiet is the perfect way to slow things down.
                    </li>
                    <li>
                        <strong>Hiking:</strong> I enjoy lightweight overnight hiking on the Appalachian Trail, chasing scenic views, peaceful forests, and star-filled skies.
                    </li>
                    <li>
                        <strong>Camping:</strong> From pitching a tent in the woods to sitting around a campfire, camping is one of the best ways to disconnect and recharge.
                    </li>
                    <li>
                        <strong>Cliff Jumping:</strong> For the adrenaline side of things, cliff jumping into lakes or rivers is always a thrill—a perfect mix of adventure and excitement.
                    </li>
                    <li>
                        <strong>Skiing:</strong> I’ve been skiing for almost 10 years at mountains like Sunday River and Sugarloaf. I even record highlights on my GoPro for my YouTube channel.
                    </li>
                    <li>
                        <strong>Snowboarding (Coming Soon):</strong> This upcoming season I’m planning to start learning how to snowboard. I'm excited to document the progress and the wipeouts!
                    </li>
                    <li>
                        <strong>Track and Field:</strong> This year I’ll be trying out for Track & Field to push my endurance and speed to the next level.
                    </li>
                </ul>
                <br />
                <p>
                    Got a favorite outdoor spot, trail or activity? Share it in my <a href="https://discord.gg/8J5F9KjkS6" target="_blank" rel="noreferrer">Discord</a>!
                </p>
            </div>
        </div>
    );
};

export default OutdoorActivities;
