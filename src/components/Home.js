import React, { useState, useEffect } from "react";
import Header from "./Header";
import "./Home.css";
import video from './assets/about.mp4';
import video2 from './assets/why.mp4';
import videoMobile from './assets/aboutM.mp4';
import video2Mobile from './assets/whyM.mp4';
import VideoBackgroundMobile from './VideoBackgroundMobile';
import Slider from "./Slider";
import { Link } from "react-router-dom";
import EmailSubscription from "./EmailSubscription";


const Home = () => {
    const [showAboutUs, setShowAboutUs] = useState(false);
    const [showWhyUs, setShowWhyUs] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const scrollThreshold = 200;

            setShowAboutUs(scrollPosition > scrollThreshold);
            setShowWhyUs(scrollPosition > scrollThreshold);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="base-container"> {/* Added a class for styling */}
            <Header />

            <div className={`about-us-container ${showAboutUs ? "visible" : ""}`}>
                {showAboutUs ? (
                    // Use VideoBackgroundMobile for mobile view, otherwise use the regular video
                    <VideoBackgroundMobile
                        desktopSource={video}
                        mobileSource={videoMobile}
                        playStatus={true}
                    />
                ) : null}
            <div className="about-us">
                <h2>About Us</h2>
                <p>Welcome to LüMe, a space dedicated to fostering mental health well-being and spreading positive vibes. At LüMe, we believe in the power of self-love and the warmth that emanates from within. Our brand is not just about phone cases; it's about creating heartwarming connections and celebrating the unique light that resides in each of us.</p>
                <Link to="/about">
                    <button className="read-more-button">Read More</button>
                </Link>
            </div>
        </div>

            <Slider />

            <div className={`why-us-container ${showWhyUs ? "visible" : ""}`}>
                {/* Use VideoBackgroundMobile for mobile view, otherwise use the regular video */}
                <VideoBackgroundMobile
                    desktopSource={video2}
                    mobileSource={video2Mobile}
                    playStatus={true}
                />
    <div className="why-us">
        <h2>Why Choose LüMe?</h2>
        <div className="why-containers">
        <div className="why-1">
            <h3>Distinctive Designs</h3>
            <p>
                At LüMe, our inspiration lies in the subtle beauty of luminance and the power of self-love.
                We curate phone cases with unique designs that capture the warmth of a sunlit room, fostering
                a connection between the gentle glow and your individuality.
            </p>
        </div>

        <div className="why-2">
            <h3>Rooted in Warmth</h3>
            <p>
                As a Malaysian-based brand, LüMe proudly brings you stylish tech accessories crafted with a
                touch of our rich cultural diversity. Our aim is simple: to infuse exquisite designs into phone
                cases that reflect the unique warmth of our Malaysian spirit.
            </p>
        </div>

        <div className="why-3">
            <h3>Embrace Your Light</h3>
            <p>
                LüMe invites you to embrace your light with phone cases that go beyond trends—they're an
                expression of your story. Each design is one-of-a-kind, encouraging you to celebrate your
                individuality and carry a piece of radiant self-love in every moment.
            </p>
        </div>
        </div>
    </div>
</div>
<section className="email-subscription">
        <EmailSubscription />
      </section>
        </div>
    );
};

export default Home;
