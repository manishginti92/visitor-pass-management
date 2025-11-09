import React, { useState } from "react";
import axios from "axios";

export default function VerifyPass() {
  const [visitorId, setVisitorId] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleVerify = async (e) => {
    e.preventDefault();

    if (!visitorId.trim()) {
      alert("Please enter a Visitor ID");
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      //  Backend URL
      const res = await axios.post("http://localhost:5000/api/visitors/verify-pass", {
        visitorId, // backend expects this key
      });

      if (res.data.success) {
        setResult({ valid: true, visitor: res.data.visitor });
      } else {
        setResult({ valid: false });
      }
    } catch (error) {
      console.error("Verification Error:", error);
      setResult({ valid: false });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="container mt-5 p-4 rounded shadow"
      style={{ maxWidth: "450px", backgroundColor: "#f8f9fa" }}
    >
      <h3 className="text-center mb-4">🔍 Verify Visitor Pass</h3>

      <form onSubmit={handleVerify}>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter Visitor ID"
          value={visitorId}
          onChange={(e) => setVisitorId(e.target.value)}
        />
        <button className="btn btn-primary w-100" disabled={loading}>
          {loading ? "Verifying..." : "Verify"}
        </button>
      </form>

      {result && (
        <div className="mt-4 text-center">
          {result.valid ? (
            <div>
              <p className="text-success fw-bold"> Valid Pass</p>
              <p>👤 Name: {result.visitor.name}</p>
              <p>📞 Phone: {result.visitor.phone}</p>
              <p>🎯 Purpose: {result.visitor.purpose}</p>
              <p>🟢 Status: {result.visitor.status}</p>
            </div>
          ) : (
            <p className="text-danger fw-bold">❌ Invalid Pass or Visitor Not Found</p>
          )}
        </div>
      )}
    </div>
  );
}
