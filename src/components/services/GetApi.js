import React, { useState, useEffect } from "react";

const GetApi = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  }, []);
  return (
    <div>
      <div key={user.id}>
        <p>
          <strong>Name: </strong>" "{user.name}
        </p>
        <p>
          <strong>Website: </strong>
          {user.website}
        </p>
        <p>
          <strong>Email: </strong>" "{user.email}
        </p>
        <p>
          <strong>Phone: </strong>" "{user.phone}
        </p>
      </div>
    </div>
  );
};

export default GetApi;
