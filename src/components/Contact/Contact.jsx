import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
    return <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>
                    Here is my <a href="https://docs.google.com/document/d/1vlkZTVDlMFk1o4ms-7wIMCsh67jVbFCzZMUZoZP_pKA/edit?usp=sharing">resume</a>!
            </p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/gmail.png")} alt="email"/>
                <a href="nhanngyn2004@gmail.com">nhanngyn2004@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedin.png")} alt="linkedin"/>
                <a href="https://www.linkedin.com/in/nhanngyn2004/">linkedin.com/in/nhanngyn2004/</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/github.png")} alt="linkedin"/>
                <a href="https://github.com/nhanngyn2004">github.com/nhanngyn2004</a>
            </li>
        </ul>
    </footer>
};