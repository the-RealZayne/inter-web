import React from 'react';
import me from '../../assets/pictures/workingAtComputer.jpg';
import meNow from '../../assets/pictures/currentme.jpg';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Hey</h1>
            <h3>I'm theRealZayne</h3>
            <br />
            <div className="text-block">
                <p>
                    I'm a Gamer, Music Producer, Content Creator, and Outdoor Enthusiast. 
                    Whether I'm dropping into Fortnite, producing a fire beat, or hiking the Appalachian Trail, 
                    I’m all about living life to the fullest. Check out what I’m into, how to reach me and join me in my adventures!
                </p>
                <br />
                <p>
                    Thank you for taking the time to check out my PC-folio. I
                    really hope you enjoy exploring it. If you have any questions or comments, feel
                    free to contact me using{' '}
                    <Link to="/contact">this form</Link> or shoot me an email at{' '}
                    <a href="mailto:therealzayne@yahoo.com">
                        therealzayne@yahoo.com
                    </a>
                </p>
            </div>
            <ResumeDownload />
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
