import React, { useContext, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../../contexts/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName);
  const photoURLRef = useRef(user.photoURL);
//   const [disable, setDisable] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(photoURLRef.current.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

//   const handleBtn = () => {
//     setDisable(!disable)
//   }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            readOnly
            defaultValue={user?.email}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            onChange={handleNameChange}
            defaultValue={name}
            type="text"
            placeholder="Name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            ref={photoURLRef}
            defaultValue={user?.photoURL}
            type="text"
            placeholder="Photo URL"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
{/* 
      <button onClick={handleBtn} className={` ${disable ? "btn btn-danger" : "btn btn-primary"}`} 
      >
        Login
      </button> */}
    </>
  );
};

export default Profile;
