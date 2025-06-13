import { useState } from "react";
import RegistrationContext from "./RegistrationContext";

export function RegistrationProvider({ children }) {
  const [registrations, setRegistrations] = useState([]);

  const addRegistration = (registration) => {
    setRegistrations((prev) => [...prev, registration]);
  };

  return (
    <RegistrationContext.Provider value={{ registrations, addRegistration }}>
      {children}
    </RegistrationContext.Provider>
  );
}
