import { useRegistration } from "../hooks/useRegistration";

export default function Home() {
  const { registrations } = useRegistration();

  return (
    <div className="container my-5">
      <h2>This is the home page</h2>
      <p>Here you will see what courses you have registered to</p>
      <div className="card shadow">
        <div className="card-body">
          <h3>The current courses you are registered to:</h3>
          {registrations.length === 0 ? (
            <p className="text-muted">No registrations yet.</p>
          ) : (
            <ul className="list-group list-group-flush">
              {registrations.map((reg, index) => (
                <li key={index} className="list-group-item">
                  <strong>{reg.courseTitle}</strong> - {reg.name} ({reg.email})
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
