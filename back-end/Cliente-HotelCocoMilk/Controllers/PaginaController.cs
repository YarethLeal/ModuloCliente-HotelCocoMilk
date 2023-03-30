using Microsoft.AspNetCore.Mvc;

namespace Cliente_HotelCocoMilk.Controllers
{
    public class PaginaController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
