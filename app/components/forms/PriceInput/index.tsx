import { HStack } from '@/components/layouts/HStack'
import { useDisclosure } from '@/functions/hooks/useDisclosure'
import {
  ChangeEventHandler,
  ComponentProps,
  ElementRef,
  FocusEventHandler,
  forwardRef,
} from 'react'
import { FieldError } from 'react-hook-form'
import { TextInput } from '../TextInput'

type Props = {
  onChange: (numberValue?: number) => void
  onBlur: () => void
  error?: FieldError | undefined
  name: string
} & Omit<ComponentProps<typeof TextInput>, 'onChange' | 'onBlur' | 'name'>
type Ref = ElementRef<'input'>
type PriceInputHandlerReturnType = {
  onFocus: FocusEventHandler<HTMLInputElement>
  onChange: ChangeEventHandler<HTMLInputElement>
  onBlur: FocusEventHandler<HTMLInputElement>
}

const transformFullWidthNumbers = (value: string) => {
  const fullWidthNumbers = '０１２３４５６７８９'
  const halfWidthNumbers = '0123456789'

  return value.replace(
    /[０-９]/g,
    (char) => halfWidthNumbers[fullWidthNumbers.indexOf(char)]!,
  )
}
export const PriceInput = forwardRef<Ref, Props>(
  ({ error: _error, value, name: _name, ...rest }, ref) => {
    const {
      isOpen: isPrice,
      open: showPrice,
      close: hidePrice,
    } = useDisclosure()

    const price = value ?? ''
    const priceWithComma = value?.toLocaleString() ?? ''

    const priceInputHandler = (): PriceInputHandlerReturnType => {
      return {
        onChange: (e) => {
          if (!e.target.value) {
            rest.onChange(undefined)
            return
          }

          // NOTE: 大文字数字を半角数字に変換し、半角数字以外の文字列を削除する
          const cleanValue = transformFullWidthNumbers(e.target.value).replace(
            /\D+/g,
            '',
          )
          const numberValue = Number(cleanValue)
          if (Number.isNaN(numberValue)) {
            throw new Error('Invalid number')
          }

          rest.onChange(numberValue)
        },
        onFocus: () => {
          showPrice()
        },
        onBlur: () => {
          hidePrice()
          rest.onBlur()
        },
      }
    }

    return (
      <HStack align="center">
        <TextInput
          ref={ref}
          {...rest}
          value={isPrice ? price : priceWithComma}
          {...priceInputHandler()}
        />
        <span>円</span>
      </HStack>
    )
  },
)

PriceInput.displayName = 'PriceInput'
