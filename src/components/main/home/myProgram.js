import CustomButton from "components/shared/form/customButton";
import React from "react";
import styles from "./home.module.css";

const MyProgram = () => {
  return (
    <>
      <div className={styles.my_program_container}>
        <div className={styles.my_program_text_container}>
          <div className={styles.my_program_heading}>MY PROGRAMS</div>
          <div className={styles.my_program_main_heading}>
            From team-building to goal setting to energy boosters
          </div>
          <div>
            <img src={"./title_underline.png"} alt="underline title img" />
          </div>
        </div>
        <div className={styles.my_program_video_container}>
          <div className={styles.my_program_video_thumbnail}>
            <img src={"./video_thumbnail.png"} alt="video thumbnail img" />
            <div className={styles.my_program_video_thumbnail_text}>
              <div className={styles.my_program_video_thumbnail_title}>
                Video Title
              </div>
              <div className={styles.my_program_video_thumbnail_description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                eiusmod tempor incididun
              </div>
            </div>
          </div>
          <div className={styles.my_program_video_thumbnail}>
            <img src={"./video_thumbnail.png"} alt="video thumbnail img" />
            <div className={styles.my_program_video_thumbnail_text}>
              <div className={styles.my_program_video_thumbnail_title}>
                Video Title
              </div>
              <div className={styles.my_program_video_thumbnail_description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                eiusmod tempor incididun
              </div>
            </div>
          </div>
          <div className={styles.my_program_video_thumbnail}>
            <img src={"./video_thumbnail.png"} alt="video thumbnail img" />
            <div className={styles.my_program_video_thumbnail_text}>
              <div className={styles.my_program_video_thumbnail_title}>
                Video Title
              </div>
              <div className={styles.my_program_video_thumbnail_description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                eiusmod tempor incididun
              </div>
            </div>
          </div>
          <div className={styles.my_program_video_thumbnail}>
            <img src={"./video_thumbnail.png"} alt="video thumbnail img" />
            <div className={styles.my_program_video_thumbnail_text}>
              <div className={styles.my_program_video_thumbnail_title}>
                Video Title
              </div>
              <div className={styles.my_program_video_thumbnail_description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                eiusmod tempor incididun
              </div>
            </div>
          </div>
        </div>
        <div className={styles.my_program_button}>
          <CustomButton label={"MORE VIDEOS"} />
        </div>
      </div>
    </>
  );
};

export default MyProgram;
