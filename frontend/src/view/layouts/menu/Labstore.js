import React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

export default function LabStore() {



const Animation = keyframes`
0%, 100% { color: cyan;  }
50% { color: white; 
`


const Title = styled.h2`
color: white;
animation: ${Animation} 8s infinite;
`;

const Subtitle = styled.h6`
color:white;
text-align:center;
margin: auto;
`


  return   <div className="d-flex"><Title>LabStore</Title>  <Subtitle>.app</Subtitle></div>
}
