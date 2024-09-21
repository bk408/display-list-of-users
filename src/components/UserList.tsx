import React from "react";

// Define the shape of the user data

interface User {
  id: number;
  name: string;
  email: string;
}

// sample user data

const users: User[] = [
  { id: 1, name: "John Doe", email: "john.smith@example.com" },
  { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
  { id: 3, name: "Alice Johnson", email: "alice.johnson@example.com" },
];

// userList component
const UserList: React.FC = () => {
  return (
    <div className="container">
      <div className="title">
        <h1>user list</h1>
      </div>
      <div className="box">
        {users.map((user) => (
          <div className="user-details" key={user.id}>
            <h4>
              Name: <span>{user.name}</span>
            </h4>
            <h4>
              Email: <span>{user.email}</span>
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
