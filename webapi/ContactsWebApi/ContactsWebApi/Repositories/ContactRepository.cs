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

        public void CreateContact(Contact contact)
        {
            _contacts.Add(contact);
        }

        public void DeleteById(int id)
        {
            int index = _contacts.FindIndex(c => c.Id == id);
            _contacts.RemoveAt(index);
        }

        public void EditContact(Contact contact)
        {
            int index = _contacts.FindIndex(c => c.Id == contact.Id);
            _contacts[index] = contact;
        }

        

        private void Initialize()
        {
            _contacts = new List<Contact>
            {
                new Contact(1, "Mika", "Paakki", "0443065347", "Tienhaara 27", "Imatra"),
                new Contact(2, "Toka", "Kontakti", "045123456", "Uusikatu 2", "Lappeenranta"),
                new Contact(3, "Kolmas","Kontakti", "045123456", "Uusikatu 2", "Lappeenranta")
            };
        }
    }
}
