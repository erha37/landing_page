import React from "react";

export const Contact = (props) => {
  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h2>Badan Pengendalian dan Pengawasan Mutu Hasil Kelautan dan Perikanan</h2>
            </div>
          </div>
        </div>

        <div className="container"> 
          <div className="col-md-8 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="social">
              <ul>
                <li>
                  <a href={props.data ? props.data.instagram : "/"}>
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href={props.data ? props.data.twitter : "/"}>
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href={props.data ? props.data.youtube : "/"}>
                    <i className="fa fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; Kementerian Kelautan dan Perikanan Republik Indonesia{" "}
            <a href="http://kkp.go.id/unit-kerja/bkipm.html" rel="follow">
              Badan Mutu KKP
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};