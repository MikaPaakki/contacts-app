﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactsWebApi.Models;

namespace ContactsWebApi.Services
{
    public interface IContactService
    {
        List<Contact> FindContacts();
        Contact FindContactById(int id);
        void DeleteContactById(int id);
        void CreateContact(Contact contact);
        void EditContact(Contact contact);

    }
     
}
