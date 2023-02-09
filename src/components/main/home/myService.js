import CustomButton from "components/shared/form/customButton";
import React from "react";
import styles from "./home.module.css";

const MyService = () => {
  return (
    <>
      <div className={styles.my_service_container}>
        <div className={styles.my_service_text_container}>
          <div className={styles.my_service_heading}>MY SERVICES</div>
          <div className={styles.my_service_main_heading}>
            Elevating your employees with Jyoti Goyal
          </div>
          <div>
            <img src={"./title_underline.png"} alt="underline title img" />
          </div>
        </div>
        <div className={styles.my_service_options_container}>
          <div className={styles.my_service_option}>
            <div>
              <img
                src={"./my_service_option.png"}
                alt="my service option img"
              />
            </div>
            <div className={styles.my_service_option_title}>Trainings & Workshops</div>
            <div className={styles.my_service_option_description}>
              Ideal for employees across levels best suited for middle
              management
            </div>
          </div>
          <div className={styles.my_service_option}>
            <div>
              <img
                src={"./my_service_option.png"}
                alt="my service option img"
              />
            </div>
            <div className={styles.my_service_option_title}>Trainings & Workshops</div>
            <div className={styles.my_service_option_description}>
              Ideal for employees across levels best suited for middle
              management
            </div>
          </div>
          <div className={styles.my_service_option}>
            <div>
              <img
                src={"./my_service_option.png"}
                alt="my service option img"
              />
            </div>
            <div className={styles.my_service_option_title}>Trainings & Workshops</div>
            <div className={styles.my_service_option_description}>
              Ideal for employees across levels best suited for middle
              management
            </div>
          </div>
          <div className={styles.my_service_option}>
            <div>
              <img
                src={"./my_service_option.png"}
                alt="my service option img"
              />
            </div>
            <div className={styles.my_service_option_title}>Trainings & Workshops</div>
            <div className={styles.my_service_option_description}>
              Ideal for employees across levels best suited for middle
              management
            </div>
          </div>
        </div>
        <div className={styles.my_service_button}>
          <CustomButton label={"LEARN MORE"} />
        </div>
      </div>
    </>
  );
};

export default MyService;
