import { useState } from "react";
import { TextField, Button, MenuItem, Typography, Box } from "@mui/material";
import coursesData from "../data/courses";
import { useRegistration } from "../hooks/useRegistration";

export default function RegisterForm() {
  const { addRegistration } = useRegistration();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    courseId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const course = coursesData.find((c) => c.id === formData.courseId);
    addRegistration({ ...formData, courseTitle: course?.title });

    setFormData({ name: "", email: "", courseId: "" });
    alert("Registration successful!");
  };

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Course Registration
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          select
          label="Select a Course"
          name="courseId"
          value={formData.courseId}
          onChange={handleChange}
          margin="normal"
          required
        >
          {coursesData.map((course) => (
            <MenuItem key={course.id} value={course.id}>
              {course.title}
            </MenuItem>
          ))}
        </TextField>
        <Box mt={3}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Register
          </Button>
        </Box>
      </form>
    </>
  );
}
