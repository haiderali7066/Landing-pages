import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import V0page from "./pages/V0page";
import V0page2 from "./pages/V0page2";
import CabApp from "./pages/CabApp";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
          <Route path="cab" element={<CabApp />} />
          <Route path="v0page" element={<V0page />} />
          <Route path="v0page2" element={<V0page2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App