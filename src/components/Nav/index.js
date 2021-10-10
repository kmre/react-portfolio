import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    // categories = [],
    // setCurrentCategory,
    contactSelected,
    // currentCategory,
    setContactSelected,
    setAboutSelected,
    aboutSelected,
    setProjectSelected,
    projectSelected,
    setResumeSelected,
    resumeSelected
  } = props;

  // useEffect(() => {
  //   document.title = capitalizeFirstLetter(currentCategory.name);
  // }, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="flower"> 🌺</span> Karla Romero
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          {/* <li className="mx-2"> */}
          <li className={`mx-2 ${aboutSelected && 'navActive'}`}>
            {/* <a data-testid="about" href="#about" onClick={() => {
              setAboutSelected(true) 
              setContactSelected(false) 
              setProjectSelected(false) 
              setResumeSelected(false)
              }}>
              About me
            </a> */}
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
          {/* {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && !contactSelected && 'navActive'
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))} */}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
