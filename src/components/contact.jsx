import React from "react";

export const Contact = (props) => {
  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h2>Bring Safety Through Quality</h2>
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