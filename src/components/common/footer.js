import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.footer_main_container}>
        <div className={styles.footer_parent_container}>
          <div className={styles.footer_child_left_container}>
            <div>
              <img src="./header_logo.png" alt="footer logo" />
              <div className={styles.footer_child_left_text}>
                Transform Lives Positively
              </div>
            </div>
          </div>
          <div className={styles.footer_child_right_container}>
            <div className={styles.footer_child_right_container_list_left}>
              <ul>
                <li>Home</li>
                <li>About Me</li>
                <li>Services</li>
                <li>Courses</li>
              </ul>
            </div>
            <div className={styles.footer_child_right_container_list_middle}>
              <ul>
                <li>Contact</li>
                <li>Video</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className={styles.footer_child_right_container_list_right}>
              <ul>
                <li>MEMBER LOGIN</li>
                <li>PRIVACY POLICY</li>
                <li>TERMS OF SERVICES</li>
                <li>TABLE OF CONTENTS</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.footer_copyright_text_container}>
          <div className={styles.footer_copyright_text}>Copyright @ Elevate with Jyoti Goyal, All rights reserved.</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
