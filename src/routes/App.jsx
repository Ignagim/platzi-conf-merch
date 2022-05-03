import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Information from '../containers/Information';
import Payment from '../containers/Payment';
import Succes from '../containers/Succes';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';


const App = () => {
    const initialState = useInitialState();
    return(
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path='/' element={<Home />}/>
                        <Route path='/checkout' element={<Checkout />}/>
                        <Route path='/checkout/information' element={<Information />}/>
                        <Route path='/checkout/payment' element={<Payment />}/>
                        <Route path='/checkout/succes' element={<Succes />}/>
                        <Route path='*' element={<NotFound />}/>
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export default App;