import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
// import { QUERY_CHECKOUT } from '../../utils/queries';
// import { idbPromise } from '../../utils/helpers';
// import CartItem from '../CartItem';
// import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';
// import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import './style.css';

const Testpage = () => {
 
  return (
    <div className="cart">
Hellosa
    </div>
  );
};
export default Testpage;