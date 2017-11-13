import {Pipe, PipeTransform} from '@angular/core';
import * as _ from 'lodash';
import {Contact} from '../services/contact';

@Pipe({
  name: 'contactAddress'
})
export class ContactAddressPipe implements PipeTransform {

  transform(contact: Contact, args?: any): any {
    let addressParts = [contact.streetAddress || null, contact.city]
    addressParts = _.reject(addressParts, _.isNull)
    return addressParts.join(', ') || 'no address';
  }

}
