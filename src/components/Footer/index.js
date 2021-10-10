import React from 'react';
import gitImage from '../../assets/Git.png';
import inImage from '../../assets/Linkedin.png';

function Footer() {
  return (
    <footer>
      <div style={{ width: "8%", margin: "10px" }}>
        <a target="_blank" href="https://www.linkedin.com/in/romerokarla/">
          <img src={inImage} alt="git"/>
        </a>
      </div>
      <div style={{ width: "10%", margin: "10px" }}>
        <a target="_blank" href="https://github.com/kmre/">
        <img src={gitImage} alt="in" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
