import React from 'react'
import { Link } from 'react-router-dom'



export default function NotFound() {
    return (
        <div className="home min-vh-100 d-flex align-items-center justify-content-center">
            <div className="text-center">
                <h1 className="display-1 fw-bold text-danger">404</h1>
                <h3 className="mb-3 text-danger">الصفحة غير موجودة</h3>
                <p className="text-white mb-4">
                    يبدو أنك دخلت رابطًا غير صحيح أو الصفحة تم حذفها
                </p>

                <Link to="/Home" className="btn btn-primary px-4 py-2">
                    الرجوع إلى الصفحة الرئيسية
                </Link>
            </div>
        </div>
    )
}



