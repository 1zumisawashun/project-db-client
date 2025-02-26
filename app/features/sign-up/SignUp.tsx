'use client'

import { Button } from '@/components/buttons/Button'
import { Card, CardBody } from '@/components/elements/Card'
import { Link } from '@/components/elements/Link'
import { Nl2br } from '@/components/elements/Nl2br'
import { SimpleDialog } from '@/components/elements/SimpleDialog'
import { Checkbox, CheckedState } from '@/components/forms/Checkbox'
import {
  Form,
  FormErrorMessage,
  FormField,
  FormLabel,
} from '@/components/forms/Form'
import { TextInput } from '@/components/forms/TextInput'
import { HStack } from '@/components/layouts/HStack'
import { useDisclosure } from '@/functions/hooks/useDisclosure'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { startTransition, useState } from 'react'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import { tos } from '../tos/tos.constant'
import { signUp } from './signUp.action'
import { schema, Schema } from './signUp.schema'

export const SignUp: React.FC = () => {
  const dialog = useDisclosure()
  const router = useRouter()

  const [errorMessage, setErrorMessage] = useState('')
  const [checkedState, setCheckedState] = useState<CheckedState>(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({
    mode: 'onTouched',
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit: SubmitHandler<Schema> = (data) => {
    startTransition(async () => {
      const response = await signUp({ data })

      if (!response?.isSuccess) {
        setErrorMessage(response.error.message)
        dialog.open()
        return
      }

      router.push('/')
    })
  }

  const onError: SubmitErrorHandler<Schema> = (error) => console.error(error)

  return (
    <>
      <Card>
        <CardBody>
          <h1 style={{ fontSize: '1.5rem' }}>project-bd へようこそ</h1>
          <Form>
            <FormField name="email" serverInvalid={!!errors.email}>
              <FormLabel>メールアドレス</FormLabel>
              <TextInput type="email" {...register('email')} />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormField>

            <FormField name="password" serverInvalid={!!errors.password}>
              <FormLabel>パスワード</FormLabel>
              <TextInput {...register('password')} />
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            </FormField>
          </Form>
          <Card scrollable style={{ height: '150px' }}>
            <CardBody>
              <Nl2br>{tos}</Nl2br>
            </CardBody>
          </Card>
          <Checkbox checked={checkedState} onCheckedChange={setCheckedState}>
            利用規約に同意する
          </Checkbox>
          <HStack style={{ justifyContent: 'space-between' }}>
            <HStack>
              <Link href="/sign-in">ログインはこちら</Link>
            </HStack>
            <Button
              onClick={(e) => void handleSubmit(onSubmit, onError)(e)}
              disabled={!checkedState}
            >
              新規登録
            </Button>
          </HStack>
        </CardBody>
      </Card>

      <SimpleDialog
        isOpen={dialog.isOpen}
        close={dialog.close}
        title="新規登録に失敗しました"
        description={errorMessage}
      />
    </>
  )
}
