import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./component/Nav";
import CourseList from "./component/CourseList ";

const App = () => {
  const [search, setSearch] = useState(null);

  const courses = useSelector((state) => state.course.courses);

  //decalre the function which manage data of search state
  const handleSearch = (value) => {
    const filtered = courses.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    if (filtered.length > 0) {
      setSearch(filtered);
    } else {
      setSearch(null);
    }
  };

  return (
    <div className="main">
      <Nav handleSearch={handleSearch} />{" "}
      {/*pass the function parent to child as props */}
      <h1>Course Dashboard</h1>
      <CourseList searchResults={search} />{" "}
      {/*pass the state parent to child as props */}
    </div>
  );
};

export default App;
