import { Avatar } from "@mui/material";
import CustomCarousel from "components/shared/ui/carousel";
import React from "react";
import styles from "./home.module.css";

const Story = () => {
  var items = [
    {
      name: "Barbara Smith",
      profilePicture: "./profilePic.png",
      organization: "Amazon.com",
      description:
        "It's been an amazing learning experience so far with Jyoti and her team. Their insights are rock solid and help you streamline and improve all functions of the business. Can't recommend him enough!",
    },
    {
      name: "John Doe",
      profilePicture: "./profilePic.png",
      organization: "Test.com",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      name: "Jean Doe",
      profilePicture: "./profilePic.png",
      organization: "Test.com",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  return (
    <>
      <div className={styles.story_container}>
        <div className={styles.story_text_container}>
          <div className={styles.story_heading}>STORIES OF IMPACT</div>
          <div className={styles.story_main_heading}>
            What clients say about work that inspire me the most
          </div>
          <div>
            <img src={"./title_underline.png"} alt="underline title img" />
          </div>
        </div>
        <div className={styles.story_option_carousel_container}>
          <CustomCarousel>
            {items.map((item, i) => (
              <Item key={i} item={item} />
            ))}
          </CustomCarousel>
        </div>
      </div>
    </>
  );
};

function Item(props) {
  return (
    <div className={styles.story_option_container}>
      <div className={styles.story_option_profile_picture_container}>
        <Avatar
          alt="profile img"
          src={props.item.profilePicture}
          sx={{ width: 145, height: 145 }}
        />
      </div>
      <div className={styles.story_option_text_container}>
        <div className={styles.story_option_text_description}>
          {props.item.description}
        </div>
        <div className={styles.story_option_text_name_org}>
          {props.item.name} - {props.item.organization}
        </div>
      </div>
    </div>
  );
}

export default Story;
