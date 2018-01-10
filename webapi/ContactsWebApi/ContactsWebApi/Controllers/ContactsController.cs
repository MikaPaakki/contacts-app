using ContactsWebApi.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactsWebApi.Services;
using Microsoft.AspNetCore.Authorization;

namespace ContactsWebApi.Controllers
{
    [Authorize]
    [Route("api/contacts")]
    public class ContactsController : Controller
    {
        private readonly IContactService _contactService;

        public ContactsController(IContactService contactService)
        {
            this._contactService = contactService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var contacts = _contactService.FindContacts();
            return new JsonResult(contacts);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var contact = _contactService.FindContactById(id);
            return new JsonResult(contact);
        }

        [HttpPost]        
        public IActionResult CreateContact([FromBody] Contact contact)
        {
            _contactService.CreateContact(contact);
            return new JsonResult(contact);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {

            _contactService.DeleteContactById(id);

            //return new OkResult();
            return new NoContentResult();
        }

        [HttpPut]
        public IActionResult Edit([FromBody] Contact contact)
        {
            _contactService.EditContact(contact);

            return new JsonResult(contact);
        }
    }

}
