import './App.css'
import Header from './component/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FooterNew from './component/FooterNew';
import Hero from './component/Hero';
import Features from './component/Features';
import Services from './component/Services';
import Projects from './component/Projects';
import Testimonials from './component/Testimonials';
import CTA from './component/CTA';
import ProductPage from './component/ProductPage';
import ProjectPage from './component/ProjectPage';
import ProjectDetailPage from './component/ProjectDetailPage';
import AboutPage from './component/AboutPage';
import ContactPage from './component/ContactPage';
import NewsPage from './component/NewsPage';

const HomePage = () => (
  <div>
    <Hero />
    <Features />
    <Services />
    <Projects />
    <Testimonials />
    <CTA />
  </div>
);

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/san-pham" element={<ProductPage />} />
            <Route path="/cong-trinh" element={<ProjectPage />} />
            <Route path="/cong-trinh/:id" element={<ProjectDetailPage />} />
            <Route path="/gioi-thieu" element={<AboutPage />} />
            <Route path="/lien-he" element={<ContactPage />} />
            <Route path="/tin-tuc" element={<NewsPage />} />
          </Routes>
        </main>
        <FooterNew />
      </div>
    </Router>
  )
}

export default App