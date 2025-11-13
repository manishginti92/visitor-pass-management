const BASE_URL = "http://localhost:5000/api"; 

export const api = {

  register: async (data) => {
    const res = await fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return await res.json();
  },

  
  login: async (data) => {
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return await res.json();
  },

  
  getVisitors: async (token) => {
    const res = await fetch(`${BASE_URL}/visitors`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return await res.json();
  },


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
