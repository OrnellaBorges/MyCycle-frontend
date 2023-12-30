import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import In from "./Components/Containers/Forms/In";
import Up from "./Components/Containers/Forms/Up";
import Home from "./Components/Containers/Home/Home";
import StartCycle from "./Components/Containers/StartCycle/StartCycle";
import "tailwindcss/tailwind.css";
import { Layout } from "./Layout";

function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signIn" element={<In />} />
          <Route path="/signUp" element={<Up />} />
          <Route path="/startCycle" element={<StartCycle />} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
