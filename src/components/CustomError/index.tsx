import React from 'react'
import { CustomErrorProps } from './interface'
import { useTranslations } from 'next-intl'

export function CustomError({
  className,
  href = '/',
  title,
  description,
  buttonText,
  buttonClassName,
  imageSrc,
}: CustomErrorProps) {
  const t = useTranslations()
  return (
    <div className={className}>
      <h1 className='text-[24px] font-semibold text-center'>{title}</h1>
      <p className='font-light text-center'>{description}</p>
    </div>
  )
}
