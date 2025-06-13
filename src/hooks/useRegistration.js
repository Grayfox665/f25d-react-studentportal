import { useContext } from "react";
import RegistrationContext from "../context/RegistrationContext";

export function useRegistration() {
  return useContext(RegistrationContext);
}
