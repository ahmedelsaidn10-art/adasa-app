import React from 'react'
import img1 from '../../assets/logo-GdqARQRt.png'
import data from '../../data/posts.json'
import { Link, NavLink } from 'react-router-dom';


export default function Navbar() {
  return (
    <div className='container-fluid px-5 py-3 bg-dark161 position-sticky top-0 z-3'>

      <nav className='px-2 d-flex align-items-center justify-content-between'>
        <div className='d-flex gap-2 align-items-center '>
          <div className='img_logo mt-2'>
            <img className='w-100' src={img1} alt="logo_app" />
          </div>

          <div className='d-flex flex-column '>
            <span className='text-white fs-5 ' >{data.siteInfo.name}</span>

            <span className='text-warning fs-7 ' >{data.siteInfo.tagline}</span>
          </div>
        </div>

        <div className='d-none d-lg-block'>
          <div className='border rounded-pill ' >

            <ul className='d-flex gap-3 mb-2    pt-2 px-2   list-unstyled'>
              <li><NavLink className='text-decoration-none text-secondary badge' to="/Home"> الرئيسية </NavLink></li>
              <li><NavLink className='text-decoration-none text-secondary badge' to="/Blog"> المدونة </NavLink></li>
              <li><NavLink className='text-decoration-none text-secondary badge' to="/About"> من نحن </NavLink> </li>
            </ul>

          </div>
        </div>

        <button
          className="btn btn-outline-warning d-lg-none"
          data-bs-toggle="offcanvas"
          data-bs-target="#mobileMenu"
        >
          <i className="fa-solid fa-bars"></i>
        </button>

        <div className='d-none d-lg-flex gap-4 align-items-center'>
          <span>
            <i className="my_icon_nav fa-solid fa-magnifying-glass text-secondary"></i>
          </span>

          <span className='bg-orange py-2 px-3 rounded-pill'>
            <Link className='text-decoration-none text-white ms-1' to="/Blog">
              ابدأ القراءة
            </Link>
          </span>
        </div>

      </nav>

      <div className="offcanvas offcanvas-end bg-black text-white" id="mobileMenu">
        <div className="offcanvas-header d-flex justify-content-between">
          <div>
            <h5 className="offcanvas-title">القائمة</h5>

          </div>
          <div>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>

          </div>
        </div>

        <div className="offcanvas-body">
          <ul className="list-unstyled d-flex flex-column gap-3">
            <li><NavLink className="text-white text-decoration-none" to="/Home">الرئيسية</NavLink></li>
            <li><NavLink className="text-white text-decoration-none" to="/Blog">المدونة</NavLink></li>
            <li><NavLink className="text-white text-decoration-none" to="/About">من نحن</NavLink></li>
          </ul>

          <Link to="/Blog" className="btn btn-warning mt-4 w-100">
            ابدأ القراءة
          </Link>
        </div>
      </div>





    </div >
  )
}
