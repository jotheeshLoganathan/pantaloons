import React from 'react'
import { BrowserRouter, Form, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Navbar from './companent/Navbar'
import Footer from './companent/Footer'
import Women from './page/Women'
import Mens from './page/Mens'
import Kids from './page/Kids'
import Cartpage from './companent/Cartpage'
import Admin from './admin/Admin'
import Mensadmin from './admin/Mensadmin'
import Editmen from './admin/Editmen'
import Menaddcort from './admin/Menaddcort'
import Womenadmin from './admin/Womenadmin'
import Womenedit from './admin/Womenedit'
import Womenaddcart from './admin/Womenaddcart'
import Kidssadmin from './admin/Kidsadmin'
import Kidsaddcart from './admin/Kidsaddcart'
import Kidsedit from './admin/Kidsedit'
import Register from './companent/Form'
import LoginForm from './companent/Login'

const App =() =>{
    return(
        <div>
            <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path ='/' element={<Home/>}/>
                <Route path ='Women' element={<Women/>}/>
                <Route path ='/Mens' element={<Mens/>}/>
                <Route path ='/Kids' element={<Kids/>}/>
                <Route path='/cart' element={<Cartpage/>}/>
                <Route path='/Admin' element={<Admin/>}/>
                <Route path='/Register' element={<Register/>}/>
                <Route path='/LoginForm' element={<LoginForm/>}/>

                <Route 
                path='/Admin/Mensadmin' 
                element={<Mensadmin/>}
                />
                <Route
                path='/Admin/Men/Editmen/:id' 
                element={<Editmen/>} 
                loader = {({ params }) => fetch(`http://localhost:5000/men/${params.id}`)}
                />
                <Route path='/Admin/Men/Menaddcart' element={<Menaddcort/>}/>
                <Route path='/Admin/Womenadmin/' element={<Womenadmin/>}/>
                <Route path='/Admin/Womenedit/:id'
                element={<Womenedit/>} 
                loader = {({ params }) => fetch(`http://localhost:5000/women/${params.id}`)}/>
                <Route path='/Admin/Womenaddcart' element={<Womenaddcart/>}/>
                <Route path='/Admin/Kidsadmin' element={<Kidssadmin/>}/>
                <Route path='/Admin/Kidsaddcart' element={<Kidsaddcart/>}/>
                <Route 
                path='/Admin/Kidsedit/:id' 
                element={<Kidsedit/>}
                loader = {({ params }) => fetch(`http://localhost:5000/kids/${params.id}`)} />



            </Routes>
            <Footer/>
            </BrowserRouter>
        </div>
    )

}
export default App;