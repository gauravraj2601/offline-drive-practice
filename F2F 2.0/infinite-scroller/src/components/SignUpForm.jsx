import React, { useState } from "react";

export const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
 
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const {value, name} = e.target;

    setFormData({
        ...formData,
        [name]:value
    })
  };
  const validateForm = () => {
    let formErrors = {};
    const { name, email, password } = formData;

    if (!name) formErrors.name = "Name is required.";
    if (!email) {
      formErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Email address is invalid.";
    }
    if (!password) formErrors.password = "Password is required.";
    if (password && password.length < 6) {
      formErrors.password = "Password must be at least 6 characters.";
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0; 

  };
  const handleSubmit = (e) =>{
    e.preventDefault();

    if (validateForm()) {
      console.log("Form Data: ", formData);
      alert("Form submitted successfully!");
    } else {
      alert("Please fill out the form correctly.");
    }
  }
  return (
    <div>
      <div style={{ maxWidth: "400px", margin: "auto",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", padding:"30px", marginBottom:"50px" }}>
        <h2>Signup Form</h2>
        <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column", gap:"10px"}}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password}</p>
            )}
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};
