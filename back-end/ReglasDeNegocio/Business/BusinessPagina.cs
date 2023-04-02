using AccesoADatos.Data;
using Entidades.Entities;

namespace ReglasDeNegocio.Business
{
    public class BusinessPagina
    {
        private DataPagina dataPagina;

        public BusinessPagina()
        {
            dataPagina = new DataPagina();
        }

        public async Task<List<Pagina>> mostrarPagina(string tipoPagina)
        {
            return await dataPagina.mostrarPagina(tipoPagina);
        }
    }
}
