import React, { useState, useEffect } from "react";
import axios from "axios";
function UserList() {
  const [listOfUsers, setListOfUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setListOfUsers(result.data);
      console.log(result);
    };
    fetchData();
  },[]);
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