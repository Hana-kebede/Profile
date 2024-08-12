import React, { useCallback } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FrameComponent1.css";
import { useState, useEffect } from 'react';
export default function FrameComponent1  ({ className = "" })  {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/profile-setting");
  }, [navigate]);
  const [userProfile, setUserProfile] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
  });

  useEffect(() => {
    // Fetch the user profile data from the server or local storage
    fetchUserProfile();
  }, []);

  const fetchUserProfile = () => {
    // Code to fetch the user profile data
    // and update the state
    setUserProfile({
      fullName: 'Hana kebede',
      email: 'Hana@gmail.com',
      phone: '0911111111',
      address: 'Adama, Ethiopia',
    });
  };
  

  return (
    <div className={`profile-content-wrapper ${className}`}>
      <div className="profile-content">
        <div className="profile-content-child" />
        <div className="my-profile-wrapper">
          <h3 className="my-profile">My Profile</h3>
        </div>
        <div className="location-on-parent">
          <img className="location-on-icon1" alt="" src="/location-on1.svg" />
          <div className="frame-child1" />
          <img
            className="details-background-icon"
            alt=""
            src="/details-background@2x.png"
          />
          <img className="edit-icon1" alt="" src="/edit.svg" />
          <img
            className="profile-picture-icon"
            loading="lazy"
            alt=""
            src="/ellipse-121@2x.png"
          />
  <form >
      <div className="user-details">
      <div className="joined-content">
        <div className="joined-date-content">
          <div className="email-content">
            <Form className="name-joined-container">
            <p>
            <strong>Name:</strong> {userProfile.fullName}
          </p>
            </Form>
          </div> 
          <Button
                  className="joined-date-content-child"
                  variant="outline-primary"
                  onClick={onFrameButtonClick}
                > Edit Profile
                  
                </Button>
        </div>
      </div>
      
       <div className="rectangle-container">
         <div className="frame-child2" />
        <div className="contact-content">
          <div className="joined-date-content">
            <div className="frame-wrapper">
              <div className="emoji-parent">
                <img
                  className="emoji-icon"
                  loading="lazy"
                  alt=""
                  src="/emoji.svg"
                />
                <div className="phone-number-prefix-parent">
                <p>
            <strong>Phone:</strong> {userProfile.phone}
          </p>
                </div>
              </div>
            </div>
            <div className="frame-div">
              <div className="emoji-wrapper">
                <img
                  className="emoji-icon1"
                  loading="lazy"
                  alt=""
                  src="/emoji-1.svg"
                />
              </div>
              <div className="amanbantigmailcom-parent">
              <p>
            <strong>Email:</strong> {userProfile.email}
          </p>
              </div>
            </div>
          </div>
        </div>
        <div className="location-on-group">
          <img
            className="location-on-icon2"
            loading="lazy"
            alt=""
            src="/location-on1.svg"
          />
          <div className="location-content-wrapper">
            <div className="location-content">
            <p>
            <strong>Address:</strong> {userProfile.address}
          </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    </form>
  </div>
</div>
</div>
    
   );
 };

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

//export default FrameComponent1;