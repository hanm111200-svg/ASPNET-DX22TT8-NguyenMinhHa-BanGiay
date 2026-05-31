using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using NguyenMinhHa_BanGiay.Models;
using Microsoft.EntityFrameworkCore;
using NguyenMinhHa_BanGiay.Extensions;
using NguyenMinhHa_BanGiay.Repository;

namespace NguyenMinhHa_BanGiay.Controllers
{
    public class HomeController : Controller
    {
        private readonly DataContext _dataContext;
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger, DataContext context)
        {
            _logger = logger;
            _dataContext = context;
        }

        public IActionResult Index()
        {
            var categories = _dataContext.Categories.ToList();
            var products = _dataContext.Products.Include(p => p.Category).ToList();

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

            ViewBag.Categories = categories;
            ViewBag.Products = products;
            return View();
        }
    }
}
