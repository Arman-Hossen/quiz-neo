import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';


const Quiz = () => {
    const alldata = useLoaderData();
    const{data} = alldata;
    const {questions,total,name} = data;
    
    
    
    
    return (
        <div>
            <div className='felx justify-center mt-5'>
                <h1 className='text-2xl font-bold'>Question About {name}</h1> 
                </div>
            {
                questions.map((ques,index) => <Questions key={ques.id} ques={ques} index={index}  ></Questions>)
            }
            
        </div>
    );
};

export default Quiz;