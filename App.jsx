import React, { useState } from 'react';
import ModalForm from './components/ModalForm';
import Navegacion from './components/Navegacion';
import toast, { Toaster } from "react-hot-toast";
import styled from 'styled-components';
import Contactos from './components/Contactos';
import Papa from 'papaparse';

export default function App() {
  const [isModal, setIsModal] = useState(false);
  const [contactos, setContactos] = useState([]);
  const handelModal = () => setIsModal(!isModal);

  const handelsubmit = (valor) => {
    toast("Contacto guardado", {
      duration: 2000,
      position: "top-center",
    });
    setContactos([...contactos, valor]);
  };

  const handelEliminar = (id) => {
    const nuevoContactos = contactos.filter((contacto) => contacto.id !== id);
    toast("Contacto Eliminado", {
      duration: 2000,
      position: "top-center",
    });
    setContactos(nuevoContactos);
  };

  const handleImportContacts = (event) => {
    const file = event.target.files[0];
    if (file) {
      Papa.parse(file, {
        header: true,
        complete: (results) => {
          const importedContacts = results.data.map((contacto, index) => ({
            id: index + 1,
            nombre: contacto.nombre,
            telefono: contacto.telefono,
          }));
          setContactos([...contactos, ...importedContacts]);
          toast("Contactos importados", {
            duration: 2000,
            position: "top-center",
          });
        },
        error: (error) => {
          toast.error("Error al importar contactos");
        },
      });
    }
  };

  const handleExportContacts = () => {
    const csv = Papa.unparse(contactos);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'contactos.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast("Contactos exportados", {
      duration: 2000,
      position: "top-center",
    });
  };

  return (
    <div>
      <Toaster />
      <Navegacion handelModal={handelModal} />
      {
        isModal && <ModalForm handelModal={handelModal} handelsubmit={handelsubmit} />
      }
      <ContainerContactos>
        <Contactos contactos={contactos} handelEliminar={handelEliminar} />
      </ContainerContactos>
      <ExportContainer>
        <button onClick={handleExportContacts}>Exportar Contactos</button>
      </ExportContainer>
    </div>
  );
}

const ContainerContactos = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ExportContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  input {
    margin-left: 10px;
  }

  button {
    margin-left: 20px;
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: #45a049;
    }
  }
`;
