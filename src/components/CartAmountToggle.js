import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa';
import styled from 'styled-components';

const CartAmountToggle = ({amount,setDecrease,setIncrease}) => {
  return (
    <Wrapper>
    <div className='cart-button'>
      <div className="amount-toggle">
        <button onClick={()=>setDecrease()}>
             <FaMinus className='icon border-0'/>
            </button>
            <div className='amount-style'>{amount}</div>

            <button onClick={()=>setIncrease()}>
                <FaPlus className='icon'/>
            </button>
       
      </div>
    </div>
    </Wrapper>
  )
};
const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;

export default CartAmountToggle
