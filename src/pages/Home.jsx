import { useRegistration } from "../hooks/useRegistration";

export default function Home() {
  const { registrations } = useRegistration();

  return (
    <div className="container">
      <h2>This is the home page</h2>
      <p>home page stuff fluff</p>
      <h3>The current courses you are registered to:</h3>
      {registrations.length === 0 ? (
        <p>No registrations yet.</p>
      ) : (
        <ul>
          {registrations.map((reg, index) => (
            <li key={index}>
              <strong>{reg.courseTitle}</strong> - {reg.name} ({reg.email})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
