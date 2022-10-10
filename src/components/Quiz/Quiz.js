import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';


const Quiz = () => {
    const alldata = useLoaderData();
    const{data} = alldata;
    const {questions} = data
    
    
    return (
        <div>
            {
                questions.map(ques => <Questions key={ques.id} ques={ques}></Questions>)
            }
            
        </div>
    );
};

export default Quiz;