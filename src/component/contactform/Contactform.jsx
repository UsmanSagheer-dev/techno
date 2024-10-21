import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";


const validationSchema = Yup.object({
  name: Yup.string().required("Please enter your name"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter your email"),
  message: Yup.string().required("Please enter your message"),
});

const ContactForm = () => {

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {

      console.log(values);

      resetForm();
    },
  });

  return (
    <Box
      sx={{
        width: "100%",
      
        mx: "auto",
        px: 4,
        py: 6,
        backgroundColor: "gray.100",
        borderRadius: "12px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        sx={{ mb: 4, fontWeight: "bold", color: "gray.800" }}
      >
        Contact Us
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Box sx={{ mb: 3 }}>
          <Typography sx={{ mb: 1, color: "gray.800" }}>Your Name</Typography>
          <TextField
            fullWidth
            id="name"
            name="name"
            placeholder="Enter your name"
            variant="outlined"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            sx={{
              backgroundColor: "gray.200",
              borderRadius: "8px",
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "yellow.300",
                },
              },
            }}
          />
        </Box>
        <Box sx={{ mb: 3 }}>
          <Typography sx={{ mb: 1, color: "gray.800" }}>Your Email</Typography>
          <TextField
            fullWidth
            id="email"
            name="email"
            placeholder="Enter your email"
            variant="outlined"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            sx={{
              backgroundColor: "gray.200",
              borderRadius: "8px",
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "yellow.300",
                },
              },
            }}
          />
        </Box>
        <Box sx={{ mb: 3 }}>
          <Typography sx={{ mb: 1, color: "gray.800" }}>
            Your Message
          </Typography>
          <TextField
            fullWidth
            id="message"
            name="message"
            placeholder="Enter your message"
            variant="outlined"
            multiline
            rows={4}
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
            sx={{
              backgroundColor: "gray.200",
              borderRadius: "8px",
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "yellow.300",
                },
              },
            }}
          />
        </Box>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: "yellow.300",
            color: "gray.800",
            py: 1.5,
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: "yellow.400",
            },
            transition: "background-color 0.3s ease",
          }}
        >
          Send Message
        </Button>
      </form>
    </Box>
  );
};

export default ContactForm;
