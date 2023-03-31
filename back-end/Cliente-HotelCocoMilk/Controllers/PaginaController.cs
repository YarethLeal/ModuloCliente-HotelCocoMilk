using Microsoft.AspNetCore.Mvc;
using Entidades.Entities;
using ReglasDeNegocio.Business;

namespace Cliente_HotelCocoMilk.Controllers
{
    public class PaginaController : Controller
    {
        public IConfiguration Configuration { get; }

        public PaginaController(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        [HttpGet]
        [Route("mostrarDescripcion")]
        public async Task<List<Pagina>> mostrarDescripcion()
        {
            return await (new BusinessPagina().mostrarDescripcion());
        }

        [HttpGet]
        [Route("mostrarImagen")]
        public async Task<List<Pagina>> mostrarImagen()
        {
            return await (new BusinessPagina().mostrarImagen());
        }
    }
}
