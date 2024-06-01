import styled from 'styled-components';
import React from 'react';
import ReactDOM from 'react-dom';

const Button = styled.button`
    /* Adapt the colors based on primary prop */
    background: ${props => props.$primary ? "#BF4F74" : "white"};
    color: ${props => props.$primary ? "white" : "#BF4F74"};

    font-size: 1em;
    margin: 1em;
    padding: 0.5em 2em;
    border: 2px solid #BF4F74;
    border-radius: 3px;
`;

  

export default Button;