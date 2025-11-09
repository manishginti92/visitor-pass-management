/*const API_URL = "http://localhost:5000/api"; // change port if needed

export const api = {
  // ✅ Get all visitors
  getVisitors: async (token) => {
    const res = await fetch(`${API_URL}/visitors`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.json();
  },

  // ✅ Add new visitor
  addVisitor: async (visitor, token) => {
    const res = await fetch(`${API_URL}/visitors`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(visitor),
    });
    return res.json();
  },

  // ✅ Update visitor status (Approve / Check-in)
  updateStatus: async (id, status, token) => {
    const res = await fetch(`${API_URL}/visitors/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ status }),
    });
    return res.json();
  },
};
*/
// frontend/src/api/api.js
const BASE_URL = "http://localhost:5000/api"; // ✅ backend running on port 5000

export const api = {
  // ✅ Register a new user
  register: async (data) => {
    const res = await fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return await res.json();
  },

  // ✅ Login user
  login: async (data) => {
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return await res.json();
  },

  // ✅ Get all visitors (admin/security)
  getVisitors: async (token) => {
    const res = await fetch(`${BASE_URL}/visitors`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return await res.json();
  },

  // ✅ Add new visitor
  addVisitor: async (data, token) => {
    const res = await fetch(`${BASE_URL}/visitors`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    return await res.json();
  },

  // ✅ Update visitor status (Approve / Check-in)
  updateStatus: async (id, status, token) => {
    const res = await fetch(`${BASE_URL}/visitors/${id}/status`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ status }),
    });
    return await res.json();
  },

  // ✅ Verify visitor pass (QR)
  verifyPass: async (visitorId, token) => {
  const res = await fetch("http://localhost:5000/api/visitors/verify", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ visitorId }),
  });
  return res.json();
},
};
