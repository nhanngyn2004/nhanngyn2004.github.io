import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hello world! I am Nhan Nguyen!</h1>
                <p className={styles.description}>
                    I am a Computer Science student with a specialization in Intelligent Systems at
                    the University of California, Irvine!
                </p>

            </div>
            <img src={getImageUrl("hero/hero.png")} alt="Hero image" className={styles.heroImg}/>
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};