using Microsoft.AspNetCore.Mvc;
using NguyenMinhHa_BanGiay.Extensions;
using NguyenMinhHa_BanGiay.Models;
using NguyenMinhHa_BanGiay.Repository;

namespace ShoeShop.Controllers
{
    public class ContactController : Controller
    {
        private readonly DataContext _dataContext;
        public ContactController(DataContext context)
        {
            _dataContext = context;
        }

        [HttpGet]
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

        [HttpPost]
        [Route("Contact")]
        public async Task<IActionResult> Contact(ContactModel contact)
        {            
            _dataContext.Contact.Add(contact);
            await _dataContext.SaveChangesAsync();

            return View("Index");
        }
    }
}
