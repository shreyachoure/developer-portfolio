import React from "react";

const ExperienceCard = ({ title, id, children }) => (
  <div className="card my-3">
    <h3 className="exp-card-header card-header py-4">
      <button
        className="btn btn-link btn-block text-left"
        data-toggle="collapse"
        href={`#${id}`}
      >
        {title}
      </button>
    </h3>
    <div id={id} className="collapse" data-parent="#accordion">
      <div className="card-body">{children}</div>
    </div>
  </div>
);

export default ExperienceCard;
