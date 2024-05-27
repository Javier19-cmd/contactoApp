import React from 'react'
import styled from 'styled-components'
import Contacto from './Contacto';

export default function Contactos({contactos,handelEliminar}) {
  return (
    <ContenedorContac>
        {
          contactos.map(contacto => <Contacto key={contacto.id} contacto={contacto} handelEliminar={handelEliminar}/>)
        }
    </ContenedorContac>
  )
}

const ContenedorContac = styled.div `
    width: 100vw;
    height: 70vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
    padding: 1rem 4rem;
    overflow: auto;
    ::-webkit-scrollbar{
        background-color: #3f50e7;
        width: 5px;
        color: black;
        border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb{
        border-radius: 20px;
        border: 3px solid #FFFFFF;
    }
`;