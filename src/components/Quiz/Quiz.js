import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';


const Quiz = () => {
    const alldata = useLoaderData();
    const{data} = alldata;
    const {questions,name} = data;
    
    
    
    
    return (
        <div>
            <div className='felx justify-center mt-5'>
                <h1 className='text-2xl font-bold'>Question About {name}</h1> 
                </div>
            {
                questions.map((ques,inx) => <Questions key={ques.id} ques={ques} inx={inx}  ></Questions>)
            }
            
        </div>
    );
};

export default Quiz;