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
                    When I’m not gaming, coding, or making music, you’ll usually find me outside enjoying the outdoors. I’ve always loved being active and exploring nature, whether that means hitting the trails, spending time on the water, or heading up into the mountains. Here are a few of the outdoor activities I’m most passionate about:
            Biking : Whether I’m riding local trails or cruising around town, biking is one of my favorite ways to stay active and clear my head. There’s nothing better than getting outside for a ride and exploring new routes.
            Fishing : Fishing is one of the most relaxing things I do, especially when in my kayak. Casting a line, enjoying the quiet, and waiting for that next big catch is the perfect way to slow things down and appreciate nature.
            Hiking : I enjoy lightweight overnight hiking on the Appalachian Trail, chasing scenic views, peaceful forests, and star-filled skies. Whether it’s a quick day hike or a multi-day trek, I’m always up for exploring a new section of trail.
            Camping : From pitching a tent in the woods to sitting around a campfire roasting marshmallows, camping is one of the best ways to disconnect and recharge. I love the simplicity of life outdoors.
            Cliff Jumping : For the adrenaline side of things, cliff jumping into lakes or rivers is always a thrill. It’s the perfect mix of adventure, excitement, and a refreshing splash on a hot day.
            Skiing : I’ve been skiing for almost 10 years and it’s one of my favorite winter activities. I regularly ski at mountains like Sunday River, Sugarloaf, Lost Valley, Mt. Abram, and Pleasant Mountain. I also record some of my runs using my GoPro and share the highlights on my YouTube channel.
            Snowboarding (Coming Soon) : This upcoming season I’m planning to start learning how to snowboard. It’ll definitely be a new challenge, but I’m excited to document the progress, wipeouts, and improvements along the way: This upcoming season I’m planning to start learning how to snowboard. It’ll definitely be a new challenge, but I’m excited to document the progress, wipeouts, and improvements along the way.
            Track and Field : This year I’ll be trying out for Track & Field. It’s something I’ve been wanting to do for about a year now, and I’m excited to finally push myself to go for it. I’m looking forward to training harder, improving my endurance and speed, and seeing how far I can take it.
            Got a favorite outdoor spot, trail or activity? Share it in my <a href="https://discord.gg/8J5F9KjkS6">Discord</a>!
                </p>
            </div>
        </div>
    );
};

export default OutdoorActivities;
