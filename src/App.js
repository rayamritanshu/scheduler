import React, {useState, useEffect} from 'react';
import './App.css'

// const schedule = {
//   title: 'CS Courses Schedule',
//   "courses": {
//     "CS339" : {
//       "id" : "CS339",
//       "meets" : "MWF 14:00-15:50",
//       "title" : "Intro to Databases"
//     },
//     "CS336" : {
//       "id" : "CS336",
//       "meets" : "MW 16:00-17:20",
//       "title" : "Design & Analysis of Algoritms"
//     },
//     "CS338" : {
//       "id" : "CS338",
//       "meets" : "TuTh 11:00-12:20",
//       "title" : "Practicum in Intelligent Info Systems"
//     },
//     "CS496" : {
//       "id" : "CS496",
//       "meets" : "TuTh 12:30-13:50",
//       "title" : "Rapid Prototyping"
//     },
//   }
// };

const terms = { F: 'Fall', W: 'Winter', S: 'Spring'};

const getCourseTerm = course => (
  terms[course.id.charAt(0)]
);

const getCourseNumber = course => (
  course.id.slice(1, 4)
);

const CourseList = ({ courses }) => (
  <div className = 'course-list'>
    { Object.values(courses).map(course => <Course key={course.id} course={ course } />) }
  </div>
);

const Banner = ({ title }) => (
  <h1>{ title }</h1>
);

const Course = ({ course }) => (
  <div className = "card m-1 p-2">
    <div className = "card-body">
    <div className="card-title">{ getCourseTerm(course) } CS { getCourseNumber(course) }</div>
    <div className="card-text">{ course.title }</div>
    </div>
  </div>
);

const App = () => {
  
  const [schedule, setSchedule] = useState();
  const url = 'https://courses.cs.northwestern.edu/394/data/cs-courses.php';

  useEffect( () => {
    const fetchSchedule = async () => {
      const response = await fetch(url);
      if(!response.ok) throw response;
      const json = await response.json();
      setSchedule(json);
    }
    fetchSchedule();
  }, [])

  if (!schedule) return <h1>Loading schedule...</h1>;

  return (
    <div className="container">
      < Banner title = {schedule.title} />
      < CourseList courses = {schedule.courses} />
    </div>
  );
};

export default App;