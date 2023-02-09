import React from "react";
import styles from "./home.module.css";
import Subscribe from "./subscribe";

const HomeBanner = () => {
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.banner_parent_container}>
          <div className={styles.banner_child_container_left}>
            <div className={styles.banner_child_container_left_main_text}>
              Elevate with
              <br />
              Jyoti Goyal
            </div>
            <div className={styles.banner_child_container_left_sub_text}>
              Motivation for living life , Create a happier team and thus
              increase their efficiency
            </div>
          </div>

          <div className={styles.banner_child_container_right}>
            <div className={styles.banner_child_container_right_img}>
              <img src={"./home_bg_jyoti.png"} alt="jyoti img" />
            </div>
          </div>
        </div>
        <Subscribe />
      </div>
    </>
  );
};

export default HomeBanner;
