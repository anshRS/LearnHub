import React from 'react'

const BlogCard = ({ image, title, subtitle, author }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden" >
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{subtitle}</p>
            </div>
            <div className="py-4">
                <p className="text-gray-600 text-sm">Author: {author}</p>
            </div>
        </div >
    )
}

export default BlogCard
