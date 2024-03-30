import React from "react";
import { useSelector } from "react-redux";

function UsersList() {
  const counter = useSelector((store) => store);
  return (
    <div>
      <h2>All users</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {counter.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.fName}</td>
              <td>{user.lName}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersList;
