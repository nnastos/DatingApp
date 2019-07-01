using System;

namespace DatingApp.API.Dtos
{
    public class UserForListDto
    {
        // Properties that we are going to return when a request of List of Users is made


        public int Id { get; set; }
        public string Username { get; set; }
        
        public string Gender { get; set; }

        public int Age { get; set; }

        public string KnownAs { get; set; }

        public DateTime Created { get; set; }

        public DateTime LastActive { get; set; }        
        public string City { get; set; }
        public string Country { get; set; }
        
        public string PhotoUrl { get; set; }
        
    }
}