import React from 'react';

const schedule = {
  title: 'CS Courses Schedule',
  "courses": {
    "CS339" : {
      "id" : "CS339",
      "meets" : "MWF 14:00-15:50",
      "title" : "Intro to Databases"
    },
    "CS336" : {
      "id" : "CS336",
      "meets" : "MW 16:00-17:20",
      "title" : "Design & Analysis of Algoritms"
    },
    "CS338" : {
      "id" : "CS338",
      "meets" : "TuTh 11:00-12:20",
      "title" : "Practicum in Intelligent Info Systems"
    },
    "CS496" : {
      "id" : "CS496",
      "meets" : "TuTh 12:30-13:50",
      "title" : "Rapid Prototyping"
    },
  }
};

const CourseList = ({ courses }) => (
  <div>
    { Object.values(courses).map(course => <Course key = { course.id.slice[2,4] } course = { course } />) }
  </div>
);

const Banner = ({ title }) => (
  <h1>{ title }</h1>
);

const Course = ({ course }) => (
  <div>
    { course.id } : { course.title }
  </div>
);

const App = () => (
  <div>
    < Banner title = {schedule.title} />
    < CourseList courses = {schedule.courses} />
  </div>
);

export default App;