import Navbar from '@/components/Navbar/Navbar';
import React from 'react';
import Image from 'next/image';
import Auth from '@/components/Modals/Auth';
import { AuthModalState } from '@/atoms/AuthModalAtom';
import { useRecoilValue } from 'recoil';

type AuthPageProps = {

};

const AuthPage: React.FC<AuthPageProps> = () => {

    const authModal = useRecoilValue(AuthModalState)

    return (
        <div className='bg-gradient-to-b from-gray-600 to-black h-screen relative'>
            <div className='max-w-7xl mx-auto'>
                <Navbar />
            </div>
            <div className='flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none'>
                <Image src='/hero.png' alt='Hero img' width={700} height={700} />
            </div>
            { authModal.isOpen && <Auth /> }
        </div>
    )

}
export default AuthPage;