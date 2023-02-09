import React from "react";
import styles from "./home.module.css";

const Enthusiasm = () => {
  return (
    <>
      <div className={styles.enthusiasm_container}>
        <div className={styles.enthusiasm_child_container_left}>
          <div className={styles.enthusiasm_child_container_left_main_img}>
            <img src="./enthusiasm_group.png" alt="enthusiasm left group img" />
          </div>
          <div className={styles.enthusiasm_child_container_left_count}>
            <div>
              <div className={styles.enthusiasm_child_container_left_count_number}>9,600+</div>
              <div className={styles.enthusiasm_child_container_left_count_title}>CORPORATES</div>
            </div>
            <div>
              <div className={styles.enthusiasm_child_container_left_count_number}>650+</div>
              <div className={styles.enthusiasm_child_container_left_count_title}>CLASSES</div>
            </div>
          </div>
        </div>
        <div className={styles.enthusiasm_child_container_right}>
          <div className={styles.enthusiasm_child_container_right_content}>
            <div className={styles.enthusiasm_child_container_right_heading}>
              FIND YOUR ENTHUSIASM
            </div>
            <div
              className={styles.enthusiasm_child_container_right_main_heading}
            >
              A good coach makes sure that they have the right incentive before
              taking on a client
            </div>
            <div>
              <img src={"./title_underline.png"} alt="underline title img" />
            </div>
            <div className={styles.enthusiasm_child_container_right_desc}>
              14+ years’ experience in Human Resources, Technical Services and
              Recruitment. Excellent Communication & Presentation Skills.
              Passionate about Coaching & Mentoring people to create a Positive
              Difference in the World.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Enthusiasm;
