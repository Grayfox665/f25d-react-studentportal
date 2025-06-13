import { Container, Box } from "@mui/material";
import RegisterForm from "../components/RegisterForm";

export default function Register() {
  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <RegisterForm />
      </Box>
    </Container>
  );
}
