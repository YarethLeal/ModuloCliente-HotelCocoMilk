using Microsoft.AspNetCore.Mvc;

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
