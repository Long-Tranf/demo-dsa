import Home from "./pages/home/home"
import Category from "./pages/category/category"
import Header from "./components/header"
import Login from "./pages/login/login"
import SignUp from "./pages/signup/signup"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout'

function App() {
  return (
    <Router>
      <Routes>
        {/* Các trang không có Layout */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/category"
          element={
            <Layout>
              <Category />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
