import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget } = useContext(AppContext);
    return (
      
        <div className='alert alert-secondary'>
            <span>Budget: £<input
        required='required'
        type='number'
        id='cost'
        value={budget}
        style={{ marginLeft: '2rem' , size: 10}}
        onChange={(event) => {            
            var cost  =  parseInt(event.target.value);
            if(cost > 20000){
                alert('Cannot exceed £20.000')
            }
        }}>
        </input></span>
        </div>
    );
};
export default Budget;