import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { Navbar } from "./components";
import { Home, Contact, About, ContextPage } from "./routes";

export default function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="use-context" element={<ContextPage />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}
