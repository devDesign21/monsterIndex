import React from 'react'
import './searchBoxStyle.css'


export const SearchBox = ({ placeholder, handleChange }) => (
    <input className = 'search'
     type='search'
     placeholder = {placeholder} 
     onChange = {handleChange}
    />
);