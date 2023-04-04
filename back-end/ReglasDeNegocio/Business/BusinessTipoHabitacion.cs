using AccesoADatos.Data;
using Entidades.Entities;

namespace ReglasDeNegocio.Business
{
    public class BusinessTipoHabitacion
    {
        private DataTipoHabitacion dataTipoHabitacion;

        public BusinessTipoHabitacion()
        {
            dataTipoHabitacion = new DataTipoHabitacion();
        }

        public async Task<List<TipoHabitacion>> listarTipoHabitacion()
        {
            return await dataTipoHabitacion.listarTipoHabitacion();
        }

        public async Task<string> obtenerTipoDeCambioXML()
        {
            return await dataTipoHabitacion.obtenerTipoDeCambioXML();
        }
    }
}
