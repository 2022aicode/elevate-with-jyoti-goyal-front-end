import React from "react";
import styles from "./home.module.css";

const OrgranizationList = () => {
  return (
    <>
      <div className={styles.organization_container}>
        <div>
          <img src="./pngwing.png" alt="org img 1" />
        </div>
        <div>
          <img src="./forbes-logo.png" alt="org img 2" />
        </div>
        <div>
          <img src="./healt-logo.png" alt="org img 3" />
        </div>
        <div>
          <img src="./kindpng_4473247.png" alt="org img 4" />
        </div>
        <div>
          <img src="./Men_s_Health_logo_black.png" alt="org img 5" />
        </div>
      </div>
    </>
  );
};

export default OrgranizationList;
