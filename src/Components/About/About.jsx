import React from 'react'
import { Link } from 'react-router-dom';


export default function About() {
    return (
        <div className=" home  min-vh-100 d-flex align-items-center justify-content-center">
            <div className="text-center">
                <h1 className="display-4 fw-bold text-warning">
                    🚧 تحت الإنشاء
                </h1>

                <p className="lead text-white mb-4">
                    صفحة "من نحن" قيد التطوير حاليًا
                    وسيتم إطلاقها قريبًا إن شاء الله
                </p>

                <Link to="/Home" className="btn btn-outline-warning px-4">
                    الرجوع للصفحة الرئيسية
                </Link>
            </div>
        </div>
    )
}
