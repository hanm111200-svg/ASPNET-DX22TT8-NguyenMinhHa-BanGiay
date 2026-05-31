using NguyenMinhHa_BanGiay.Models;
using NguyenMinhHa_BanGiay.Models.Momo;
namespace NguyenMinhHa_BanGiay.Services.Momo
{
    public interface IMomoService
    {
        Task<MomoCreatePaymentResponseModel> CreatePaymentAsync(OrderModel model);
        Task<MomoExecuteResponseModel> PaymentExecuteAsync(IQueryCollection collection);
    }
}
