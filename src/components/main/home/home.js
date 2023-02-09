import React from "react";
import AboutMe from "./aboutMe";
import HomeBanner from "./homeBanner";
import OrgranizationList from "./organizationList";
import MyProgram from "./myProgram";
import MyService from "./myService";
import Story from "./story";
import Enthusiasm from "./enthusiasm";
import Blog from "./blog";

const Home = () => {
  return (
    <>
      <div>
        <HomeBanner />
      </div>
      <div>
        <OrgranizationList />
      </div>
      <div>
        <AboutMe />
      </div>
      <div>
        <MyProgram />
      </div>
      <div>
        <MyService />
      </div>
      <div>
        <Story />
      </div>
      <div>
        <Enthusiasm />
      </div>
      <div>
        <Blog />
      </div>
    </>
  );
};

export default Home;
