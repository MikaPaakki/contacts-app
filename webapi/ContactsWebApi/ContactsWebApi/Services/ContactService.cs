using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactsWebApi.Models;
using ContactsWebApi.Repositories;

namespace ContactsWebApi.Services
{
    public class ContactService : IContactService
    {
        private readonly IContactRepository _contactRepository;

        public ContactService(IContactRepository contactRepository)
        {
            _contactRepository = contactRepository;
        }

        public List<Contact> FindContacts()
        {
            return _contactRepository.GetAll();
        }

        public Contact FindContactById(int id)
        {
            return _contactRepository.GetById(id);
        }

        public void DeleteContactById(int id)
        {
            _contactRepository.DeleteById(id);
        }

        public void CreateContact(Contact contact)
        {
            _contactRepository.CreateContact(contact);
        }

        public void EditContact(Contact contact)
        {
            _contactRepository.EditContact(contact);
        }
    }
}
