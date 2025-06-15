import { Button } from "@mui/material";
import CourseCard from "../components/CourseCard";
import coursesData from "../data/courses";
import { Link } from "react-router-dom";

export default function Courses() {
  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
        <h2 className="mb-0 ">Courses</h2>
        <Link to="/register">
          <Button variant="outlined" color="primary">
            Register for a Course
          </Button>
        </Link>
      </div>
      <p className="text-muted mb-4">List of available courses below.</p>

      <div className="row">
        {coursesData.map((course) => (
          <div key={course.id} className="col-12 col-sm-6 col-md-4 mb-4">
            <CourseCard
              id={course.id}
              title={course.title}
              description={course.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
