using System.ComponentModel.DataAnnotations;

namespace NguyenMinhHa_BanGiay.Models
{
    public class ContactModel
    {
        [Key]
        public int Id { get; set; }       
        public string Name { get; set; }
        public string Email { get; set; }
        public string Content { get; set; }
    }
}
