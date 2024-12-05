import {
  ContactUsAcceptProps,
  ContactUsForm,
  ContactUsProps,
} from '@/components/ContactUs/interface'
import { ContactUsTypeEnum } from '@/enums/ContactUsEnum'
import { useForm as useFormSpree } from '@formspree/react'
import { toast } from 'react-toastify'

import { useEffect } from 'react'

const withContactUs = (Component: React.FC<ContactUsProps>) => {
  const Hoc = ({ className }: ContactUsAcceptProps) => {
    const FORM_SPREE_ID = 'mwpkzeaw'

    const [state, sendDataToFromSpree] = useFormSpree(FORM_SPREE_ID)

    useEffect(() => {
      if (state.submitting) {
        toast.info("We're processing your message...", {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        })
      }
      if (!state.submitting && !state.errors && state.succeeded) {
        toast.success('Sent message successfully!...', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        })
        // setShowModal(true)
        // reset();
      }
    }, [state.submitting, state.errors, state.succeeded])

    const handleOnSubmitForm = async (value: ContactUsForm, resetForm: any) => {
      console.log('submit form')
      alert(JSON.stringify(value))

      try {
        const formData = new FormData()
        const contactType =
          value.type === ContactUsTypeEnum.CONTACT
            ? 'แบบฟอร์มติดต่อ (contact)'
            : 'แบบฟอร์มร้องเรียนการทุจริต (Fraud complaint)'

        const contactName = value.name || '-'
        const contactPhone = value.phone || '-'
        const contactEmail = value.email || '-'
        const message = value.message || '-'

        const customFormattedText = `
        <div>
          <h3>รายละเอียดการติดต่อ</h3>
          <p><strong style="width: 300px;">ประเภทการติดต่อ (contact type):</strong> ${contactType}</p>
          <p><strong style="width: 300px;">ชื่อผู้ติดต่อ (contact name):</strong> ${contactName}</p>
          <p><strong style="width: 300px;" >หมายเลขโทรศัพท์ (phone number):</strong> ${contactPhone}</p>
          <p><strong style="width: 300px;" >อีเมล (e-mail):</strong> ${contactEmail}</p>
          <p><strong style="width: 300px;">ข้อความ (message):</strong> ${message}</p>
        </div>
      `

        formData.append('Contact from data:', customFormattedText.trim())

        // await sendDataToFromSpree(formData)
        resetForm()
      } catch (error) {
        console.error(error)
        toast.error('Cannot sent your message, please try again')
      }
    }

    const newProps: ContactUsProps = {
      className,
      handleOnSubmitForm,
    }
    return <Component {...newProps} />
  }

  return Hoc
}
export default withContactUs
