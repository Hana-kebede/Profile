import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Dropdown, DropdownButton, ButtonGroup } from "react-bootstrap";
import Avatar from "./Avatar";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={`header-wrapper ${className}`}>
      <header className="header1">
        <div className="logo-container">
          <div className="logo-container1">
            <img
              className="bihouse-door-icon2"
              loading="lazy"
              alt=""
              src="/bihousedoor.svg"
            />
          </div>
          <div className="adama-homes1">Adama Homes</div>
        </div>
        <div className="navigation-content-wrapper">
          <nav className="navigation-content">
            <div className="profile-dropdown">
              <Button className="home1" variant="outline-primary" size="sm">
                Home
              </Button>
            </div>
            <div className="navigation-links">
              <Button className="about-us1" variant="outline-primary" size="sm">
                About Us
              </Button>
            </div>
            <DropdownButton
              className="profile-menu"
              title="List Your Home"
              as={ButtonGroup}
              size="sm"
              style={{ width: "100%", height: "100%" }}
            >
              <Dropdown.Item>BUY</Dropdown.Item>
              <Dropdown.Item>RENT</Dropdown.Item>
            </DropdownButton>
            <Avatar />
          </nav>
        </div>
      </header>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
