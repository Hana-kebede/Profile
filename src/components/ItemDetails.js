import { useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import "./ItemDetails.css";

const ItemDetails = ({
  className = "",
  birr,
  group12458,
  bedrooms,
  bath,
  sqM,
  groupDivGap,
  bathroomDetailsWidth,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      gap: groupDivGap,
    };
  }, [groupDivGap]);

  const bathroomDetailsStyle = useMemo(() => {
    return {
      width: bathroomDetailsWidth,
    };
  }, [bathroomDetailsWidth]);

  return (
    <div className={`item-details ${className}`}>
      <div className="item-details-child" />
      <div className="price-and-button">
        <div className="price-value-container">
          <div className="birr">{birr}</div>
        </div>
        <Button className="view-button" variant="outline-primary">
          View Details
        </Button>
      </div>
      <div className="group-div" style={groupDivStyle}>
        <img className="group-icon" alt="" src={group12458} />
        <div className="bedroom-details">
          <div className="bedroom-icon">
            <img
              className="fluentbed-20-regular-icon"
              loading="lazy"
              alt=""
              src="/fluentbed20regular.svg"
            />
          </div>
          <div className="bedrooms">{bedrooms}</div>
        </div>
        <div className="bathroom-details" style={bathroomDetailsStyle}>
          <div className="bedroom-icon">
            <img
              className="fluentbed-20-regular-icon"
              loading="lazy"
              alt=""
              src="/cilbath.svg"
            />
          </div>
          <div className="bath">{bath}</div>
        </div>
        <div className="sq-m">{sqM}</div>
      </div>
    </div>
  );
};

ItemDetails.propTypes = {
  className: PropTypes.string,
  birr: PropTypes.string,
  group12458: PropTypes.string,
  bedrooms: PropTypes.string,
  bath: PropTypes.string,
  sqM: PropTypes.string,

  /** Style props */
  groupDivGap: PropTypes.any,
  bathroomDetailsWidth: PropTypes.any,
};

export default ItemDetails;
