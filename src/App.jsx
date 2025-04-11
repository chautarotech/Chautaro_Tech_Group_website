import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/navbar';
import Blog from './pages/blog';
import Categories from './pages/categories';
import Footer from './components/footer';
import BlogDetails from './pages/blogdetails';

function App() {


  return (
    <Router>
      <div className='z-0 bg-primary'>


     
      {/* <Analytics /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/categories" element={<Categories />} />
        {/* <Route path="/blog/:slug" element={<BlogDetails />} /> */}
        <Route path="/blogdetails" element={<BlogDetails />} />
        {/* <Route path="/message" element={<Message />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="/extra" element={<Extra />} /> */}
      </Routes>
      <Footer />
        
      </div>
    </Router>
  )
}

export default App
