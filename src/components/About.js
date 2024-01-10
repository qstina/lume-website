import React from 'react';
import './About.css';
import teamMember1 from './assets/nabilah.png';
import teamMember2 from './assets/munir.png';
import teamMember3 from './assets/nadia.png';
import teamMember4 from './assets/aqilah.png';
import teamMember5 from './assets/mizan.png';
import teamPhoto from './assets/aboutUs.png';
 
const teamMembers = [
  { image: teamMember1 },
  { image: teamMember2 },
  { image: teamMember3 },
  { image: teamMember4 },
  { image: teamMember5 },
];
 
const teamMembersData = [
  {
    name: 'NABILAH ATIQAH',
    role: 'CEO',
    description: 'As the Chief Executive Officer, I lead LüMe with a vision to steer the company towards innovation and growth. My strategic decisions and leadership ensure that LüMe continues to thrive in the competitive casing market.',
  },
  {
    name: 'NUR HIDAYATI MUNIRAH',
    role: 'CMO',
    description: 'As the Chief Marketing Officer, I am the driving force behind LüMe’s brand presence. I oversee marketing strategies, ensuring that the unique qualities of LüMe cases are effectively communicated to the audience.',
  },
  {
    name: 'NADIATUL FAKHIRA',
    role: 'COO',
    description: 'As the Chief Operating Officer, I play a vital role in the day-to-day operations of LüMe. I focus on efficiency and organizational processes ensures that LüMe operates smoothly, meeting customer demands effectively.',
  },
  {
    name: 'AQILAH SYAZWANI',
    role: 'CFO',
    description: 'As the Chief Financial Officer, I manage the financial health of LüMe. My expertise in finance and budgeting ensures the stability of company and provides a foundation for sustainable growth.',
  },
  {
    name: 'MIZAN QISTINA',
    role: 'CPO',
    description: 'As the Chief Product Officer, I lead the development and design of LüMe cases. With a focus on innovation and quality, I ensure that each LüMe product reflects the commitment of brand to style and protection.',
  }
  ];
 
const About = () => {
  return (
    <div>
     
      <div className="about-container">
        {/* Photo Section */}
        <div className="photo-section">
          <img src={teamPhoto} alt="Team" />
        </div>
 
        <h2>About Us</h2>
        <div className="company-background">
          <p>
            Welcome to LüMe, a space dedicated to fostering mental health
            well-being and spreading positive vibes. At LüMe, we believe in the
            power of self-love and the warmth that emanates from within. Our brand
            is not just about phone cases; it's about creating heartwarming
            connections and celebrating the unique light that resides in each of
            us.
          </p>
          <p>
            OUR ESSENCE: Luminance and Me (Self-Love)
          </p>
          <p>
            Luminance: The "Lü" captures the cozy warmth of a sunlit room or the
            glow of a candle on a quiet evening. It's that soft, comforting light
            that makes you feel at home. Our phone cases are designed to bring
            this warmth into your life—a subtle, everyday reminder that there's
            brightness even on cloudy days.
          </p>
          <p>
            Me (Self-Love): The "Me" is an intimate celebration of you. It's a nod
            to your quirks, your laughter lines, and the unique story you carry.
            Your phone is not just a gadget; it's a reflection of your journey.
            "LüMe" encourages you to love and embrace every part of yourself as
            you would a dear friend.
          </p>
          <p>
            Heartwarming Connection: "LüMe" weaves a heartwarming connection
            between the luminance and your own self-love. Think of it as a gentle
            hug from your phone, whispering, "You're amazing just as you are."
            It's like a small love note tucked into your everyday routine,
            reminding you that you're deserving of love and joy.
          </p>
          <p>
            So, each time you cradle your phone with a "LüMe" case, let it be a
            heartwarming moment—a little pause in your day to appreciate the
            radiant light within you.
          </p>
        </div>
        <div className="mission-vision">
          <div className="mission">
            <h3>OUR MISSION</h3>
            <p>At LüMe, our mission is to empower our customers to safeguard 
              their smartphones without compromising on style and personal 
              aesthetics. We believe in offering phone cases that not only 
              provide protection but also serve as expressions of individuality 
              and self-appreciation.
            </p>
          </div>
          <div className="vision">
            <h3>OUR VISION</h3>
            <p>We envision a future where LüMe becomes a trailblazer in filling
               the void within the tech accessories market, not just in Malaysia
                but across Southeast Asia and worldwide. Our vision is to expand 
                our product range in the most creative ways possible, addressing 
                the diverse needs of tech enthusiasts with innovative and 
                aesthetically pleasing solutions. To sustain this growth, we aim
                 to transition seamlessly from internet hype and e-commerce 
                 dominance to establishing a significant presence in retail outlets
                  throughout Malaysia and beyond. LüMe aspires to be a global brand, 
                  making a lasting impact on the way people perceive and interact 
                  with their tech accessories. 
            </p>
          </div>
        </div>
        <div className="team-section">
          <h3>Meet The Team</h3>
          <div className="organization-chart">
            {teamMembersData.map((member, index) => (
              <div className="team-member" key={index}>
                <img src={teamMembers[index].image} alt={`Team Member ${index + 1}`} className="team-member-image" />
                <div className="description-box">
                  <p>{`${member.name}`}</p>
                  <p>{`${member.role}`}</p>
                  <p>{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default About;
