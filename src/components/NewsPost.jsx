import "bootstrap/dist/css/bootstrap.min.css";

export default function NewsPost({ title, content, date, category, course }) {
  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-body">
        <h4 className="card-title mb-3">{title}</h4>
        <div className="d-flex flex-wrap text-muted mb-3 small">
          <div className="me-3">
            <i className="bi bi-book me-1"></i>
            {course}
          </div>

          <div className="me-3">
            <i className="bi bi-tag me-1"></i>
            {category}
          </div>
          <div className="me-3">
            <i className="bi bi-calendar me-1"></i>
            {date}
          </div>
        </div>
        <p className="card-text">{content}</p>
      </div>
    </div>
  );
}
