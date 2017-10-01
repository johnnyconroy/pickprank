import React from 'react';
import { NavbarInstance } from './NavbarInstance';
import { FacebookLogin } from './FacebookLogin';

export const Home = () => (
        <div>
            <NavbarInstance />
            <p className="dummyTitle"> Home </p>
            <FacebookLogin />
        </div>
    )
