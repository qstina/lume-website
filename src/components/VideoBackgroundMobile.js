import React from "react";

const VideoBackgroundMobile = ({ desktopSource, mobileSource, playStatus }) => {
    const isMobile = window.innerWidth <= 768; // You can adjust the threshold for mobile view

    return (
        <>
            {isMobile ? (
                <video className="about-img" autoPlay loop style={{ width: "100%", height: "auto" }}>
                    <source src={mobileSource} type='video/mp4' />
                </video>
            ) : (
                <video className="about-img" autoPlay loop style={{ width: "100%", height: "auto" }}>
                    <source src={desktopSource} type='video/mp4' />
                </video>
            )}
        </>
    );
};

export default VideoBackgroundMobile;
