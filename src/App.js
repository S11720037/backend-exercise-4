import Navbar from "./components/navbar";
import Login from "./components/login";

function App() {
  return (
    <div>
      <Navbar />

      <div className="container-fluid p-2">
        <Login />
      </div>
    </div>
  );
}

export default App;
