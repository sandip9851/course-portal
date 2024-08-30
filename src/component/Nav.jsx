//navbar  of the website
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../storage/userSlice";

function Nav({ handleSearch }) {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.user); //user details which is enter by user by clicking sign in button value is comming from store

  const navigate = useNavigate(); //navigate hook for navigation

  const enrolledCourses = useSelector((state) => state.enroll.enrolled); //enrolled course value is comming from store

  //handel sign in button
  const handlePromptSearch = () => {
    if (users.length === 0) {
      const userName = window.prompt("Enter your name");
      const userEmail = window.prompt("Enter your Email");
      if (userName && userEmail) {
        dispatch(setUser({ name: userName, email: userEmail }));
      }
    }
  };

  //handel user dashboard navigation
  const handelUserDash = () => {
    if (users.length === 0) {
      alert("Sign in yourself");
      return;
    }
    navigate("/user");
  };

  //handeled course dashboard navigation
  const handleDashboardClick = () => {
    navigate("/");
  };

  const val = useRef(); //useRef hook taking refference of search input value

  return (
    <div className="navabar">
      {/*user dashboard button */}
      <button
        type="button"
        className="btn btn-warning"
        onClick={handelUserDash}
      >
        User {enrolledCourses.length > 0 && enrolledCourses.length}
      </button>

      {/*Course dashboard button */}

      <button
        type="button"
        className="btn btn-outline-warning"
        onClick={handleDashboardClick}
      >
        DashBoard
      </button>

      {/*log in button */}

      <button
        type="button"
        className="btn btn-warning"
        onClick={handlePromptSearch}
      >
        Sign In
      </button>

      {/*search input  */}

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
