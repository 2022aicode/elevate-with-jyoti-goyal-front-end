import CustomButton from "components/shared/form/customButton";
import React from "react";
import styles from "./home.module.css";

const Blog = () => {
  return (
    <>
      <div className={styles.blog_container}>
        <div className={styles.blog_text_container}>
          <div className={styles.blog_heading}>ARE YOU A READER?</div>
          <div className={styles.blog_main_heading}>
            Blogs to continue learning, upgrading your skills
          </div>
          <div>
            <img src={"./title_underline.png"} alt="underline title img" />
          </div>
        </div>

        <div className={styles.blog_options_container}>
          <div className={styles.blog_option}>
            <div className={styles.blog_image}>
              <img src={"./blog_1.png"} alt="blog img" />
              <div className={styles.blog_option_text_container}>
                <div className={styles.blog_title}>
                  Transforming Lives Positively with Jyoti
                </div>
                <div className={styles.blog_description}>
                  A company that wants harmony...
                </div>
              </div>
            </div>
          </div>
          <div className={styles.blog_option}>
            <div className={styles.blog_image}>
              <img src={"./blog_2.png"} alt="my service option img" />
              <div className={styles.blog_option_text_container}>
                <div className={styles.blog_title}>
                  How to ensure team motivation?
                </div>
                <div className={styles.blog_description}>
                  A company that wants harmony...
                </div>
              </div>
            </div>
          </div>
          <div className={styles.blog_option}>
            <div className={styles.blog_image}>
              <img src={"./blog_3.png"} alt="blog img" />
              <div className={styles.blog_option_text_container}>
                <div className={styles.blog_title}>
                  How to be a successful business coach?
                </div>
                <div className={styles.blog_description}>
                  A company that wants harmony...
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.blog_button}>
          <CustomButton label={"LEARN MORE"} />
        </div>
        <div className={styles.blog_motivational_text}>
          The only man who never makes mistakes is the man who never does
          anything.
        </div>
      </div>
    </>
  );
};

export default Blog;
