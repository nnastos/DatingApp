using System;

namespace DatingApp.API.Models
{
    public class Photo
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public string Description { get; set; }
        public DateTime Dateadded { get; set; }
        public bool isMain { get; set; }

        // publicid from cloudinary.
        public string PublicId { get; set; }
        public User User { get; set; }

        public int UserId { get; set; }

    }
}