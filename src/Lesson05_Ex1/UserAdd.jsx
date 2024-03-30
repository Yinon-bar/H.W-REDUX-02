import React, { useState } from "react";
import { useDispatch } from "react-redux";

function UserAdd() {
  const [id, setId] = useState();
  const [fName, setfName] = useState();
  const [lName, setlName] = useState();
  const [age, setAge] = useState();

  const dispatch = useDispatch();

  const addUser = () => {
    console.log({ id, fName, lName, age });
    const action = { type: "ADD", payload: { id, fName, lName, age } };
    dispatch(action);
  };

  const updateUser = () => {
    console.log({ id, fName, lName, age });
    const action = { type: "UPDATE", payload: { id, fName, lName, age } };
    dispatch(action);
  };

  return (
    <div>
      <h2>Add User</h2>
      ID: <input type="number" onChange={(e) => setId(+e.target.value)} />
      <br />
      First Name:{" "}
      <input type="text" onChange={(e) => setfName(e.target.value)} />
      <br />
      Last Name:{" "}
      <input type="text" onChange={(e) => setlName(e.target.value)} />
      <br />
      Age: <input type="number" onChange={(e) => setAge(+e.target.value)} />
      <br />
      <br />
      <button onClick={addUser}>Add</button>
      <button onClick={updateUser}>Update</button>
      <button>Delete</button>
    </div>
  );
}

export default UserAdd;
