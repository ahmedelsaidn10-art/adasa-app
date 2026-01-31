import React from 'react'
import { Link } from 'react-router-dom';



export default function Footer() {
    return (
        <div className='container-fluid px-5 bg-black border-top border-secondary' >
            <div className='px-2 pt-5 pb-5' >
                <div className='row g-5'>
                    <div className='col-12 col-sm-6 col-lg-4'>
                        <div>

                            <span className=' badge fs-5 text-white p-3 rounded-3 bg-orange '>ع</span>

                            <span className='me-3 text-white fs-5'>عدسة</span>

                            <p className='text-secondary fs-7 mt-3' >مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.</p>

                            <div className="d-flex gap-2 mt-4">
                                <a href="https://topper.com" target="_blank" className=" social-link " >
                                    <i className="fa-brands fa-x-twitter"></i>
                                </a>

                                <a href="https://github.com" target="_blank" className=" social-link" >
                                    <i className="fab fa-github"></i>
                                </a>

                                <a href="https://linkedin.com" target="_blank" className=" social-link" >
                                    <i className="fab fa-linkedin-in"></i>
                                </a>

                                <a href="https://youtube.com" target="_blank" className="  social-link" >
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </div>
                        </div>




                    </div>
                    <div className='col-12 col-sm-6 col-lg-4'>
                        <div>

                            <h3 className='text-white h6 me-5 section-title'>استكشف</h3>

                            <ul className='list-unstyled nav-links'>
                                <Link className='text-decoration-none' to="/Home">
                                    <li className='text-secondary my-2'>الرئيسية</li>
                                </Link>
                                <Link className='text-decoration-none' to="/Blog">
                                    <li className='text-secondary my-2'>المدونة</li>
                                </Link>
                                <Link className='text-decoration-none' to="/About">
                                    <li className='text-secondary my-2'>من نحن</li>
                                </Link>
                            </ul>
                        </div>
                    </div>

                    <div className='col-12 col-sm-6 col-lg-4'>
                        <div>

                        <h3 className='text-white h6 me-5 section-title'>التصنيفات</h3>

                        <ul className='list-unstyled nav-links'>
                             <a className='text-decoration-none' href="">
                                <li className='text-secondary my-2'>إضاءة</li>
                            </a>
                            <a className='text-decoration-none' href="">
                                <li className='text-secondary my-2'>بورتريه</li>
                            </a>
                            <a className='text-decoration-none' href="">
                                <li className='text-secondary my-2'>مناظر طبيعية</li>
                            </a>
                            <a className='text-decoration-none' href="">
                                <li className='text-secondary my-2'>تقنيات</li>
                            </a>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
