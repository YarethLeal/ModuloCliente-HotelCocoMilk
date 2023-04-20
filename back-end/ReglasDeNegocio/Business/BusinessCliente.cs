using AccesoADatos.Data;
using Entidades.Entities;


namespace ReglasDeNegocio.Business
{
    public class BusinessCliente
    {
        private DataCliente dataCliente;

        public BusinessCliente()
        {
            dataCliente = new DataCliente();
        }

        public async Task<List<Cliente>> listarCliente()
        {
            return await dataCliente.listarCliente();
        }
        public async Task<String> registarCliente(Cliente cliente)
        {
            return await dataCliente.registarCliente(cliente);
        }
        public async Task<List<Cliente>> buscarCliente(string nombre, string apellido)
        {
            return await dataCliente.buscarCliente(nombre, apellido);
        }
        public async Task<List<Cliente>> buscarClienteId(string id)
        {
            return await dataCliente.buscarClienteId(id);
        }
    }
}