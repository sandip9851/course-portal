import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../storage/userSlice";

function Nav({ handleSearch }) {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const enrolledCourses = useSelector((state) => state.enroll.enrolled);

  const handlePromptSearch = () => {
    if (users.length === 0) {
      const userName = window.prompt("Enter your name");
      const userEmail = window.prompt("Enter your Email");
      if (userName && userEmail) {
        dispatch(setUser({ name: userName, email: userEmail }));
      }
    }
  };

  const handelUserDash = () => {
    if (users.length === 0) {
      alert("Sign in yourself");
      return;
    }
    navigate("/user");
  };

  const handleDashboardClick = () => {
    navigate("/");
  };

  const val = useRef();

  return (
    <div className="navabar">
      <button
        type="button"
        className="btn btn-warning"
        onClick={handelUserDash}
      >
        User {enrolledCourses.length > 0 && enrolledCourses.length}
      </button>

      <button
        type="button"
        className="btn btn-outline-warning"
        onClick={handleDashboardClick}
      >
        DashBoard
      </button>

      <button
        type="button"
        className="btn btn-warning"
        onClick={handlePromptSearch}
      >
        Sign In
      </button>

      <div className="nav-search">
        <input
          type="text"
          placeholder="Search Course"
          ref={val}
          onKeyUp={() => handleSearch(val.current.value)}
        />
      </div>
    </div>
  );
}

export default Nav;
