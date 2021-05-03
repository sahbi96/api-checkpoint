import React, { useState, useEffect } from "react";
import axios from "axios";
function UserList() {
  const [listOfUsers, setListOfUsers] = useState([]);
   useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setListOfUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h1>List of users</h1>
      
        {listOfUsers.map((user) => (
          <li>{user.name}</li>
        ))}
      
    </div>
  );
}
export default UserList;
