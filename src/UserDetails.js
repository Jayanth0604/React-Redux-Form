import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const UserDetails = () => {
  const users = useSelector((state) => state.users);
  const navigate = useNavigate();
  function redirect() {
    navigate("/RegisterPage");
  }
  return (
    <div className="regis-table">
      <h1>Welcome! </h1>
      <h2>User Details</h2>
      <button className="reg-btn" onClick={redirect}>
        Home Page
      </button>
      <p>Name: Email: Password:</p>
      {users.map((user, index) => (
        <div key={index}>
          <table className="table">
            <tbody>
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default UserDetails;
