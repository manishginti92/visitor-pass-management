import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/api";

export default function AddVisitor() {
  const [form, setForm] = useState({ name: "", phone: "", purpose: "" });
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.addVisitor(form, token);
    navigate("/dashboard");
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h3>Add Visitor</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Phone"
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Purpose"
          onChange={(e) => setForm({ ...form, purpose: e.target.value })}
        />
        <button className="btn btn-success w-100">Add</button>
      </form>
    </div>
  );
}
