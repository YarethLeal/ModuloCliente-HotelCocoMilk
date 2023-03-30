using Microsoft.AspNetCore.Mvc;

namespace Cliente_HotelCocoMilk.Controllers
{
    public class HabitacionController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
