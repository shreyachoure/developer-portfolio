import React from "react";
import "./Contact.css";
import "../../App.css";

const Contact = () => {
  return (
    <section className="container my-5" id="contact">
      <h2 className="section-header">
        <span className="heading">Let's Connect!</span>
      </h2>
      <form className="bg-light mx-auto rounded p-5 form" id="email-form">
        <div className="row form-group mb-3">
          <label className="col-sm-3 col-form-label" for="name">
            {" "}
            Name:{" "}
          </label>
          <div className="col-sm-9">
            <input className="form-control" type="text" id="name" name="name" />
          </div>
        </div>
        <div className="row form-group mb-3">
          <label className="col-sm-3 col-form-label" for="email">
            {" "}
            Email:{" "}
          </label>
          <div className="col-sm-9">
            <input
              className="col-sm form-control"
              type="email"
              id="email"
              name="email"
            />
          </div>
        </div>
        <div className="row form-group mb-3">
          <label className="col-sm-3 col-form-label" for="message">
            Message:
          </label>
          <div className="col-sm-9">
            <textarea
              className="col-sm form-control"
              type="message"
              id="message"
              name="message"
              placeholder="Please submit any feedback or message for me!"
            ></textarea>
          </div>
        </div>

        <div className="form-group buttons form-buttons d-flex justify-content-center">
          <button
            className="btn submit-button mx-2"
            type="submit"
            id="submit-button"
          >
            Send Message
          </button>
          <button className="btn reset-button" type="reset">
            Reset
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
