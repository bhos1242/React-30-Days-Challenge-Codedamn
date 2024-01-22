import React, { useState } from "react";
import styled from "styled-components";

const Day26 = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, confirmPassword } = formData;
    if (firstName.trim() === "") {
      setError((prevError) => ({
        ...prevError,
        firstName: "First name cannot be empty",
      }));
    }
    if (lastName.trim() === "") {
      setError((prevError) => ({
        ...prevError,
        lastName: "Last name cannot be empty",
      }));
    }
    if (
      !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(
        email.toLocaleLowerCase()
      )
    ) {
      setError((prevError) => ({
        ...prevError,
        email: "Invalid email address",
      }));
    }
    if (password.length <= 7) {
      setError((prevError) => ({
        ...prevError,
        password: "Password must be greater than 7 characters",
      }));
    }

    if (password !== confirmPassword) {
      setError((prevError) => ({
        ...prevError,
        confirmPassword: "Passwords do not match",
      }));
    }

    console.log("Form submitted successfully");
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <input
          data-testid="first-name-id"
          type="text"
          name="firstName"
          onChange={handleInput}
          placeholder="First Name"
        />
        <p data-testid="first-name-error-id" className="error">
          {error.firstName}
        </p>
        <input
          data-testid="last-name-id"
          type="text"
          name="lastName"
          onChange={handleInput}
          placeholder="Last Name"
        />
        <p data-testid="last-name-error-id" className="error">
          {error.lastName}
        </p>
        <input
          data-testid="email-id"
          type="email"
          name="email"
          onChange={handleInput}
          placeholder="Email Address"
        />
        <p data-testid="email-error-id" className="error">
          {error.email}
        </p>
        <input
          data-testid="password-id"
          type="password"
          name="password"
          onChange={handleInput}
          placeholder="Password"
        />
        <p data-testid="password-error-id" className="error">
          {error.password}
        </p>
        <input
          data-testid="confirm-password-id"
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleInput}
        />
        <p data-testid="confirm-password-error-id" className="error">
          {error.confirmPassword}
        </p>
        <button type="submit">Sign Up</button>
      </form>
    </Wrapper>
  );
};

export default Day26;

const Wrapper = styled.div`
  margin-top: 24px;
  font-family: sans-serif;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  input {
    padding: 8px 12px;
    font-size: 18px;
    margin-bottom: 6px;
    width: clamp(200px, 40%, 400px);
  }

  button {
    padding: 10px 20px;
    font-size: 18px;
    border: none;
    border-radius: 4px;
    background-color: #333;
    color: #fff;
    cursor: pointer;
    margin-top: 24px;

    &:hover {
      opacity: 0.8;
    }
  }

  .error {
    margin: 0 0 24px 0;
    color: red;
  }
`;
