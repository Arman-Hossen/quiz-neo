import React from 'react';
import bgImage from '../image/home.png';
import './Header.css';

const Header = () => {
    return (
        <div className=' grid sm:grid-cols-1 lg:grid-cols-2 justify-center'>
            <div className='grid grid-cols-1 justify-center items-center bg-black'>
                <h1 className='text-white text-5xl font-mono'>We come to QuizNeo</h1>
                <p className='text-white font-mono text-xl sm:ml-1 sm:mb-0 lg:ml-10 lg:mb-5 '> Do you want to create and take quizzes? With the help of QuizNeo, this becomes all very simple. With this Website you can create, take and share quizzes.
                     </p>

            </div>
            <div>
                <img src={bgImage} alt="" />
            </div>
            
            
        </div>
    );
};

export default Header;