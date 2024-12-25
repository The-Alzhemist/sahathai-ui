import { Background } from '@/components/Background'
import { useTranslations } from 'next-intl'

const OpticalCharacterRecognition = () => {
  const t = useTranslations('InfrastructureContainersPage.OCR')
  return (
    <Background className=''>
      <section className='bg-modellBgDark/60 text-white pt-[100px] pb-[140px] px-5 flex flex-col justify-center items-center'>
        <h2 className='font-[500] text-[40px] leading-[60.48px] text-white text-center'>
          {t('Title')}
        </h2>
        <p className='mt-[20px] body-1 text-white-1 text-center max-w-[1100px]'>
          {t('Description')}
        </p>
      </section>
    </Background>
  )
}

export default OpticalCharacterRecognition
