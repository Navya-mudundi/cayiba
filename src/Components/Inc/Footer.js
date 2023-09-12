import React from "react";

const Footer = (copyrightText, upArrowLink, downloadText, downloadLink) => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="first-footer">
            <div className="text-content">
              <h3>DOWNLOAD OUR ANDROID APP</h3>
              <p>
                With Cayiba you do not need to have a business to become a
                trader. All you need is just a smart phone. Call us on +225 05
                95 58 83 99 to schedule a short training session of just a few
                hours and we will show you how to make commissions in sales via
                your smart phone.
              </p>
            </div>
            <div class="downloadbutton">
              <a
                href="https://play.google.com/store/apps/details?id=com.cla.cayiba&amp;hl=en_IN&amp;gl=US"
                className="android-button"
                target="_blank"
              >
                <button className="test" type="submit" class=" btn-lg">
                  Download on Android
                </button>
              </a>
            </div>
            <div class="map-animation-left">
              <div
                class="map-marker-block aos-init aos-animate"
                data-aos="fade-right"
              >
                <img
                  src="https://www.cayiba.com/resources/images/bg/3d-map.png"
                  alt=""
                  class="map-bg"
                />
                <div class="map-marker-position position-1">
                  <div class="map-marker  vert-move1">
                    <div class="map-pin bg-secondry">
                      <img
                        src="https://www.cayiba.com/resources/images/icons/1.png"
                        alt=""
                      />
                    </div>
                    <div class="pin-pulse"></div>
                  </div>
                </div>
                <div class="map-marker-position position-2 scale-75">
                  <div class="map-marker vert-move2">
                    <div class="map-pin bg-secondry">
                      <img
                        src="https://www.cayiba.com/resources/images/icons/2.png"
                        alt=""
                      />
                    </div>
                    <div class="pin-pulse"></div>
                  </div>
                </div>
                <div class="map-marker-position position-3 scale-75">
                  <div class="map-marker  vert-move2">
                    <div class="map-pin bg-secondry">
                      <img
                        src="https://www.cayiba.com/resources/images/icons/3.png"
                        alt=""
                      />
                    </div>
                    <div class="pin-pulse"></div>
                  </div>
                </div>
                <div class="map-marker-position position-4 scale-50">
                  <div class="map-marker  vert-move2">
                    <div class="map-pin bg-secondry">
                      <img
                        src="https://www.cayiba.com/resources/images/icons/4.png"
                        alt=""
                      />
                    </div>
                    <div class="pin-pulse"></div>
                  </div>
                </div>
                <div class="map-marker-position position-5 scale-50">
                  <div class="map-marker vert-move1">
                    <div class="map-pin bg-secondry">
                      <img
                        src="https://www.cayiba.com/resources/images/icons/5.png"
                        alt=""
                      />
                    </div>
                    <div class="pin-pulse"></div>
                  </div>
                </div>
                <div class="map-marker-position position-6 scale-50">
                  <div class="map-marker  vert-move2">
                    <div class="map-pin bg-secondry">
                      <img
                        src="https://www.cayiba.com/resources/images/icons/6.png"
                        alt=""
                      />
                    </div>
                    <div class="pin-pulse"></div>
                  </div>
                </div>
                <div class="map-marker-position position-7 scale-50">
                  <div class="map-marker vert-move1">
                    <div class="map-pin bg-secondry">
                      <img
                        src="https://www.cayiba.com/resources/images/icons/10.png"
                        alt=""
                      />
                    </div>
                    <div class="pin-pulse"></div>
                  </div>
                </div>
              </div>
              <div class="user-hand aos-init aos-animate" data-aos="fade-up">
                <img
                  src="https://www.cayiba.com/resources/images/bg/user-hand.png"
                  alt="user phone"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="last-footer">
        Cayiba.©2023 All rights reserved.
        <div className="footer-icons">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-youtube"></i>
        </div>
        <a href={upArrowLink} className="up-arrow">
          ↑
        </a>
      </div>
    </>
  );
};

export default Footer;
