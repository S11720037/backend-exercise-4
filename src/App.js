import Navbar from "./components/navbar";
import Login from "./components/login";
import Register from "./components/register";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <div>
      <Navbar />

      <div className="container-fluid mt-3 p-2">
        {/* <Login /> */}
        {/* <Register /> */}
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
