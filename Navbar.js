import Link from "next/link";

export default function Navbar() {
  return (
    <div style={{
      width: "220px",
      background: "#1f2937",
      color: "white",
      padding: "20px"
    }}>
      <h2 style={{ marginBottom: 20 }}>📄 ZANECO</h2>

      <nav style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <Link href="/dashboard">📊 Dashboard</Link>
        <Link href="/documents">📄 Documents</Link>
        <Link href="/receive">📥 Inbox</Link>
        <Link href="/history">📜 History</Link>
      </nav>
    </div>
  );
}