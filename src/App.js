import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from './component/Nav';

import CourseList from './component/CourseList ';

const App = () => {
  const [search, setSearch] = useState(null);
  
  const courses = useSelector((state) => state.course.courses);

  const handleSearch = (value) => {
    const filtered = courses.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()));
    if (filtered.length > 0) {
      setSearch(filtered);
      console.log(filtered); 
    } else {
      setSearch(null);
      console.log('No matching courses found');
    }
  };

  return (
    <div className='main'>
      
      <Nav handleSearch={handleSearch}   />
      <h1>Course Dashboard</h1>
      <CourseList searchResults={search}  />
    </div>
  );
};

export default App;
