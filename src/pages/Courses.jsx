import { Button } from "@mui/material";
import CourseCard from "../components/CourseCard";
import coursesData from "../data/courses";
import { Link } from "react-router-dom";

export default function Courses() {
  return (
    <div>
      <h2>Heres the Courses page</h2>
      <Link to="/register">
        <Button variant="outlined">Register for a Course</Button>
      </Link>
      <p>Insert list of courses in card form here.</p>
      <div className="container row-md align-items-start ">
        <div className="row justify-content-around">
          {coursesData.map((course) => (
            <CourseCard
              key={course.id}
              id={course.id}
              title={course.title}
              description={course.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
