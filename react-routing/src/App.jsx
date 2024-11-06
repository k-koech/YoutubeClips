import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NoPage from "./pages/NoPage"
import Student from "./pages/Student"


function App() {

  return (
     <BrowserRouter>
     <Routes>
       <Route path="/" element={<Layout /> }>
             <Route index element={<Home />} />
             <Route path="about" element={<About />} />
             <Route path="student/:id" element={<Student />} />
             <Route path="*" element={<NoPage />} />

       </Route>
     </Routes>
     </BrowserRouter>
  )
}

export default App
