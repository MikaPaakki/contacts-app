using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ContactsWebApi.Models;

namespace ContactsWebApi.Config
{
    public class ContactsDbContext : DbContext
    {
        public ContactsDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Contact> Contacts { get; set; }
    }
}
