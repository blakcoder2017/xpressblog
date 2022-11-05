import Home from "./components/Home";
import Header from "./components/Header";
import Create from "./components/Create";
import PostDetails from "./components/PostDetials";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/posts:id" element={<PostDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
