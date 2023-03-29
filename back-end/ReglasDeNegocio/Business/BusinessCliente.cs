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

        public async Task<List<Cliente>> GetAllUser()
        {
            return await dataCliente.GetAllUser();
        }

    }
}
