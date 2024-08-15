import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row" style={{ display: "flex", alignItems: "center" }}>
          <div className="col-md-6 col-lg-4">
            <p style={{ color: "#777" }}>
              Contact us, we will get back to you within 24 hours
            </p>
            <div className="mt-3">
              <i
                className="bi bi-geo-alt-fill"
                style={{ color: "#777", fontStyle: "normal" }}
              >
                Chicago, US
              </i>
            </div>
            <div className="mt-3">
              <i
                className="bi bi-phone"
                style={{ color: "#777", fontStyle: "normal" }}
              >
                +00 1515151515
              </i>
            </div>
            <div className="mt-3">
              <i
                className="bi bi-envelope-fill"
                style={{ color: "#777", fontStyle: "normal" }}
              >
                Myemail@something.com
              </i>
            </div>
          </div>
          <div className="col-lg-6 ms-auto">
            <h3 style={{ color: "white" }} className="mb-1">
              CONTACTS
            </h3>
            <form>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="inputField1" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputField1"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputField2" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputField2"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="textArea" className="form-label">
                  Comment
                </label>
                <textarea
                  className="form-control"
                  id="textArea"
                  rows="4"
                  placeholder="Your comment"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  color: "black",
                  backgroundColor: "#eee",
                  border: "1px solid #eee",
                  width: "60px",
                }}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
