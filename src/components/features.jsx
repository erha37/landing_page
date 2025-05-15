import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center" style={{ 
      scrollMarginTop: "100px",
      paddingTop: "80px",
      marginTop: "-60px",
      paddingBottom:"100"
    }}>
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>Fitur Layanan</h2>
          </div>
        </div>

        {/* Kelompok Fitur Pertama */}
        <div className="mb-3">
          <h3 className="mb-3" style={{ borderBottom: "2px solid #608dfd", paddingBottom: "6px", display: "inline-block" }}>
            Sistem Pelayanan Pengguna Jasa
          </h3>
          <div className="row">
            {props.data?.slice(0, 3).map((d, i) => (
              <div key={`${d.title}-${i}`} className="col-xs-6 col-md-4">
                <a
                  href={d.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  <div className="feature-box d-flex flex-column align-items-center text-center bg-white">
                    <i className={`${d.icon} text-primary mb-3`} style={{ fontSize: "40px" }}></i>
                    <h3 className="fw-bold mb-2 text-uppercase">{d.title}</h3>
                    <p className="medium text-muted">{d.text}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Kelompok Fitur Kedua */}
        <div>
          <h3 className="mb-3" style={{ borderBottom: "2px solid #608dfd", paddingBottom: "6px", display: "inline-block" }}>
            Sistem Internal Badan Mutu KKP
          </h3>
          <div className="row">
            {props.data?.slice(3).map((d, i) => (
              <div key={`${d.title}-${i+3}`} className="col-xs-6 col-md-4">
                <a
                  href={d.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  <div className="feature-box d-flex flex-column align-items-center text-center bg-white">
                    <i className={`${d.icon} text-primary mb-3`} style={{ fontSize: "40px" }}></i>
                    <h3 className="fw-bold mb-2 text-uppercase">{d.title}</h3>
                    <p className="medium text-muted">{d.text}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {!props.data && <p>Loading...</p>}
      </div>

      {/* Styling tambahan */}
      <style>
        {`
          .feature-box {
            padding: 24px;
            min-height: 260px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .feature-box:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
          }
        `}
      </style>
    </div>
  );
};