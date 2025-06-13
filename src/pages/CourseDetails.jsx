import { useParams } from "react-router-dom";
import coursesData from "../data/courses";

export default function CourseDetails() {
  const { id } = useParams();
  const course = coursesData.find((course) => course.id === parseInt(id));

  if (!course) {
    return <p>Course not found!</p>;
  }

  return (
    <div className="container mt-4">
      <h3>{course.title}</h3>
      <p>{course.duration}</p>
      <p>{course.description} </p>
    </div>
  );
}
