using Microsoft.AspNetCore.Mvc;
using NguyenMinhHa_BanGiay.Extensions;
using NguyenMinhHa_BanGiay.Models;

namespace NguyenMinhHa_BanGiay.Controllers
{
    public class AboutController : Controller
    {
        public IActionResult Index()
        {
            var cart = HttpContext.Session.GetObjectFromJson<List<CartModel>>("cart");
            int countItem = 0;
            if (cart != null)
            {
                foreach (var item in cart)
                {
                    countItem++;
                }
            }
            ViewData["CountItemCart"] = countItem;
            return View();
        }
    }
}
