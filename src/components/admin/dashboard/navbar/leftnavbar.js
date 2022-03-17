import { FaSearch  } from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'
import {IoIosArrowForward} from 'react-icons/io'
import './leftnavbar.css'
import {Link} from "react-router-dom"
const Leftnav = () =>{
    return(
        <>
        <div className='nav-item'>
        <nav class="navbar navbar-dark bg-dark d-flex ">
           <div class="container-fluid ">
              <span class="navbar-brand fw-bold text-uppercase ">Admin Panel</span>
              <form class="d-flex ">
                <input class="form-control me-2" type="search" placeholder="Search"  aria-label="Search"/>
                <button class="btn btn-primary" type="submit"><FaSearch /></button>
                <button class="btn btn-link btn-lg" type="submit"><CgProfile /></button>
              </form>
           </div>
        </nav>
        </div>
         <div className='left-nav-bar'>
           <ul className='left-nav-bar-items'>
             <li className='left-nav-bar-item'><Link to="/dashboard">Dashboard</Link><IoIosArrowForward/></li>
             <li className='left-nav-bar-item'><Link to="/users">Users</Link><IoIosArrowForward/></li>
             <li className='left-nav-bar-item'><Link to="/table">Table</Link><IoIosArrowForward/></li>
             <li className='left-nav-bar-item'><Link to="/request">Request</Link><IoIosArrowForward/></li>
             <li className='left-nav-bar-item'>LogOut<IoIosArrowForward/></li>
           </ul>

         </div>



        </>
    )
}
export default Leftnav;