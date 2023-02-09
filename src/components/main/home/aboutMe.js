import CustomButton from "components/shared/form/customButton";
import React from "react";
import styles from "./home.module.css";

const AboutMe = () => {
  return (
    <>
      <div className={styles.about_me_container}>
        <div className={styles.about_me_child_container_left}>
          <div className={styles.about_me_child_container_left_main_img}>
            <img src="./mountain.png" alt="about me left main img" />
          </div>
          <div className={styles.about_me_child_container_left_jyoti_img}>
            <img src="./aboutMeJyoti.png" alt="about me left jyoti img" />
          </div>
        </div>
        <div className={styles.about_me_child_container_right}>
          <div className={styles.about_me_child_container_right_content}>
            <div className={styles.about_me_child_container_right_heading}>
              ABOUT ME
            </div>
            <div className={styles.about_me_child_container_right_main_heading}>
              Lifestyle Coaching and Strategy for the Modern Creative
            </div>
            <div>
              <img src={"./title_underline.png"} alt="underline title img" />
            </div>
            <div className={styles.about_me_child_container_right_desc}>
              I strongly believe that every organization has its unique culture
              & need on people front. 'i care' about my client's culture, goals
              and brand. The prime focus is to provide value added programs in
              form of training, workshops, seminars and webinars to create a
              connect between the employer and the employee.
            </div>
            <div className={styles.about_me_child_container_right_button}>
              <CustomButton label={"LEARN MORE"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
