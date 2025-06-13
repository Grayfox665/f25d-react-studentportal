import "bootstrap/dist/css/bootstrap.min.css";

export default function NewsPost({ title, content, date, category, course }) {
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-subtitle mb-2 text-body-secondary">{course}</p>
        <p className="card-subtitle mb-2 text-body-secondary">{category}</p>
        <p className="card-subtitle mb-2 text-body-secondary">{date}</p>
        <p className="card-text">{content}</p>
      </div>
    </div>
  );
}
