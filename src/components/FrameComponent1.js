import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onEditProfileTextClick = useCallback(() => {
    navigate("/profile-setting");
  }, [navigate]);

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
          <div className="user-details">
            <div className="joined-content">
              <div className="joined-date-content">
                <div className="email-content">
                  <Form className="aman-banti-joined-container">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name="your-name" id="your-name" />
                  </Form>
                </div>
                <div className="rectangle-container">
                  <div className="frame-child2" />
                  <img className="edit-icon2" alt="" src="/edit1.svg" />
                  <div className="edit-profile-container">
                    <Button
                      className="edit-profile1"
                      variant="outline-primary"
                      size="sm"
                      onClick={onEditProfileTextClick}
                    >
                      Edit Profile
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-div">
              <div className="frame-child3" />
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
                        <input className="phone-number-prefix" type="text" />
                        <div className="phone-number-content">
                          <div className="phone1">Phone</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-parent1">
                    <div className="emoji-wrapper">
                      <img
                        className="emoji-icon1"
                        loading="lazy"
                        alt=""
                        src="/emoji-1.svg"
                      />
                    </div>
                    <div className="amanbantigmailcom-parent">
                      <div className="amanbantigmailcom">
                        <span>amanbanti</span>
                        <span className="gmailcom">@gmail.com</span>
                      </div>
                      <input className="email1" type="text" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="location-on-group">
                <img
                  className="location-on-icon2"
                  loading="lazy"
                  alt=""
                  src="/location-on.svg"
                />
                <div className="location-content-wrapper">
                  <div className="location-content">
                    <input className="addis-ababa-ethiopia" type="text" />
                    <div className="address-wrapper">
                      <div className="address1">Address</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
