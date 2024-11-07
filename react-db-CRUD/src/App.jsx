import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NoPage from "./pages/NoPage"
import Student from "./pages/Student"
import AddStudent from "./pages/AddStudent"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
     <BrowserRouter>
     <Routes>
       <Route path="/" element={<Layout /> }>
             <Route index element={<Home />} />
             <Route path="about" element={<About />} />
             <Route path="addstudent" element={<AddStudent />} />
             <Route path="student/:student_id" element={<Student />} />
             <Route path="*" element={<NoPage />} />

       </Route>
     </Routes>

        <ToastContainer />

     </BrowserRouter>
  )
}

export default App
