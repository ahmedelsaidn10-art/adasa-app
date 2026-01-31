import React from 'react'
// import dataa from '../../../data/posts.json'


export default function Card({post}) {
    return (
        <div className='col-12 col-sm-6 col-lg-4'>
            <div className="single-post-card">

                <div className="post-image">
                    <img src={post.image} alt="post" />
                    <span className="post-badge">{post.category}</span>
                </div>

                <div className="post-content">

                    <div className="post-meta">
                        <span>⏱   {post.readTime}</span>
                        <span> {post.date}  </span>
                    </div>

                    <h3 className="post-title">
                        {post.title}
                    </h3>

                    <p className="post-desc">
                       {post.excerpt}
                    </p>

                </div>

                <div className="post-footer">

                    <div className="author">
                        <img src={post.author.avatar} alt="author" />
                        <div>
                            <div className="author-name">{post.author.name}</div>
                            <div className="author-job">{post.author.role}</div>
                        </div>
                    </div>

                    <button className="arrow-btn">
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>


                </div>

            </div>
        </div>
    )
}
