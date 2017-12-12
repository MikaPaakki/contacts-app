using ContactsWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContactsWebApi.Repositories
{
    public interface IContactRepository
    {
        List<Contact> GetAll();
        Contact Get(int id);
        void DeleteById(int id);
        void CreateContact(Contact contact);
        void EditContact(Contact contact);
    }
}
