import { useState, useEffect } from "react";
import Hero from "./Hero";
import Background from "./Background";
import BackgroundMobile from "./BackgroundMobile";

const Header = () => {
    let heroData = [
        { text1: "Dive into", text2: "what you love" },
        { text1: "Indulge", text2: "your passions" },
        { text1: "Hello", text2: "sunshines!" },
        { text1: "You are", text2: "enough" },
    ];

    const [heroCount, setHeroCount] = useState(0);
    const [playStatus, setPlayStatus] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // You can adjust the threshold for mobile view
        };

        // Initial check on mount
        handleResize();

        // Listen for window resize events
        window.addEventListener("resize", handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div>
            {isMobile ? (
                <BackgroundMobile playStatus={playStatus} heroCount={heroCount} />
            ) : (
                <Background playStatus={playStatus} heroCount={heroCount} />
            )}
            <Hero
                setPlayStatus={setPlayStatus}
                heroData={heroData[heroCount]}
                heroCount={heroCount}
                setHeroCount={setHeroCount}
                playStatus={playStatus}
            />
        </div>
    );
};

export default Header;
