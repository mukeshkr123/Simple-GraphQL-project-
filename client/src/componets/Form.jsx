import React, { useState } from "react";
import { CREATE_USER_MUTATION } from "../GraphQl/Mutations";
import { useMutation } from "@apollo/client";

const AddUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAddUser = () => {};

  return (
    <div>
      <h1>Add User</h1>
      <form>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            placeholder=" Enter First Name"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            placeholder="Enter Last Name"
            name="lastName"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button type="button" onClick={handleAddUser}>
          Create User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
