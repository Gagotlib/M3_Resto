import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from "./views/Home/Home"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import MyAppointments from "./views/MyAppointments/MyAppointments"
import Login from "./views/Login/Login"
import Register from "./views/Register/Register"
import Contact from "./views/Contact/Contact"
import NuestraCarta from "./views/NuestraCarta/NuestraCarta"
import ErrorPage from "./views/ErrorPage/ErrorPage"
import MyProfile from "./views/MyProfile/MyProfile"

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/myappointments' element={<MyAppointments />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/nuestracarta' element={<NuestraCarta />} />
        <Route path='/profile' element={<MyProfile />} />
        <Route path='/*' element={<ErrorPage />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
