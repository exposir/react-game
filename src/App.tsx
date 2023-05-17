import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";

const THEME_COLOR = "indigo-600";
const TEXT_COLOR = "text-white";

const Header = () => (
  <header
    className={`bg-${THEME_COLOR} ${TEXT_COLOR} p-4 md:p-8 shadow-md flex justify-between items-center`}
  >
    <h1 className="text-2xl md:text-3xl font-bold">React Scaffold</h1>
    <nav>
      <ul className="flex space-x-4">
        <li>
          <Link className={`${TEXT_COLOR} hover:underline`} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={`${TEXT_COLOR} hover:underline`} to="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

const Footer = () => (
  <footer className={`bg-${THEME_COLOR} ${TEXT_COLOR} p-4 md:p-8 w-full`}>
    <p className="text-center text-sm md:text-base">
      © 2023 React Scaffold. All rights reserved.
    </p>
  </footer>
);

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col min-h-screen w-full bg-gray-100">
    <Header />
    {children}
    <Footer />
  </div>
);

const App = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  </Router>
);

export default App;
