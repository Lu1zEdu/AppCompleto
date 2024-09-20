import axios from 'axios';

const API_URL = 'http://localhost:8080/api/clientes';

export const getClientes = async () => {
  return await axios.get(API_URL);
};

export const createCliente = async (cliente: any) => {
  return await axios.post(API_URL, cliente);
};
