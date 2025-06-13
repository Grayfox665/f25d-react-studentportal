import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default function CourseCard({ id, title, description }) {
  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body d-flex flex-column">
        <h2 className="card-title mb-3">{title}</h2>
        <p className="card-text flex-grow-1">{description}</p>
        <div className="mt-auto">
          <Link to={`/courses/${id}`} className="btn btn-primary">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
