import Header from "./components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import AppRoutes from "./components/routes/AppRoutes";

function App() {
  return (
    <>
      <Router>
        <Header />{" "}
        <div className="main-content">
          <AppRoutes />
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
