using Microsoft.AspNetCore.Mvc;
using Entidades.Entities;
using ReglasDeNegocio.Business;

namespace Cliente_HotelCocoMilk.Controllers
{
    public class TipoHabitacionController : Controller
    {
        public IConfiguration Configuration { get; }

        public TipoHabitacionController(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        [HttpPost]
        [Route("listarTipoHabitacion")]
        public async Task<List<TipoHabitacion>> listarTipoHabitacion()
        {
            return await (new BusinessTipoHabitacion().listarTipoHabitacion());
        }
    }
}
