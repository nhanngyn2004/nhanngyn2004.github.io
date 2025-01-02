import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            {/* <img src={getImageUrl("/about/aboutImage.png")} 
            alt=""
            classname={styles.aboutImage}
            /> */}
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursor.png")} 
                    alt="cursor"/>
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>I have with experience in HTML/CSS and React.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/server.png")} 
                    alt="server"/>
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>I have experience using Python, C/C++, Java, and Javascript.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>
                        <p>I am a 2nd generation Vietnamese American and 2nd generation college student. In my free time, I enjoy hanging out with friends, eating, and playing volleyball and video games. </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
};