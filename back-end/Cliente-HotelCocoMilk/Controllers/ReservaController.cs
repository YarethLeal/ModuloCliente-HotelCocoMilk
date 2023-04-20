using Microsoft.AspNetCore.Mvc;
using Entidades.Entities;
using ReglasDeNegocio.Business;
using AccesoADatos.Data;

namespace Cliente_HotelCocoMilk.Controllers
{
    public class ReservaController : Controller
    {
        public IConfiguration Configuration { get; }

        public ReservaController(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        [HttpPost]
        [Route("listarHabitacionReserva")]
        public async Task<ReservacionDisponible> listarHabitacionReserva(DateTime fechaLlegada, DateTime fechaSalida, string tipoHabitacion)
        {
            return await (new BusinessReserva().listarHabitacionReserva(fechaLlegada, fechaSalida, tipoHabitacion));
        }

        [HttpPost]
        [Route("registrarReserva")]
        public async Task<String> registarReserva(Reserva reserva)
        {
            return await (new BusinessReserva().registarReserva(reserva));
        }
     }
}
