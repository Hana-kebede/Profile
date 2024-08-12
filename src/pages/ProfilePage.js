import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent2 from "../components/FrameComponent2";
import Footer from "../components/Footer";
import "./ProfilePage.css";
import React, { useState } from 'react';
const ProfilePage = () => {
  return (
    <div className="profile-page">
      <div className="profile-page-child" />
      <section className="frame-group">
        <FrameComponent />
        <FrameComponent1 />
        <FrameComponent2 />
      </section>
      <Footer />
    </div>
  );
};

export default ProfilePage;
