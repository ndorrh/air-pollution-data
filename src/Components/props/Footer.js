import React from 'react';
import facebook from '../../imgs/facebook.png';
import twitter from '../../imgs/twitter.png';
import linkedin from '../../imgs/linkedin.png';
import github from '../../imgs/github.png';
import instagram from '../../imgs/instagram.png';
import '../../styles/footer.css';

function Footer() {
  return (
    <div>
      <div className="socials-layer">
        <a href="https://facebook.com/" target="_blank" rel="noreferrer">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="https://www.twitter.com/NdorrhEbu" target="_blank" rel="noreferrer">
          <img src={twitter} alt="twitter" />
        </a>
        <a href="https://www.linkedin.com/in/ndorrhoswaldebu" target="_blank" rel="noreferrer">
          <img src={linkedin} alt="linkedin" />
        </a>
        <a href="https://github.com/ndorrh" target="_blank" rel="noreferrer">
          <img src={github} alt="github" />
        </a>
        <a href="https://instagram.com/" target="_blank" rel="noreferrer">
          <img src={instagram} alt="instagram" />
        </a>
      </div>
      <div className="copyright">
        <h4>Ndorrh Oswald</h4>
      </div>
    </div>
  );
}

export default Footer;
