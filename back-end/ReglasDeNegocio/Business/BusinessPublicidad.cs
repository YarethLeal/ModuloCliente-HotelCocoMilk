using AccesoADatos.Data;
using Entidades.Entities;

namespace ReglasDeNegocio.Business
{
    public class BusinessPublicidad
    {
        private DataPublicidad dataPublicidad;

        public BusinessPublicidad()
        {
            dataPublicidad = new DataPublicidad();
        }

        public async Task<List<Publicidad>> mostrarImagenPublicidad()
        {
            return await dataPublicidad.mostrarImagenPublicidad();
        }

        public async Task<List<Publicidad>> GetAllPublicity()
        {
            return await dataPublicidad.GetAllPublicity();
        }

    }
}
