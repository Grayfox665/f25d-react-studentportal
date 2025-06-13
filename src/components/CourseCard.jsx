import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default function CourseCard({ id, title, description }) {
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{description}</p>
        <Link to={`/courses/${id}`} className="btn btn-primary">
          Read More
        </Link>
      </div>
    </div>
  );
}
