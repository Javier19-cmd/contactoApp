import React from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

export default function Contacto({ contacto, handelEliminar }) {
  return (
    <ContainerCard>
      <div className="header">
        <FaTimes className='icon' onClick={() => handelEliminar(contacto.id)} />
      </div>
      <div className="body">
        <div className="imagen">Imagen</div>
        <div className="datos">
          <span className="nombre">Nombre: {contacto.nombre}</span>
          <p className="telefono">Teléfono: +502 {contacto.telefono}</p>
        </div>
      </div>
    </ContainerCard>
  );
}

const ContainerCard = styled.div`
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  border-radius: 15px;
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;

  :hover {
    transform: scale(1.02);
  }
  
  .header {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-bottom: 1rem;
    
    .icon {
      font-size: 1.5rem;
      cursor: pointer;
      transition: color 0.3s ease-in-out;
      
      :hover {
        color: #ff4d4d;
      }
    }
  }
  
  .body {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.5rem;
    
    .imagen {
      background-color: #f0f0f0;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.2rem;
      color: #888;
    }
    
    .datos {
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: #333;
      
      .nombre {
        font-size: 1.2rem;
        font-weight: bold;
      }
      
      .telefono {
        font-size: 1rem;
        color: #555;
      }
    }
  }
`;
