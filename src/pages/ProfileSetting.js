import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import "./ProfileSetting.css";
import React, { useState } from 'react';
import ProfilePictureInput from "../components/ProfilePictureInput";
export default function ProfileSetting  ({})  {
  const [profilePicture, setProfilePicture] = useState(null);

  const handlePictureChange = (newPicture) => {
    setProfilePicture(newPicture);
    // You can now upload the new picture to a server or store it in the state
  };

  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
  });
  

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };
  const updateProfile = (data) => {
    // Code to update the user profile with the new data
    console.log('Updated profile:', data);
  };


  const onUploadPlaceholdersClick = useCallback(() => {
    //TODO: edit profile name
  }, []);

  return (
    <div className="profile-setting">
      <main className="main">
        <Header />
        <section className="content">
          <div className="content-child" />
          <div className="shape-wrapper">
            <div className="shape" />
          </div>
          <div className="frame-parent">
            <div className="frame-child" />
            <img className="location-on-icon" alt="" src="/location-on.svg" />
            <div className="frame-item" />
            <div className="profile-form">
              <div className="form-fields">
                <div className="edit-profile-wrapper">
                  <div className="edit-profile"> Edit Profile</div>
                </div>
                
                  <div >
                  < ProfilePictureInput onPictureChange={handlePictureChange} />
                   </div>
                
              </div>
            </div>
            <form className="photo-field">
              <div className="photo-upload">
                <div className="upload-container">
                  <div className="photo-upload-parent">
                    <div className="photo-upload1">
                      <h3 className="photo-profile">Photo Profile</h3>
                    </div>
                    <i className="change-photo-profile">
                      Change photo profile use
                    </i>
                  </div>
                  <div className="name-field-wrapper">
                    <div className="name-field">
                      <h3 className="full-name">Full Name</h3>
                      <i className="your-full-name">Your Full Name</i>
                    </div>
                  </div>
                  <div className="email-field-wrapper">
                    <div className="name-field">
                      <h3 className="email">Email</h3>
                      <i className="your-email-address">Your Email Address</i>
                    </div>
                  </div>
                  <div className="phone-field-wrapper">
                    <div className="phone-field">
                      <div className="phone">{`Phone `}</div>
                      <div className="phone-number-value">
                      <i className="your-phone-number">Your Phone Number</i>
                      </div>
                    </div>
                  </div>
                  <div className="address-input-wrapper">
                    <div className="address-input">
                      <h3 className="address">Address</h3>
                      <i className="your-address">Your Address</i>
                    </div>
                  </div>
                  
                </div>
              </div>
     <form onSubmit={handleSubmit}>
     
                  
                
              <div className="image-upload">
              <div  className="upload-button">
                   
                  <div className="upload-button-child" />
                  <img className="upload-icon" alt="" src="/upload.svg" />
                  <div className="upload-label">
                    <div className="upload-new-photo">Upload New Photo</div>
                   </div>
                  
                </div>
              
                <Form>
                
                   <label className="upload-placeholders">
                   
          <input
            type="text"
            name="fullName"           
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
          </label>
                </Form>
                
                <Form>
                <label className="upload-placeholders1" >
          <input
            type="email"
            name="email"          
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          </label>
          </Form>
                <Form >
                <label className="upload-placeholders2" >
          <input
            type="tel"
            name="phone"          
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
                  </label>
                </Form>
                <Form >
                <label className="upload-placeholders2" >
          <textarea
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
                   </label>
                </Form>
                <div className="save-button-container">
                    <Button
                      className="button"
                      variant="outline-primary"
                      size="lg"
                      onClick={onButtonClick}
                      type="submit"
                    >
                      Save Change
                    </Button>
                  </div>      
                
                
              </div>
              </form>
            </form>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer-content">
          <div className="company-info-parent">
            <div className="company-info">
              <div className="company-details">
                <div className="phone-field-wrapper">
                  <img
                    className="bihouse-door-icon"
                    alt=""
                    src="/bihousedoor-1.svg"
                  />
                </div>
                <div className="dream-home">{`Dream Home `}</div>
              </div>
              <div className="dream-home-is">
                At Adama Homes, we offer a wide range of properties to fit every
                lifestyle and budget. Our experienced professionals work closely
                with sellers to showcase their properties and assist buyers in
                finding the perfect match.
              </div>
            </div>
            <div className="contact-info">
              <h3 className="contact-us">Contact Us</h3>
              <div className="address-container-wrapper">
                <div className="address-container">
                  <div className="deam-home-villas">
                    Buy/Rent/Sell Homes in Adama, Oromia
                  </div>
                  <div className="phone-container">
                    <div className="phone-icon-container">
                      <img
                        className="call-calling-icon"
                        loading="lazy"
                        alt=""
                        src="/callcalling.svg"
                      />
                    </div>
                    <div className="phone-number-label">091-111-1111</div>
                  </div>
                  <div className="email-container">
                    <div className="email-icon-container">
                      <img
                        className="darkicon"
                        loading="lazy"
                        alt=""
                        src="/darkicon.svg"
                      />
                    </div>
                    <div className="phone-number-label">
                      adamahomes@gmail.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="social-media">
              <div className="social-links">
                <h3 className="follow-us">Follow Us</h3>
                <div className="social-icons">
                  <div className="icon-placeholders-parent">
                    <div className="icon-placeholders" />
                    <img
                      className="akar-iconsinstagram-fill"
                      loading="lazy"
                      alt=""
                      src="/akariconsinstagramfill.svg"
                    />
                  </div>
                  <div className="icon-placeholders-parent">
                    <div className="icon-placeholders" />
                    <img
                      className="ant-designyoutube-outlined-icon"
                      loading="lazy"
                      alt=""
                      src="/antdesignyoutubeoutlined.svg"
                    />
                  </div>
                  <div className="icon-placeholders-parent">
                    <div className="icon-placeholders" />
                    <img
                      className="akar-iconsinstagram-fill"
                      loading="lazy"
                      alt=""
                      src="/simplelineiconssocialtwitter.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="language-selector">
                <img
                  className="android-globe-icon"
                  alt=""
                  src="/androidglobe@2x.png"
                />
                <Form.Select
                  className="language-dropdown-formselect"
                  name="Language"
                >
                  <option>Language</option>
                  <option value="English - En">English - En</option>
                  <option value="Amharic">Amharic</option>
                  <option value="Afan-Oromo">Afan-Oromo</option>
                </Form.Select>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-divider">
          <div className="divider" />
          <div className="alyeska-resor-wrapper">
            <div className="alyeska-resor">
              © 2024 Adama Homes | All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

//export default ProfileSetting;
