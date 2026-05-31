using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using NguyenMinhHa_BanGiay.Models;

namespace NguyenMinhHa_BanGiay.Areas.Admin.Controllers
{
    [Area("Admin")]
    [Route("Admin")]
    public class DashboardController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
