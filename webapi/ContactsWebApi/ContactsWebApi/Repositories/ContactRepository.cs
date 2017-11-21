using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactsWebApi.Models;

namespace ContactsWebApi.Repositories
{
    public class ContactRepository : IContactRepository
    {
        private List<Contact> _contacts;

        public ContactRepository()
        {
            _contacts = new List<Contact>();
           Initialize();
        }

        public List<Contact> GetAll()
        {
            return _contacts;
        }

        public ContactRepository GetById()
        {
            throw new NotImplementedException();
        }

        public Contact GetById(int id)
        {
            return _contacts.FirstOrDefault(c => c.Id == id);
        }

        private void Initialize()
        {
            _contacts = new List<Contact>
            {
                new Contact(1, "Mika", "Paakki", "0443065347", "Tienhaara 27", "Imatra"),
                new Contact(1, "Toka", "Kontakti", "045123456", "Uusikatu 2", "Lappeenranta")
            };
        }
    }
}
