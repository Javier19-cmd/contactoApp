import React from 'react'
import styled from 'styled-components'
import {FaRegPlusSquare} from 'react-icons/fa'

export default function Navegacion({handelModal}) {

  return (
    <ContainerNavegacion>
        <div className="logo">
            <span>App de Contactos</span>
        </div>

        <div className="boton">
            <button><FaRegPlusSquare onClick={handelModal} className='icon'/></button>
        </div>
    </ContainerNavegacion>
  )
}


const ContainerNavegacion = styled.div`
    background-color: #fff;
    width: 100vw;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    align-items: center;

    .logo {
        span {
            color: #6C7AF3;
        }
    }

    .boton {
        button {
            border: none;
            padding: 0.5rem 2rem;
            background-color: #3F50E7;
            border-radius: 5px;
            color: #fff;
            display: flex;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease-in-out;
            :hover{
                background-color: #6C7AF3;
            }
        }
        .icon {
            font-size: 17px;
        }
    }
`;