import "./Home.css";
import video1 from "./assets/vid.mp4";
import image1 from "./assets/headerM (1).png";
import image2 from "./assets/headerM (2).png";
import image3 from "./assets/headerM (3).png";
import image4 from "./assets/headerM (4).png";

const BackgroundMobile = ({playStatus, heroCount}) => {

    if (playStatus) {
        return (
            <video className='backgroundM' autoPlay loop>
                <source src={video1} type='video/mp4'/>
            </video>
        )
    }
    else if(heroCount===0){
        return <img src={image1} className="backgroundM" alt=""/>
    }
    else if(heroCount===1){
        return <img src={image2} className="backgroundM" alt=""/>
    }
    else if(heroCount===2){
        return <img src={image3} className="backgroundM" alt=""/>
    }
    else if(heroCount===3){
        return <img src={image4} className="backgroundM" alt=""/>
    }
    
}

export default BackgroundMobile;