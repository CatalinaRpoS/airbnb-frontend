// import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from './pages/mainpage.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  </BrowserRouter>
  );
};

export default App;
