import Navbar from "../components/NavBar";

export default function AppLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
