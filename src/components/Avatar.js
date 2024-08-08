import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Avatar.css";

const Avatar = ({
  className = "",
  avatarAlignSelf,
  initialsAlignSelf,
  initialsDisplay,
  initialsHeight,
  avatarHeight,
}) => {
  const avatarStyle = useMemo(() => {
    return {
      alignSelf: avatarAlignSelf,
      height: avatarHeight,
    };
  }, [avatarAlignSelf, avatarHeight]);

  const initialsStyle = useMemo(() => {
    return {
      alignSelf: initialsAlignSelf,
      display: initialsDisplay,
      height: initialsHeight,
    };
  }, [initialsAlignSelf, initialsDisplay, initialsHeight]);

  return (
    <div className={`avatar ${className}`} style={avatarStyle}>
      <div className="initials" style={initialsStyle} />
    </div>
  );
};

Avatar.propTypes = {
  className: PropTypes.string,

  /** Style props */
  avatarAlignSelf: PropTypes.any,
  initialsAlignSelf: PropTypes.any,
  initialsDisplay: PropTypes.any,
  initialsHeight: PropTypes.any,
  avatarHeight: PropTypes.any,
};

export default Avatar;
