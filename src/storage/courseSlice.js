import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [
    {
      id: 1,
      name: "Introduction to React Native",
      instructor: "John Doe",
      description:
        "Learn the basics of React Native development and build your first mobile app.",
      enrollmentStatus: "Open",
      thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
      duration: "8 weeks",
      schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
      location: "Online",
      prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
    },
    {
      id: 2,
      name: "Advanced Node.js",
      instructor: "Jane Smith",
      description:
        "Deep dive into Node.js and learn to build scalable, high-performance server-side applications.",
      enrollmentStatus: "Closed",
      thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
      duration: "10 weeks",
      schedule: "Mondays and Wednesdays, 7:00 PM - 9:00 PM",
      location: "Online",
      prerequisites: [
        "Basic JavaScript knowledge",
        "Experience with server-side programming",
      ],
    },
    {
      id: 3,
      name: "Mastering Python for Data Science",
      instructor: "Alice Johnson",
      description:
        "Become an expert in Python for data science, including libraries like NumPy, pandas, and scikit-learn.",
      enrollmentStatus: "In Progress",
      thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
      duration: "12 weeks",
      schedule: "Fridays, 5:00 PM - 8:00 PM",
      location: "Online",
      prerequisites: [
        "Basic Python knowledge",
        "Understanding of basic statistics",
      ],
    },
    {
      id: 4,
      name: "Full Stack Web Development with MERN",
      instructor: "Michael Brown",
      description:
        "Learn full stack web development using MongoDB, Express, React, and Node.js (MERN).",
      enrollmentStatus: "Open",
      thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
      duration: "16 weeks",
      schedule: "Saturdays and Sundays, 10:00 AM - 1:00 PM",
      location: "Online",
      prerequisites: [
        "Basic JavaScript knowledge",
        "Familiarity with HTML/CSS",
      ],
    },
    {
      id: 5,
      name: "Data Structures and Algorithms with Java",
      instructor: "Sarah Thompson",
      description:
        "Learn the fundamentals of data structures and algorithms using Java, and master problem-solving techniques.",
      enrollmentStatus: "Open",
      thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
      duration: "14 weeks",
      schedule: "Wednesdays and Fridays, 4:00 PM - 6:00 PM",
      location: "Online",
      prerequisites: [
        "Basic knowledge of Java",
        "Understanding of basic algorithms",
      ],
    },
    {
      id: 6,
      name: "UI/UX Design Fundamentals",
      instructor: "Emily Davis",
      description:
        "Learn the principles of UI/UX design and how to create visually appealing and user-friendly interfaces.",
      enrollmentStatus: "Closed",
      thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
      duration: "6 weeks",
      schedule: "Tuesdays and Thursdays, 2:00 PM - 4:00 PM",
      location: "Online",
      prerequisites: [
        "Basic design knowledge",
        "Familiarity with design tools",
      ],
    },
  ],
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setCourses: (state, action) => {
      state.courses = action.payload;
    },
  },
});

export const { setCourses } = courseSlice.actions;
export default courseSlice.reducer;
