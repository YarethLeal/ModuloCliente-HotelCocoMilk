using Entidades.Entities;
using Microsoft.AspNetCore.Mvc;
using ReglasDeNegocio.Business;

namespace Cliente_HotelCocoMilk.Controllers
{
    public class ClienteController : Controller
    {
        public IConfiguration Configuration { get; }

        public ClienteController(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        [HttpGet]
        [Route("listarCliente")]
        public async Task<List<Cliente>> listarCliente()
        {
            return await (new BusinessCliente().listarCliente());
        }
    }
}
