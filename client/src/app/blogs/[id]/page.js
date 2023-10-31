"use client"

import { BlogData } from '@/data';
import React from 'react'

const SingleBlogPage = ({ params }) => {
    const id = params.id
    const blog = BlogData.find((item) => item.id === id);

    return (
        <div className='w-full p-14 md:p-20 flex flex-col items-center'>
            <h1 className="text-3xl font-bold">{blog.title}</h1>
            <p className="mt-4">Author: {blog.author}</p>
            <img src={blog.image} alt={blog.title} className="my-4 w-full md:w-3/4 lg:w-1/2" />
            <p className='font-medium mb-20'>{blog.subtitle}</p>
            <div className='mt-5 px-3 md:px-24 lg:px-52'>
                {
                    blog.description.map((desc) => {
                        return (
                            <>
                                <h2 className='text-2xl font-medium'>{desc.heading}</h2>
                                <p className='mb-5'>{desc.content}</p>
                            </>

                        )
                    })
                }
            </div>
        </div>
    )
}

export default SingleBlogPage
