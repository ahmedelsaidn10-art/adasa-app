import React from 'react'
import dataa from '../../data/posts.json'

import { useState } from 'react'
import Card from './../navbar/card/Card';




export default function Blog() {

  const [filter, setFilter] = useState("جميع المقالات")

  const filterCards = filter === "جميع المقالات" ? dataa.posts : dataa.posts.filter(function (card) {

    return card.category === filter

  })



  return (
    <div>

      <div className='home border border-black'>
        <div className='text-center mt-5 py-5'>
          <span className='badge text-warning py-2 px-3 rounded-pill bg-orange-soft border border-warning' > مدونتنا</span>

          <h1 className='text-white  my_fs-1'>
            استكشف   <span className='text-warning' >مقالاتنا</span>
          </h1>
          <p className='text-secondary  fs-5'>اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث</p>
        </div>
      </div>

      <div className=' container-fluid position-sticky z-2 my-top  border-bottom border-secondary px-5 bg-black '>
        <div className='px-2 '>

          

          <div className='pt-3'>
            <button onClick={function () { setFilter("جميع المقالات") }} className={`btn btn-outline-warning ms-2 mb-3 ${filter === "جميع المقالات" ? "active-filter" : ""} `} >جميع المقالات</button>
            <button onClick={function () { setFilter("إضاءة") }} className={`btn btn-outline-warning ms-2 mb-3 ${filter === "إضاءة" ? "active-filter" : ""} `} >إضاءة</button>
            <button onClick={function () { setFilter("بورتريه") }} className={`btn btn-outline-warning ms-2 mb-3 ${filter === "بورتريه" ? "active-filter" : ""} `} > بورتريه   </button>
            <button onClick={function () { setFilter("مناظر طبيعية") }} className={`btn btn-outline-warning ms-2 mb-3 ${filter === "مناظر طبيعية" ? "active-filter" : ""} `} > مناظر طبيعية   </button>
            <button onClick={function () { setFilter("تقنيات") }} className={`btn btn-outline-warning ms-2 mb-3 ${filter === "تقنيات" ? "active-filter" : ""} `} >  تقنيات   </button>
            <button onClick={function () { setFilter("معدات") }} className={`btn btn-outline-warning ms-2 mb-3 ${filter === "معدات" ? "active-filter" : ""} `} > معدات   </button>
          </div>

        </div>
      </div>

      <div className='container-fluid px-5 bg-black'>

        <p className='text-secondary mb-0 pt-3' >

          عرض <span className='text-white'>{filterCards.length}</span> مقالات

        </p>

        <div className='row g-4 py-4 mx-2' >
          {
            filterCards.map(function (card) {
              return < Card key={card.id} post={card} />
            })
          }

        </div>

      </div>
    </div>
  )
}
