//details about the course
import React from "react";
import { useSelector } from "react-redux";
import Nav from "./Nav";

function Details() {
  //taking the refference of the course details has been clicked
  const details = useSelector((state) => state.detail.details);

  return (
    <div className="detail-sec">
      {/*navbar */}
      <Nav />

      {/* ui based on details data */}
      {details.length > 0 ? (
        details.map((detail) => (
          <div key={detail.id} className="detail-sec-body deactive">
            <img src={detail.thumbnail} alt="" />
            <h3>name : {detail.name}</h3>
            <p>description : {detail.description}</p>
            <p>instructor : {detail.instructor}</p>
            <p>duration : {detail.duration}</p>
            <p>schedule : {detail.schedule}</p>
            <p>location : {detail.location}</p>
            <p>prerequisites : {detail.prerequisites.join()}</p>
            <h4
              className={
                detail.enrollmentStatus === "Open"
                  ? "text-success"
                  : "text-warning"
              }
            >
              enrollmentStatus : {detail.enrollmentStatus}
            </h4>
          </div>
        ))
      ) : (
        <p>No details available</p>
      )}
    </div>
  );
}

export default Details;
