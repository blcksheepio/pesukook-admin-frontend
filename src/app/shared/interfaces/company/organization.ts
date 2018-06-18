import { EmailAddress } from '../contact/email-address';
import { PhoneNumber } from '../contact/phone-number';
import { Address } from '../contact/address';

export interface Organization {
    name: string;
    address: Address;
    emailAddress: EmailAddress;
    phoneNumber: PhoneNumber;
}
