export default function Contact({ ContactRef }) {
  const itemStyle = {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    marginBottom: "22px",
  };

  const iconBox = {
    width: "75px",
    height: "75px",
    borderRadius: "10px",
    backgroundColor: "#191f2b",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #2e323c",
    color: "#9fdd5b",
  };

  const labelStyle = {
    fontSize: "13px",
    color: "#8b93a7",
    marginBottom: "4px",
  };

  const valueStyle = {
    fontSize: "18px",
    fontWeight: "600",
    color: "#ffffff",
    letterSpacing: "0.3px",
  };
  return (
    <div
      className="row mt-5 p-4 shadow-lg"
      ref={ContactRef}
      style={{
        border: "1px solid #2a3245",
        borderRadius: "16px",
        background: "#191f2b",
      }}
    >
      {" "}
      {/* Added premium container styling to match other sections */}
      <div className="col-md-12">
        <h3 className="mt-4" style={{ color: "#9fdd5b" }}>
          Let’s connect
        </h3>
      </div>
      <div className="row mt-3 ">
        <div className="col-md-6">
          <form action="">
            <div className="row mt-4 ">
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="Your name"
                  className="form-control custom-input"
                  style={{
                    backgroundColor: "#191f2b",
                    color: "#ffffff",
                    border: "1px solid #202736ff",
                    borderRadius: "10px",
                    padding: "14px 16px",
                    fontSize: "16px",
                  }}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="phone"
                  className="form-control custom-input"
                  style={{
                    backgroundColor: "#191f2b",
                    color: "#ffffff",
                    border: "1px solid #202736ff",
                    borderRadius: "10px",
                    padding: "14px 16px",
                    fontSize: "16px",
                  }}
                />
              </div>
            </div>
            <div className="row  mt-4">
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="Emaill"
                  className="form-control custom-input"
                  style={{
                    backgroundColor: "#191f2b",
                    color: "#ffffff",
                    border: "1px solid #202736ff",
                    borderRadius: "10px",
                    padding: "14px 16px",
                    fontSize: "16px",
                  }}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="Subject"
                  className="form-control custom-input"
                  style={{
                    backgroundColor: "#191f2b",
                    color: "#ffffff",
                    border: "1px solid #202736ff",
                    borderRadius: "10px",
                    padding: "14px 16px",
                    fontSize: "16px",
                  }}
                />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-12">
                <textarea
                  type="text"
                  placeholder="Subject"
                  className="form-control custom-input"
                  style={{
                    backgroundColor: "#191f2b",
                    color: "#ffffff",
                    border: "1px solid #202736ff",
                    borderRadius: "10px",
                    padding: "14px 16px",
                    fontSize: "16px",
                  }}
                ></textarea>
              </div>
            </div>
            <button
              className="btn mt-3 "
              type="send"
              style={{ background: "#9fdd5b" }}
            >
              send message
            </button>
          </form>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <div
            style={{
              borderRadius: "14px",
              maxWidth: "420px",
            }}
          >
            {/* Phone */}
            <div style={itemStyle}>
              <div style={iconBox}>
                <i
                  className="ri-phone-fill text-primary-2 "
                  style={{ fontSize: "25px" }}
                ></i>
              </div>
              <div>
                <div style={labelStyle}>Phone Number</div>
                <div style={valueStyle}>+90 (551) 059 0582</div>
              </div>
            </div>

            {/* Email */}
            <div style={itemStyle}>
              <div style={iconBox}>
                <i
                  className="ri-mail-fill text-primary-2 fs-26"
                  style={{ fontSize: "25px" }}
                ></i>
              </div>
              <div>
                <div style={labelStyle}>Email</div>
                <div style={valueStyle}>muhammedkher27@gmail.com</div>
              </div>
            </div>

            {/* Address */}
            <div style={{ ...itemStyle, marginBottom: 0 }}>
              <div style={iconBox}>
                <i
                  className="ri-map-2-fill text-primary-2 fs-26"
                  style={{ fontSize: "25px" }}
                ></i>
              </div>
              <div>
                <div style={labelStyle}>Address</div>
                <div style={valueStyle}>Istanbul / turkey</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
