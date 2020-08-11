import React from 'react';
import './PageStyle.css';

function Page({ children }) {
    return (
        <section className='page'> 
            { children }
        </section>
    )
}

export default (Page);