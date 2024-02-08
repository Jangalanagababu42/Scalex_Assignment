import "./App.css";
import { Routes, Route } from "react-router-dom";
import BookShelf from "./pages/BookShelf/bookshelf";
import Search from "./pages/Search/search";
import Navbar from "./components/Navbar/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<BookShelf />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
