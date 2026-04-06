import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../showcase/Home';
import About from '../showcase/About';
import Zoogle from '../showcase/Zoogle';
import Gaming from '../showcase/Gaming';
import ContentCreation from '../showcase/ContentCreation';
import Music from '../showcase/Music';
import Community from '../showcase/Community';
import Coding from '../showcase/Coding';
import Collaborations from '../showcase/Collaborations';
import OutdoorActivities from '../showcase/OutdoorActivities';
import BookingSchedule from '../showcase/BookingSchedule';
import Contribute from '../showcase/Contribute';
import Window from '../os/Window';
import Experience from '../showcase/Experience';
import Projects from '../showcase/Projects';
import Contact from '../showcase/Contact';

// --- NEW SUB-PAGE IMPORTS ---
// Gaming Sub-pages
import GamingPS from '../showcase/GamingPS';
import GamingPC from '../showcase/GamingPC';
import GamingMobile from '../showcase/GamingMobile';

// Coding Sub-pages
import CodingMaps from '../showcase/CodingMaps';
import CodingBots from '../showcase/CodingBots';
import CodingWeb from '../showcase/CodingWeb';

// Outdoor Sub-pages
import OutdoorLand from '../showcase/OutdoorLand';
import OutdoorWater from '../showcase/OutdoorWater';
import OutdoorWinter from '../showcase/OutdoorWinter';
// ----------------------------

import SoftwareProjects from '../showcase/projects/Software';
import MusicProjects from '../showcase/projects/Music';
import ArtProjects from '../showcase/projects/Art';
import VerticalNavbar from '../showcase/VerticalNavbar';
import useInitialWindowSize from '../../hooks/useInitialWindowSize';

export interface ShowcaseExplorerProps extends WindowAppProps {}

const ShowcaseExplorer: React.FC<ShowcaseExplorerProps> = (props) => {
    const { initWidth, initHeight } = useInitialWindowSize({ margin: 100 });

    return (
        <Window
            top={24}
            left={56}
            width={initWidth}
            height={initHeight}
            windowTitle="theRealZayne - PC-folio 2026"
            windowBarIcon="windowExplorerIcon"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
            bottomLeftText={'© Copyright 2026 theRealZayne'}
        >
            <Router>
                <div className="site-page">
                    <VerticalNavbar />
                    <Routes>
                        {/* Main Pages */}
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/zoogle" element={<Zoogle />} />
                        <Route path="/content-creation" element={<ContentCreation />} />
                        <Route path="/music" element={<Music />} />
                        <Route path="/community" element={<Community />} />
                        <Route path="/collaborations" element={<Collaborations />} />
                        <Route path="/booking-schedule" element={<BookingSchedule />} />
                        <Route path="/contribute" element={<Contribute />} />

                        {/* Gaming & Sub-pages */}
                        <Route path="/gaming" element={<Gaming />} />
                        <Route path="/gaming-playstation" element={<GamingPS />} />
                        <Route path="/gaming-pc" element={<GamingPC />} />
                        <Route path="/gaming-mobile" element={<GamingMobile />} />

                        {/* Coding & Sub-pages */}
                        <Route path="/coding" element={<Coding />} />
                        <Route path="/coding-maps" element={<CodingMaps />} />
                        <Route path="/coding-bots" element={<CodingBots />} />
                        <Route path="/coding-web" element={<CodingWeb />} />

                        {/* Outdoor & Sub-pages */}
                        <Route path="/outdoor-activities" element={<OutdoorActivities />} />
                        <Route path="/outdoor-land" element={<OutdoorLand />} />
                        <Route path="/outdoor-water" element={<OutdoorWater />} />
                        <Route path="/outdoor-winter" element={<OutdoorWinter />} />

                        {/* Nested Project Pages */}
                        <Route path="/projects/software" element={<SoftwareProjects />} />
                        <Route path="/projects/music" element={<MusicProjects />} />
                        <Route path="/projects/art" element={<ArtProjects />} />
                    </Routes>
                </div>
            </Router>
        </Window>
    );
};

export default ShowcaseExplorer;
