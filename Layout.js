import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "Arial" }}>
      <Navbar />

      <div style={{ flex: 1, padding: 20, background: "#f4f6f9" }}>
        {children}
      </div>
    </div>
  );
}