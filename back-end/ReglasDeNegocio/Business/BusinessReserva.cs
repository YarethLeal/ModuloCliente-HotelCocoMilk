using AccesoADatos.Data;
using Entidades.Entities;

namespace ReglasDeNegocio.Business
{
    public class BusinessReserva
    {
        private DataReserva dataReserva;

        public BusinessReserva()
        {
            dataReserva = new DataReserva();
        }
        
        public async Task<ReservacionDisponible> listarHabitacionReserva(DateTime fechaLlegada, DateTime fechaSalida, string tipoHabitacion)
        {
            return await dataReserva.listarHabitacionReserva(fechaLlegada, fechaSalida, tipoHabitacion);
        }
    }
}
