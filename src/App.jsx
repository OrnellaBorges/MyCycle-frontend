import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import In from "./Components/Containers/Forms/In";
import Home from "./Components/Containers/Home/Home";
import "tailwindcss/tailwind.css";
import { Layout } from "./Layout";

function App() {
    return (
        <Layout>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signIn" element={<In />} />
                </Routes>
            </Router>
        </Layout>
    );
}

export default App;
