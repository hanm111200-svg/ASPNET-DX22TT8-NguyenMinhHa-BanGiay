using Microsoft.AspNetCore.Mvc;
using NguyenMinhHa_BanGiay.Models;
using NguyenMinhHa_BanGiay.Repository;

namespace NguyenMinhHa_BanGiay.Areas.Admin.Controllers
{
    [Area("Admin")]
    [Route("Admin/Contact")]
    public class ContactController : Controller
    {
        private readonly DataContext _dataContext;
        public ContactController(DataContext context)
        {
            _dataContext = context;
        }

        [HttpGet]
        [Route("Admin/Contact")]
        public IActionResult Index()
        {
            var name = HttpContext.Session.GetString("Username");
            if (string.IsNullOrEmpty(name))
            {
                return RedirectToAction("Index", "Login");
            }
            var contacts = _dataContext.Contact.OrderByDescending(p => p.Id).ToList();
            return View(contacts);
        }

        [Route("Admin/Contact/{id?}")]
        public async Task<IActionResult> Delete(int Id)
        {
            ContactModel contact = await _dataContext.Contact.FindAsync(Id);
            _dataContext.Contact.Remove(contact);
            await _dataContext.SaveChangesAsync();
            return RedirectToAction("Index");
        }
    }
}
