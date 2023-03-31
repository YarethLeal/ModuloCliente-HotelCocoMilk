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
        [Route("mostrarPagina")]
        public async Task<List<Pagina>> mostrarPagina(string tipoPagina)
        {
            return await (new BusinessPagina().mostrarPagina(tipoPagina));
        }
    }
}
