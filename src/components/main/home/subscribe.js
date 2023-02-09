import React from "react";
import styles from "./home.module.css";

const Subscribe = () => {
  return (
    <>
      <div className={styles.subscribe_section}>
        <div className={styles.subscribe_container}>
          <div className={styles.subscribe_child_container_left}>
            <img src={"./microphone.png"} alt="subscribe left img" />
          </div>
          <div className={styles.subscribe_child_container_right}>
            <div className={styles.subscribe_child_container_right_main_text}>Transform Lives Positively With Jyoti Goyal</div>
            <div className={styles.subscribe_child_container_right_sub_text}>I am inviting you to experience a journey of awakening, to becoming your most CONFIDENT and RADIANT SELF!</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
