import React, { useEffect, useState } from "react";
import { api } from "../api/api";
import { Link, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [visitors, setVisitors] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) return navigate("/login");

    api.getVisitors(token).then((data) => {
      console.log("API Response:", data);
      if (data.message === "Not authorized, token failed") {
        navigate("/login");
      } else {
        setVisitors(Array.isArray(data) ? data : []);
      }
    });
  }, [token, navigate]);
  const handleStatus = async (id, status) => {
  try {
    const result = await api.updateStatus(id, status, token);
    if (result._id) {
      alert(`Visitor status updated to: ${status}`);
      const updated = await api.getVisitors(token);
      setVisitors(Array.isArray(updated) ? updated : []);
    } else {
      alert(result.message || "Failed to update status");
    }
  } catch (err) {
    console.error("Error updating visitor:", err);
  }
};
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="container mt-4">
      <h2>Visitor Dashboard</h2>

      {/*  Navigation Buttons */}
      <div className="mb-3">
        <Link to="/add" className="btn btn-primary me-2">
          + Add Visitor
        </Link>
        <Link to="/verify" className="btn btn-secondary mb-3 ms-2">
           Verify Pass
        </Link>

        <button onClick={handleLogout} className="btn btn-danger">
          Logout
        </button>
      </div>

      {/*  Visitor Table */}
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Purpose</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {visitors.length > 0 ? (
            visitors.map((v) => (
              <tr key={v._id}>
                <td>{v.name}</td>
                <td>{v.phone}</td>
                <td>{v.purpose}</td>
                <td>{v.status}</td>
                <td>
                  <button
                    onClick={() => handleStatus(v._id, "approved")}
                    className="btn btn-sm btn-success me-2"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleStatus(v._id, "checked-in")}
                    className="btn btn-sm btn-info"
                  >
                    Check-in
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                No visitors found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
