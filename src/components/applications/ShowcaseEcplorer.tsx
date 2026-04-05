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
            windowTitle="Henry Heffernan - Showcase 2022"
            windowBarIcon="windowExplorerIcon"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
            bottomLeftText={'© Copyright 2022 Henry Heffernan'}
        >
            <Router>
                <div className="site-page">
                    <VerticalNavbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/zoogle" element={<Zoogle />} />
                        <Route path="/gaming" element={<Gaming />} />
                        <Route
                            path="/content-creation"
                            element={<ContentCreation />}
                        />
                        <Route path="/music" element={<Music />} />
                        <Route path="/community" element={<Community />} />
                        <Route path="/coding" element={<Coding />} />
                        <Route
                            path="/collaborations"
                            element={<Collaborations />}
                        />
                        <Route
                            path="/outdoor-activities"
                            element={<OutdoorActivities />}
                        />
                        <Route
                            path="/booking-schedule"
                            element={<BookingSchedule />}
                        />
                        <Route path="/contribute" element={<Contribute />} />
                        <Route
                            path="/projects/software"
                            element={<SoftwareProjects />}
                        />
                        <Route
                            path="/projects/music"
                            element={<MusicProjects />}
                        />
                        <Route path="/projects/art" element={<ArtProjects />} />
                    </Routes>
                </div>
            </Router>
        </Window>
    );
};

export default ShowcaseExplorer;
