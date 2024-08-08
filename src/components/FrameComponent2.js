import ItemDetails from "./ItemDetails";
import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div className={`bookmarks-content-wrapper ${className}`}>
      <div className="bookmarks-content">
        <h1 className="bookmark-list">Bookmark List</h1>
        <div className="bookmark-items">
          <div className="list-items">
            <div className="list-item">
              <div className="bookmark-details">
                <div className="bookmark-details-inner">
                  <div className="frame-child4" />
                </div>
                <img
                  className="bookmark-details-child"
                  loading="lazy"
                  alt=""
                  src="/rectangle-2096@2x.png"
                />
              </div>
              <ItemDetails
                birr="50,000,000 Birr "
                group12458="/group-12458.svg"
                bedrooms="4 Bedrooms"
                bath="3 Bath"
                sqM=" 535 sq m"
              />
            </div>
            <div className="list-item">
              <div className="rectangle-parent1">
                <img
                  className="rectangle-icon"
                  alt=""
                  src="/rectangle-20961@2x.png"
                />
                <div className="arrowleft" />
                <div className="arrowleft1" />
              </div>
              <ItemDetails
                birr="30,000,000 Birr"
                group12458="/group-12458.svg"
                bedrooms="2 Bedrooms"
                bath="1 Bath"
                sqM=" 350 sq m"
                groupDivGap="20px"
                bathroomDetailsWidth="unset"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
