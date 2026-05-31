using NguyenMinhHa_BanGiay.Models;
using NguyenMinhHa_BanGiay.Models.Vnpay;
namespace NguyenMinhHa_BanGiay.Services.Vnpay
{
    public interface IVnPayService
    {
        string CreatePaymentUrl(OrderModel model, HttpContext context);
        PaymentResponseModel PaymentExecute(IQueryCollection collections);
    }
}
