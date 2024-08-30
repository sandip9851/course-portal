import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function UserDetails() {
  const [completedCourses, setCompletedCourses] = useState([]);
  const users = useSelector((state) => state.user.user); //user details taking from redux store
  const enrolledCourses = useSelector((state) => state.enroll.enrolled); //enrolled course details taking from redux store

  //handele mark as done
  const handleCompletionToggle = (courseId) => {
    if (completedCourses.includes(courseId)) {
      setCompletedCourses(completedCourses.filter((id) => id !== courseId));
    } else {
      setCompletedCourses([...completedCourses, courseId]);
    }
  };

  return (
    <div>
      {/*button for back to home page */}
      <Link to="/">
        <button className="btn btn-info">Home</button>
      </Link>
      |{/*ui rendering of user details */}
      {users.map((item) => (
        <div key={item.id}>
          <h3>Name: {item.name}</h3>
          <h4>Email: {item.email}</h4>
        </div>
      ))}
      {/*ui rendering of enrolled course details */}
      <div>
        {enrolledCourses.length > 0 ? (
          enrolledCourses.map((detail) => (
            <div
              key={detail.id}
              className={`enroll-sec-body ${
                completedCourses.includes(detail.id) ? "complete" : ""
              }`}
            >
              <img src={detail.thumbnail} alt={detail.name} />
              <br />
              <label htmlFor={`check-${detail.id}`}>Mark as Completed</label>
              <input
                type="checkbox"
                id={`check-${detail.id}`}
                onChange={() => handleCompletionToggle(detail.id)}
                checked={completedCourses.includes(detail.id)}
              />
              <h3>Name: {detail.name}</h3>
              <p>Description: {detail.description}</p>
              <p>Instructor: {detail.instructor}</p>
              <p>Duration: {detail.duration}</p>
              <p>Schedule: {detail.schedule}</p>
              <p>Location: {detail.location}</p>
              <p>Prerequisites: {detail.prerequisites.join(", ")}</p>
            </div>
          ))
        ) : (
          <p>No details available</p>
        )}
      </div>
    </div>
  );
}

export default UserDetails;
