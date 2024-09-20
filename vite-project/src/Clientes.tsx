import React, { useState, useEffect } from 'react';
import { getClientes, createCliente } from './api';

function Clientes() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    fetchClientes();
  }, []);

  const fetchClientes = async () => {
    const response = await getClientes();
    setClientes(response.data);
  };

  const adicionarCliente = async (cliente) => {
    await createCliente(cliente);
    fetchClientes();
  };

  return (
    <div>
      <h1>Lista de Clientes</h1>
      <ul>
        {clientes.map((cliente) => (
          <li key={cliente.id}>{cliente.nome} - {cliente.email}</li>
        ))}
      </ul>
      {/* Formulário para adicionar cliente */}
    </div>
  );
}

export default Clientes;
