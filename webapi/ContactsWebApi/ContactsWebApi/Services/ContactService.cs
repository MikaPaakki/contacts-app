using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactsWebApi.Models;

namespace ContactsWebApi.Services
{
    public class ContactService : IContactService
    {
        public List<Contact> FindContacts()
        {
            var contacts = new List<Contact>
            {
                new Contact(1, "Mika", "Paakki", "0443065347", "Tienhaara 27", "Imatra"),
                new Contact(1, "Toka", "Kontakti", "045123456", "Uusikatu 2", "Lappeenranta")
            };
            return contacts;
        }

        public Contact FindContactById(int id)
        {
            throw new NotImplementedException();
        }
    }
}
