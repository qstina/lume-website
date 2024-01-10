import "./Home.css";
import { IoPlayCircleOutline } from "react-icons/io5";
import { IoPauseCircleOutline } from "react-icons/io5";

const Hero = ({heroData,setHeroCount,heroCount,setPlayStatus,playStatus}) =>{
    return (
        <div className="hero-container">
        <div className="hero">
            <div className="hero-text">
                <p>{heroData.text1}</p>
                <p>{heroData.text2}</p>
                <p>{heroData.text3}</p>
                <p>{heroData.text4}</p>
            </div>
            <div className="hero-explore-container">
                <div className="hero-explore">
                    <p>See the video</p>
                    {playStatus ? (<IoPauseCircleOutline onClick={() => setPlayStatus(!playStatus)} />) : (<IoPlayCircleOutline onClick={() => setPlayStatus(!playStatus)} />)}
                </div>
            </div>
            <div className="hero-dot-container">
                <div className="hero-dot-play">
                    <ul className="hero-dots">
                        <li onClick={()=>setHeroCount(0)} className={heroCount===0 ? "hero-dot-orange":"hero-dot"}></li>
                        <li onClick={()=>setHeroCount(1)} className={heroCount===1 ? "hero-dot-orange":"hero-dot"}></li>
                        <li onClick={()=>setHeroCount(2)} className={heroCount===2 ? "hero-dot-orange":"hero-dot"}></li>
                        <li onClick={()=>setHeroCount(3)} className={heroCount===3 ? "hero-dot-orange":"hero-dot"}></li>
                    </ul>                
                </div>
            </div>
        </div>
        </div>
    )
}

export default Hero;