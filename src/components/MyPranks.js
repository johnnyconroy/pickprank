import React from 'react';
import { NavbarInstance } from './NavbarInstance';
import { FacebookLogin } from './FacebookLogin';

export const MyPranks = () => (
        <div>
            <NavbarInstance />
            <p className="dummyTitle"> My Pranks </p>
            <FacebookLogin />
        </div>
    )
