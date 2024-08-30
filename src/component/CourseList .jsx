import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDetails } from "../storage/detailsSlice";
import { Link } from "react-router-dom";
import { setEnrolled } from "../storage/enroll"; 

const CourseList = ({ searchResults }) => {
  const dispatch = useDispatch();
  const detailDispatch = useDispatch();
  const courses = useSelector((state) => state.course.courses);
  const users = useSelector((state) => state.user.user);

  const handleDetails = (id) => {
    const detailsData = courses.find((item) => item.id === id);

    
    detailDispatch(setDetails([detailsData]));
  };

  const handleEnroll = (course) => {
    if (!users.length > 0) {
      alert("Sign in before enroll");
      return;
    }
    dispatch(setEnrolled(course));
  };

  const renderCourses = (coursesToRender) => {
    return coursesToRender.map((course) => (
      <div key={course.id} className="card" style={{ width: "20rem" }}>
        <img
          src={course.thumbnail}
          className="card-img-top"
          alt="Course Thumbnail"
        />
        <div className="card-body">
          <h5 className="card-title">{course.name}</h5>
          <p className="card-text">{course.description}</p>
          <div className="d-flex justify-content-around">
            <Link to="/details">
              <button
                className="btn btn-info"
                onClick={() => handleDetails(course.id)}
              >
                Details
              </button>
            </Link>
            <button
              className="btn btn-warning"
              onClick={() => handleEnroll(course)}
            >
              Enroll
            </button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="list">
      {searchResults !== null
        ? renderCourses(searchResults)
        : renderCourses(courses)}
    </div>
  );
};

export default CourseList;
