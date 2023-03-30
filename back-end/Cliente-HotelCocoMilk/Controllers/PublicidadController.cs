using Microsoft.AspNetCore.Mvc;
using Entidades.Entities;
using ReglasDeNegocio.Business;

namespace Cliente_HotelCocoMilk.Controllers
{
    public class PublicidadController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
