import React from 'react'
import styled from "styled-components";
import { calender, comment, dollar,trash } from '../../utils/icons';
import Button from '../Button/Button';
function IncomeItem({
    id,
    title,
    amount,
    date,
    category,
    description,
    deleteItem,
    indicatorColor,
    type
}) {
  return (
    <IncomeItemStyled>
        <div className='icon'>
            <h5>{title}</h5>
             <div className='inner-content'>
                <div className='text' >
                    <p>{dollar}45</p>
                    <p>{calender} {date} </p>
                    <p>
                        {comment} 
                        {description}
                    </p>
                </div>
                <div className='btn-con'>
                    <Button 
                        icon={trash}
                        bPad={'1rem'}
                        bRad={'50%'}
                        bg={'var(--primary-color'}
                        color={'#fff'}
                        iColor={'#fff'}
                        hColor={'var(--color-green)'}  />
                </div>                
        
            
        </div>
        </div>
       
    </IncomeItemStyled>
  )
}
const IncomeItemStyled = styled.div`
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    color: #222260;
    `
;
export default IncomeItem