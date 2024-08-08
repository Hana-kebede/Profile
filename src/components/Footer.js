import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";
import "./Footer.css";

const Footer = ({ className = "" }) => {
  return (
    <section className={`footer1 ${className}`}>
      <div className="footer-content1">
        <div className="company-info1">
          <div className="company-details1">
            <div className="logo-container-footer-parent">
              <div className="logo-container-footer">
                <img
                  className="bihouse-door-icon3"
                  loading="lazy"
                  alt=""
                  src="/bihousedoor-1.svg"
                />
              </div>
              <div className="dream-home1">{`Dream Home `}</div>
            </div>
            <div className="dream-home-is1">
              At Adama Homes, we offer a wide range of properties to fit every
              lifestyle and budget. Our experienced professionals work closely
              with sellers to showcase their properties and assist buyers in
              finding the perfect match.
            </div>
          </div>
          <div className="contact-info1">
            <h2 className="contact-us1">Contact Us</h2>
            <div className="contact-info-inner">
              <div className="deam-home-villas-san-diego-ca-parent">
                <div className="deam-home-villas1">
                  Buy/Rent/Sell Homes in Adama, Oromia
                </div>
                <div className="phone-icon-container-parent">
                  <div className="phone-icon-container1">
                    <img
                      className="call-calling-icon1"
                      loading="lazy"
                      alt=""
                      src="/callcalling.svg"
                    />
                  </div>
                  <div className="phone-number">091-111-1111</div>
                </div>
                <div className="email-container1">
                  <div className="email-icon-container1">
                    <img
                      className="darkicon1"
                      loading="lazy"
                      alt=""
                      src="/darkicon.svg"
                    />
                  </div>
                  <div className="phone-number">adamahomes@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className="language-selector1">
            <div className="language-dropdown">
              <h2 className="follow-us1">Follow Us</h2>
              <div className="social-media-icons">
                <div className="social-media-backgrounds-parent">
                  <div className="social-media-backgrounds" />
                  <img
                    className="akar-iconsinstagram-fill1"
                    loading="lazy"
                    alt=""
                    src="/akariconsinstagramfill.svg"
                  />
                </div>
                <div className="social-media-backgrounds-parent">
                  <iframe
                    className="social-media-backgrounds"
                    frameBorder="0"
                    allowFullScreen
                  />
                  <img
                    className="ant-designyoutube-outlined-icon1"
                    loading="lazy"
                    alt=""
                    src="/antdesignyoutubeoutlined.svg"
                  />
                </div>
                <div className="social-media-backgrounds-parent">
                  <div className="social-media-backgrounds" />
                  <img
                    className="akar-iconsinstagram-fill1"
                    loading="lazy"
                    alt=""
                    src="/simplelineiconssocialtwitter.svg"
                  />
                </div>
              </div>
            </div>
            <div className="language-container">
              <img
                className="android-globe-icon1"
                alt=""
                src="/androidglobe@2x.png"
              />
              <Form.Select className="language-dropdown-formselect1">
                <option>Language</option>
                <option value="English - En">English - En</option>
                <option value="Amharic">Amharic</option>
                <option value="Afan-Oromo">Afan-Oromo</option>
              </Form.Select>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer-bottom">
        <div className="divider1" />
        <div className="language-dropdown1">
          <div className="alyeska-resor1">
            © 2024 Adama Homes | All Rights Reserved
          </div>
        </div>
      </footer>
    </section>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
