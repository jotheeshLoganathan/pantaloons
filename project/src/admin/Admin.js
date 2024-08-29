import React from 'react'
import './admin.css'
 import { Link } from "react-router-dom";
 import { FcBusinessman } from "react-icons/fc";
 import { FcBusinesswoman } from "react-icons/fc";
 import { LuBaby } from "react-icons/lu";
 import { LuLayoutDashboard } from "react-icons/lu";


const Admin = () => {
  return (
    <div>
        <div className='Admin_menu admin-sm'>
            <div className='admin pt-5 fs-4'>
                <ul>
                    <li className='text-uppercase'><Link  className='dash'to='/'><LuLayoutDashboard />  Dashbord</Link></li>
                    <li className='text-uppercase'><Link className='lin active'to="/Admin/Mensadmin"><FcBusinessman /> Mens</Link></li>
                    <li className='text-uppercase'><Link className='min' to='/Admin/Womenadmin'><FcBusinesswoman /> Womens</Link></li>
                    <li className='text-uppercase'><Link className='kid' to='/Admin/Kidsadmin'>
                    <LuBaby /> Kids</Link></li>
                </ul>            
            </div>
        </div>
    </div>
  )
}

export default Admin