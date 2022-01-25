import React from 'react';
import styled from 'styled-components';
import { keyframes} from 'styled-components';

export default function Button(props) {



const Animation = keyframes`
0% { color: 100px; width: 100px; }
30% { color: 400px; width: 400px; opacity: 1 }
40% { color: 405px; width: 405px; opacity: 0.3; }
100% { color: 100px; width: 100px; opacity: 0.6; }`


const Button= styled.button`
/* Adapt the colors based on primary prop */
color: white;
background: none;
font-size: 1em;
border-radius: 5px;
transition: 1s;
border: 0;
&:hover {
    color:cyan;
    padding: 20% 0%;
}
`;

  return  <div>

<Button className={props.classes}>
    {props.title}
</Button>


  </div>;
}
