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
        public async Task<List<Reserva>> listarReserva()
        {
            return await dataReserva.listarReserva();
        }

            public async Task<ReservacionDisponible> listarHabitacionReserva(DateTime fechaLlegada, DateTime fechaSalida, string tipoHabitacion)
        {
            return await dataReserva.listarHabitacionReserva(fechaLlegada, fechaSalida, tipoHabitacion);
        }

        public async Task<String> registarReserva(Reserva reserva)
        {
            return await dataReserva.registarReserva(reserva);
        }
    }
}
