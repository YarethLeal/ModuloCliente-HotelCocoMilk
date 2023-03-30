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

        public async Task<List<Pagina>> mostrarDescripcion()
        {
            return await dataPagina.mostrarDescripcion();
        }

        public async Task<List<Pagina>> mostrarImagen()
        {
            return await dataPagina.mostrarImagen();
        }

    }
}
