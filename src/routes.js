import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import MainPage from './components/MainPage';
import HeroPage from './components/HeroPage';


const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/'>
                <Route index element={<MainPage />}/>
                <Route path="/hero/:id" element={<HeroPage />}/>
            </Route>
        </Routes>
    </BrowserRouter>
)

export default Router;