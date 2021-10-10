import React, { useEffect } from 'react';

function Nav(props) {
  const {
    contactSelected,
    setContactSelected,
    setAboutSelected,
    aboutSelected,
    setProjectSelected,
    projectSelected,
    setResumeSelected,
    resumeSelected
  } = props;

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="flower"> 🌺</span> Karla Romero
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className={`mx-2 ${aboutSelected && 'navActive'}`}>
            <span onClick={() => {
              setAboutSelected(true) 
              setContactSelected(false) 
              setProjectSelected(false) 
              setResumeSelected(false)
              }}>
              About Me</span>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => {
              setAboutSelected(false) 
              setContactSelected(true) 
              setProjectSelected(false) 
              setResumeSelected(false)
              }}>
              Contact</span>
          </li>
          <li className={`mx-2 ${projectSelected && 'navActive'}`}>
          <span onClick={() => {
              setAboutSelected(false) 
              setContactSelected(false) 
              setProjectSelected(true) 
              setResumeSelected(false)
              }}>
              Projects</span>
          </li>
          <li className={`mx-2 ${resumeSelected && 'navActive'}`}>
          <span onClick={() => {
              setAboutSelected(false) 
              setContactSelected(false) 
              setProjectSelected(false) 
              setResumeSelected(true)
              }}>
              Resume</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
