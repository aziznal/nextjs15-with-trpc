import { BrowserRouter, Routes, Route } from "react-router";
import { HomePage } from "./HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/spa/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
