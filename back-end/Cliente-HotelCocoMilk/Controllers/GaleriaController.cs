using Entidades.Entities;
using Microsoft.AspNetCore.Mvc;
using ReglasDeNegocio.Business;

namespace Cliente_HotelCocoMilk.Controllers
{
    public class GaleriaController: Controller
    {

        public IConfiguration Configuration { get; }

        public GaleriaController(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        [HttpGet]
        [Route("listarGaleria")]
        public async Task<List<Galeria>> listarGaleria()
        {
            return await (new BusinessGaleria().listarGaleria());
        }
    }
}
