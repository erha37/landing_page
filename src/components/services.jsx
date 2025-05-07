import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Tugas Badan Mutu KKP</h2>
          <p>
          Badan Pengendalian dan Pengawasan Mutu Hasil Kelautan dan Perikanan (BPPMHKP) atau yang dikenal sebagai Badan Mutu KKP, memiliki tugas utama untuk mengawasi dan mengendalikan mutu serta keamanan hasil kelautan dan perikanan. Tugas-tugas ini meliputi penyusunan kebijakan, rencana, dan program terkait pengendalian dan pengawasan mutu dan keamanan hasil kelautan dan perikanan, serta pelaksanaan kegiatan tersebut. 
          Selain itu, BPPMHKP juga bertugas untuk memastikan keamanan dan mutu hasil perikanan.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-lg-15 col-md-24 col-sm-6 col-xs-12" style={{ 
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "20px"
                }}>
                  <div className="service-item" style={{ 
                    width: "90%",
                    padding: "15px",
                    height: "100%"
                  }}>
                    <i className={d.icon} style={{ fontSize: "36px", marginBottom: "10px" }}></i>
                    <div className="service-desc">
                      <h3 style={{ marginBottom: "8px" }}>{d.name}</h3>
                      <p style={{ textAlign: "center" }}>{d.text}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};