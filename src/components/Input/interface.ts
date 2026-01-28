import { Input } from '@/components/Input'
import { HTMLProps } from 'react'

export interface InputProps extends HTMLProps<HTMLInputElement> {
  className?: string
  inputClassName?: string
}
