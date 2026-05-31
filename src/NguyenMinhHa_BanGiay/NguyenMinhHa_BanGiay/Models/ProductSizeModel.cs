using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NguyenMinhHa_BanGiay.Models
{
    public class ProductSizeModel
    {
        [Key]
        public int Id { get; set; }
        public string? size { get; set; }
        [DefaultValue(0)]
        public int Quantity { get; set; }
        public int? ProductId { get; set; }
        [ForeignKey("ProductId")]
        public virtual ProductModel? Product { get; set; }       
    }
}
