import React from 'react';
import futureImg from '../../assets/pixel-cells-3699334.svg';
import runImg from '../../assets/run_buddy2.png';
import pro1 from '../../assets/project1.png';
import apple from '../../assets/apple-1684590.svg';
import web from '../../assets/website-1624028.svg';

function About() {
  return (
    <section className="my-5">

                    <div class="container_7">
                        <div class="container_8 container_animation">
                            <a href="https://kmre.github.io/run_buddy/" target="_blank">
                                <img src={runImg} alt="Run_Buddy" style={{ width: "100%", height:"auto" }}/>
                            </a>

                            <div class="container_9">
                                Run Buddy
                            </div>
                        </div>

                        <div class="container_10 container_animation future-work">
                            <a href="#">
                                <img src={futureImg} alt="Future Work" style={{ width: "100%", height:"auto" }}/>
                            </a>

                            <div class="container_9">
                                Future Work
                            </div>
                        </div>

                        <div class="container_10 container_animation">
                            <a href="#">
                                <img src={apple} alt="Future Work" style={{ width: "100%", height:"100%" }}/>
                            </a>

                            <div class="container_9">
                                Future Work
                            </div>
                        </div>

                        <div class="container_10 container_animation future-work">
                            <a href="#">
                                <img src={web} alt="Future Work" style={{ width: "100%", height:"auto" }}/>
                            </a>

                            <div class="container_9">
                                Future Work
                            </div>
                        </div>

                        <div class="container_10 container_animation">
                            <a href="https://kmre.github.io/project1/" target="_blank">
                                <img src={pro1} alt="NightCap Events" style={{ width: "100%", height:"auto" }}/>
                            </a>

                            <div class="container_9">
                                NightCap Events
                            </div>
                        </div> 
                    </div>
    </section>
  );
}

export default About;
