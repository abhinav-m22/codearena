import Navbar from '@/components/Navbar/Navbar';
import React from 'react';
import Image from 'next/image';

type AuthPageProps = {

};

const AuthPage: React.FC<AuthPageProps> = () => {

    return (
        <div className='bg-gradient-to-b from-gray-600 to-black h-screen relative'>
            <div className='max-w-7xl mx-auto'>
                <Navbar />
            </div>
            <div className='flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none'>
                <Image src='/hero.png' alt='Hero img' width={700} height={700} />
            </div>
        </div>
    )

}
export default AuthPage;