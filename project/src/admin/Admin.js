import React from 'react'
import './admin.css'
 import { Link } from "react-router-dom";
const Admin = () => {
  return (
    <div>
        <div className='Admin_menu admin-sm'>
            <div className='admin pt-5 fs-4'>
                <ul>
                    <li className='text-uppercase'><Link  className='dash'to='/'>Dashbord</Link></li>
                    <li className='text-uppercase'><Link className='lin active'to="/Admin/Mensadmin">Mens</Link></li>
                    <li className='text-uppercase'><Link className='min' to='/Admin/Womenadmin'>Womens</Link></li>
                    <li className='text-uppercase'><Link className='kid' to='/Admin/Kidsadmin'>Kids</Link></li>
                </ul>            
            </div>
        </div>
    </div>
  )
}

export default Admin