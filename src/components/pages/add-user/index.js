import { useState } from "react";

function AddUser() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    console.log("=============");
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
    console.log("=============");
  };

  return (
    <div className="container-md border rounded shadow-lg mb-3 px-4 pb-5 py-3">
      <h3 className="text-center">Add User</h3>
      <hr />

      <form>
        <div className="mb-3">
          <label htmlFor="first-name" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="first-name"
            // value={username}
            // onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="last-name" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="last-name"
            // value={username}
            // onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={e => handleSubmit(e)}
            style={{ width: "100%" }}
          >
            Add User
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddUser;
