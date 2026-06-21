"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        
        <div style={styles.badge}>ZANECO OFFICE SYSTEM</div>

        <h1 style={styles.title}>
          📄 Document Tracking System
        </h1>

        <p style={styles.subtitle}>
          ZANECO Office Internal Digital Management Platform
        </p>

        <div style={styles.line}></div>

        <p style={styles.text}>
          Secure document tracking, receiving, and acknowledgement system for internal office workflow.
        </p>

        <button
          style={styles.button}
          onClick={() => router.push("/login")}
        >
          ➜ Go to Login
        </button>

      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #0f172a, #1e3a8a, #2563eb)",
    fontFamily: "Arial",
  },
  card: {
    width: "500px",
    padding: "40px",
    borderRadius: "16px",
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(12px)",
    boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
    color: "white",
    textAlign: "center",
  },
  badge: {
    fontSize: "12px",
    letterSpacing: "2px",
    opacity: 0.8,
    marginBottom: "10px",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "14px",
    opacity: 0.85,
    marginBottom: "20px",
  },
  line: {
    width: "60px",
    height: "2px",
    background: "#60a5fa",
    margin: "0 auto 20px",
    borderRadius: "5px",
  },
  text: {
    fontSize: "13px",
    opacity: 0.8,
    marginBottom: "25px",
    lineHeight: "1.5",
  },
  button: {
    padding: "12px 20px",
    borderRadius: "10px",
    border: "none",
    background: "#3b82f6",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s",
  },
};