"use client"

import React from 'react'
import Image from 'next/image'
import SignUpImg from '../../assets/auth.png'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'

const AuthLayout = ({children}) => {
    const { isLoggedIn } = useSelector((state) => state.auth);
    const router = useRouter();

    if(isLoggedIn) {
        router.push("/");
        return;
    }

    return (
        <div className="mt-24 py-16 font-raleway">
            <div className="mx-auto flex flex-col lg:flex-row items-center lg:justify-evenly">
                <div className="lg:w-1/2 mb-4">
                    <Image src={SignUpImg} alt="Signup Image" />
                </div>

                {children}
                
            </div>
        </div>
    )
}

export default AuthLayout
