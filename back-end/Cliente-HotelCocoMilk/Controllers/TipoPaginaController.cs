using Microsoft.AspNetCore.Mvc;
using Entidades.Entities;
using ReglasDeNegocio.Business;

namespace Cliente_HotelCocoMilk.Controllers
{
    public class TipoPaginaController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

       

    }
}
