import { BrowserRouter ,Routes,Route} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Navbar from "./components/Navbar";
import React from "react";
import { ThemeProvider } from "./theme-context";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename="/Dark-Light--Mode">
         <Navbar/>
         {/* routes */}

         <Routes>
           <Route path="/"       element={<Home />}/>
           <Route path="/about"  element={<About />}/>
           <Route path="/blog"   element={<Blog />}/>
         </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;