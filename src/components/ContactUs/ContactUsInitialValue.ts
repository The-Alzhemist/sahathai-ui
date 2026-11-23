import { ContactUsTypeEnum } from '@/enums/ContactUsEnum'
import { ContactUsFormType } from './interface'

export const contactUsInitialValue: ContactUsFormType = {
  name: '',
  email: '',
  phone: '',
  message: '',
  type: ContactUsTypeEnum.CONTACT,
}
