import React from 'react'
import { Navbar } from './Components/Navbar/Navbar'
import {Routes, Route } from 'react-router-dom'
import Home from './assets/Pages/Home/Home'
import About from './assets/Pages/About/About'
import Corporatetraining from './assets/Pages/Corporatetraining/Corporatetraining'
import Technicaltraining from './assets/Pages/Technicaltraining/Technicaltraining'
import Ourservices from './assets/Pages/Ourservices/Ourservices'
import Travelservices from './assets/Pages/Travelservices/Travelservices'
import Contact from './assets/Pages/Contact/Contact'

export const App = () => {
  return (
    <div>
<Navbar />
<Routes>
  <Route path='/' element={<Home />}/>
 <Route path='/corporatetraining' element={<Corporatetraining />}/>
    <Route path='/technicaltraining' element={<Technicaltraining />}/>
         <Route path='/travelservices' element={<Travelservices />}/>
      <Route path='/ourservices' element={<Ourservices />}/>
    <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
</Routes>

    </div>
  )
}
export default App
