import "./Home.css";
import video1 from "./assets/video.mp4";
import image1 from "./assets/header(1).png";
import image2 from "./assets/header(2).png";
import image3 from "./assets/header(3).png";
import image4 from "./assets/header(4).png";

const Background = ({playStatus, heroCount}) => {

    if (playStatus) {
        return (
            <video className='background' autoPlay loop>
                <source src={video1} type='video/mp4'/>
            </video>
        )
    }
    else if(heroCount===0){
        return <img src={image1} className="background" alt=""/>
    }
    else if(heroCount===1){
        return <img src={image2} className="background" alt=""/>
    }
    else if(heroCount===2){
        return <img src={image3} className="background" alt=""/>
    }
    else if(heroCount===3){
        return <img src={image4} className="background" alt=""/>
    }
    
}

export default Background;