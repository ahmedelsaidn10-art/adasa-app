import React from 'react'
import dataa from '../../../data/posts.json'
import Card from './../card/Card';
import { useState } from "react";
import { Link } from 'react-router-dom';



export default function Home() {
    const [email, setEmail] = useState("");
    return (
        <div>
            <div className='home border border-black ' >

                <div className='text-center mt-5 py-5'>
                    <span className='badge text-warning py-2 px-3 rounded-pill bg-orange-soft border border-warning' > مرحباً بك في عدسة</span>

                    <h1 className='text-white mt-4 my_fs-1'>
                        اكتشف    <span className='text-warning' >فن</span>
                        <br />
                        التصوير  الفوتوغرافي

                    </h1>

                    <p className='text-secondary m-0 mt-4 fs-5'>انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في  </p>
                    <p className='text-secondary fs-5' >التصوير</p>

                    <div className='mt-5 d-flex gap-4 justify-content-center'>
                        <span className='cta-btn py-3 px-4 bg-orange rounded-pill d-inline-block'>
                            <Link className='text-decoration-none text-white' to="/Blog">   استكشف المقالات <i className="fa-solid fa-arrow-left-long me-2 arrow-icon"></i>   </Link>
                        </span>

                        <span className='cta-btn py-3 px-4 border border-warning rounded-pill d-inline-block'>
                            <Link className='text-decoration-none text-white' to="/About">   اعرف المزيد<i className="fa-solid fa-arrow-left-long me-2 arrow-icon"></i>   </Link>
                        </span>
                    </div>
                    <div className='mt-5 d-flex flex-wrap justify-content-center gap-4'>
                        <div className='hover-scale py-3 px-5 rounded-4 border bg-dark-transparent d-inline-block'>
                            <i className="fa-solid fa-newspaper text-orange fs-4"></i>
                            <p className='fs-4 text-warning mb-0 fw-bold'>+50</p>
                            <p className='text-secondary mb-0'>مقالة</p>
                        </div>
                        <div className='hover-scale py-3 px-4 rounded-4 border bg-dark-transparent d-inline-block'>
                            <i className="fa-solid fa-users text-orange fs-4"></i>
                            <p className='fs-4 text-warning mb-0 fw-bold'>+10الف</p>
                            <p className='text-secondary mb-0'>قارئ</p>
                        </div>
                        <div className='hover-scale py-3 px-5 rounded-4 border bg-dark-transparent d-inline-block'>
                            <i className="fa-solid fa-folder-open  text-orange fs-4"></i>
                            <p className='fs-4 text-warning mb-0 fw-bold'>4</p>
                            <p className='text-secondary mb-0'>تصنيفات</p>
                        </div>
                        <div className='hover-scale py-3 px-5 rounded-4 border bg-dark-transparent d-inline-block'>
                            <i className="fa-solid fa-pen-nib text-orange fs-4"></i>
                            <p className='fs-4 text-warning mb-0 fw-bold'>6</p>
                            <p className='text-secondary mb-0'>كاتب</p>
                        </div>
                    </div>

                </div>

            </div>

            <div className='container-fluid pb-3 px-5 bg-black' >
                <div className='px-2 py-5'>
                    <span className=' badge text-warning py-2 px-4 rounded-pill bg-orange-soft border border-warning'>
                        مميز
                    </span>

                    <h2 className='mt-4 text-white my_fs-2'>
                        مقالات مختارة
                    </h2>

                    <div className='d-flex flex-column flex-md-row 
                      align-items-start align-items-md-end 
                       justify-content-between gap-3'>

                        <p className='text-secondary fs-5 mb-0 text-center text-md-start'>
                            محتوى منتقى لبدء رحلة تعلمك
                        </p>

                        <span className='cta-btn py-2 px-3 bg-orange rounded-4 d-inline-block'>
                            <Link className='text-decoration-none text-white' to="/Blog">
                                عرض الكل
                                <i className="fa-solid fa-arrow-left-long me-2 arrow-icon"></i>
                            </Link>
                        </span>

                    </div>



                    <div>



                        {dataa.posts.map(function (card) {
                            if (card.id <= 3) {
                                return <div key={card.id} className="featured-card d-flex flex-column position-relative flex-lg-row overflow-hidden my-4">

                                    <span className="badge bg-orange position-absolute top-0 end-0 mt-3 me-3 z-2 rounded-pill px-3 py-2">
                                        ⭐ مميز
                                    </span>

                                    <div className="card-image">
                                        <img src={card.image} alt="article" />
                                    </div>

                                    <div className="card-content p-4 p-lg-5 text-white">

                                        <div className="d-flex gap-3 align-items-center mb-4">

                                            <span className=' badge text-warning py-2 px-3 rounded-pill bg-orange-soft border border-warning'>
                                                {card.tags[0]}
                                            </span>

                                            <span className="text-secondary small">
                                                ⏱ {card.readTime}
                                            </span>
                                        </div>

                                        <h2 className="fw-bold mb-3">
                                            {card.title}
                                        </h2>

                                        <p className="text-secondary fs-6 lh-lg mb-4">
                                            {card.excerpt}
                                        </p>

                                        <div className="d-flex justify-content-between align-items-center mt-auto">

                                            <div className="d-flex align-items-center gap-2">
                                                <img
                                                    src={card.author.avatar}
                                                    className="rounded-circle img_logo"
                                                    alt="author"
                                                />
                                                <div className="small">
                                                    <div className="fw-bold">{card.author.name}</div>
                                                    <div className="text-secondary">{card.date}</div>
                                                </div>
                                            </div>
                                            <a href="#" className="read-more text-orange fw-bold text-decoration-none">
                                                اقرأ المقال  <i className="fa-solid fa-arrow-left-long me-2 arrow-icon"></i>
                                            </a>
                                        </div>

                                    </div>



                                </div>
                            }

                        })}


                    </div>
                </div>



            </div>

            <div className='container-fluid px-5 bg-black-solid'>
                <div className='px-2 py-5'>

                    <div className='text-center pt-5'>
                        <span className=' badge text-warning py-2 px-3 rounded-pill bg-orange-soft border border-warning' >   التصنيفات</span>

                        <h2 className='text-white my-2 my_fs-2'> استكشف حسب الموضوع</h2>

                        <p className='text-secondary fs-5'>اعثر على محتوى مصمم حسب اهتماماتك</p>

                    </div>

                    <div className='row g-4 mt-3'>


                        <div className="col-12 col-sm-6 col-md-3">
                            <div className="category-card rounded-4 border bg-dark-solid p-3">

                                <div className="icon-box p-2 rounded-3 border border-warning d-inline-block bg-orange-transparent">
                                    <i className="fa-solid fa-sun"></i>
                                </div>

                                <h3 className=" text-white mt-3 h5">
                                    {dataa.categories[0].name}
                                </h3>

                                <p className="mb-0 text-secondary">
                                    {dataa.categories[0].count} مقاله
                                </p>

                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3">
                            <div className="category-card rounded-4 border bg-dark-solid p-3">

                                <div className="icon-box p-2 rounded-3 border border-warning d-inline-block bg-orange-transparent">
                                    <i className="fa-solid fa-sun"></i>
                                </div>

                                <h3 className=" text-white mt-3 h5">
                                    {dataa.categories[1].name}
                                </h3>

                                <p className="mb-0 text-secondary">
                                    {dataa.categories[1].count} مقاله
                                </p>

                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3">
                            <div className="category-card rounded-4 border bg-dark-solid p-3">

                                <div className="icon-box p-2 rounded-3 border border-warning d-inline-block bg-orange-transparent">
                                    <i className="fa-solid fa-sun"></i>
                                </div>

                                <h3 className=" text-white mt-3 h5">
                                    {dataa.categories[2].name}
                                </h3>

                                <p className="mb-0 text-secondary">
                                    {dataa.categories[2].count} مقاله
                                </p>

                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3">
                            <div className="category-card rounded-4 border bg-dark-solid p-3">

                                <div className="icon-box p-2 rounded-3 border border-warning d-inline-block bg-orange-transparent">
                                    <i className="fa-solid fa-sun"></i>
                                </div>

                                <h3 className=" text-white mt-3 h5">
                                    {dataa.categories[3].name}
                                </h3>

                                <p className="mb-0 text-secondary">
                                    {dataa.categories[3].count} مقاله
                                </p>

                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3">
                            <div className="category-card rounded-4 border bg-dark-solid p-3">

                                <div className="icon-box p-2 rounded-3 border border-warning d-inline-block bg-orange-transparent">
                                    <i className="fa-solid fa-sun"></i>
                                </div>

                                <h3 className=" text-white mt-3 h5">
                                    {dataa.categories[4].name}
                                </h3>

                                <p className="mb-0 text-secondary">
                                    {dataa.categories[4].count} مقاله
                                </p>

                            </div>
                        </div>


                    </div>

                </div>
            </div>

            <div className='container-fluid px-5 bg-black'>
                <div className='px-2 py-5' >
                    <span className=' badge text-warning py-2 px-4 rounded-pill bg-orange-soft border border-warning'>

                        الأحدث
                    </span>

                    <h2 className='mt-4 text-white my_fs-2'>
                        أحدث المقالات
                    </h2>

                    <div className='d-flex flex-column flex-md-row 
                      align-items-start align-items-md-end 
                       justify-content-between gap-3'>

                        <p className='text-secondary fs-5 mb-0 text-center text-md-start'>
                            محتوى جديد طازج من المطبعة
                        </p>

                        <span className='cta-btn py-2 px-3 bg-orange rounded-4 d-inline-block'>
                            <Link className='text-decoration-none text-white' to="/Blog">
                                عرض الكل
                                <i className="fa-solid fa-arrow-left-long me-2 arrow-icon"></i>
                            </Link>
                        </span>

                    </div>

                    <div className='row g-4 my-4' >

                        {dataa.posts.map(function (card) {

                            if (card.id >= 4 && card.id <= 6) {
                                return < Card  key={card.id} post={card} />

                            }


                        })}


                    </div>

                </div>

            </div>

            <div className='container-fluid px-3 px-md-5 bg-black'>
                <div className='d-flex justify-content-center py-5 text-center'>
                    <div className='border p-4 p-md-5 rounded-5 bg-black-solid w-100' style={{ maxWidth: '700px' }}>

                        <div className='mb-4'>
                            <div className='p-3 rounded-4 bg-orange d-inline-block'>
                                <i className="fa-regular fa-envelope text-white fs-4"></i>
                            </div>
                        </div>

                        <h2 className='text-white mt-3 fs-5 fs-md-4'>
                            اشترك في <span className='text-orange'>نشرتنا الإخباريه</span>
                        </h2>

                        <p className='text-secondary mt-3 fs-6 fs-md-5'>
                            احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني
                        </p>

                        <div className='d-flex flex-column flex-sm-row gap-3 mt-3 me-5'>
                            <input
                                type="email"
                                className="form-control dark-input flex-grow-1"
                                placeholder="name@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <a
                                className='cta-btn py-3 px-4 bg-orange rounded-4 text-white text-decoration-none text-center'
                                href=""
                            >
                                اشترك الآن
                            </a>
                        </div>

                    </div>
                </div>
            </div>



        </div>
    )
}
