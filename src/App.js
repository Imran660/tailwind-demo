import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import Services from "./Services";

function App() {
  // mobile, sm,md,lg,xl
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
