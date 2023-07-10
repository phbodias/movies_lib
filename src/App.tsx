import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import Header from "./components/Header";
import { useEffect, useState } from "react";

const App = () => {
  const [colorHeader, setColorHeader] = useState<boolean>(false);

  useEffect(() => {
    const scroll = () => {
      if (window.scrollY > 40) setColorHeader(true);
      else setColorHeader(false);
    };

    window.addEventListener("scroll", scroll);
  }, []);

  return (
    <BrowserRouter>
      <Header colorHeader={colorHeader} />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
