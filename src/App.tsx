import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from './pages/mainpage';
import ItemPage from './pages/itempage';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/item" element={<ItemPage />} />
    </Routes>
  </BrowserRouter>
  );
};

export default App;
