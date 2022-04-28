import React, { useState } from "react";

const Users = () => {
  const [users, setUsers] =useState([
    { name: "Sheskpear", id: 1 },
    { name: "Paulo", id: 2 },
    { name: "Falcioni", id: 3 },
  ]);
  return (
    <div>
      {users.map((user) => {
        return <div key={user.id}><h1>{user.name}</h1></div>
      })}
    </div>
  );
};

export default Users;
