using Microsoft.AspNetCore.Mvc;
using Entidades.Entities;
using ReglasDeNegocio.Business;

namespace Cliente_HotelCocoMilk.Controllers
{
    public class PublicidadController : Controller
    {
        public IConfiguration Configuration { get; }

        public PublicidadController(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        [HttpGet]
        [Route("mostrarImagenPublicidad")]
        public async Task<List<Publicidad>> mostrarImagenPublicidad()
        {
            return await (new BusinessPublicidad().mostrarImagenPublicidad());
        }

        [HttpGet]
        [Route("GetAllPublicity")]
        public async Task<List<Publicidad>> GetAllPublicity()
        {
            return await (new BusinessPublicidad().GetAllPublicity());
        }
    }
}
