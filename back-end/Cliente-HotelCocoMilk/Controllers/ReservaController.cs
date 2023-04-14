using Microsoft.AspNetCore.Mvc;
using Entidades.Entities;
using ReglasDeNegocio.Business;

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

    }
}
