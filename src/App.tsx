import { Route, Routes, Link } from "react-router-dom"

import Home from "./Routes/Home/Home";
import MovieInner from "./Routes/MovieInner/MovieInner";
import MoviePlayer from "./Routes/MoviePlayer/MoviePlayer";

import './App.css'

function App() {

  return (
      <>
          <header className="fixed left-0 top-0 z-50 bg-black p-5 min-w-full">
              <nav>
                  <ul>
                      <li><Link to="/">Home</Link></li>
                  </ul>
              </nav>
          </header>

          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movie" element={<MovieInner />} />
              <Route path="/moviePlayer" element={<MoviePlayer />} />
          </Routes>
      </>

  )
}

export default App
