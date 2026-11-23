export enum ContactUsTypeEnum {
  CONTACT = 'contact-form',
  FRAUD_COMPLAINT = 'fraud-complaint-form',
  IR_CONTACT = 'ir-contact-form',
  COMPANY_SECRETARY = 'company-secretary-form',
}

// Hidden honeypot field in the contact form; real users never fill it
export const CONTACT_HONEYPOT_FIELD = 'website'
