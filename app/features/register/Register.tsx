'use client'

import { Card, CardBody } from '@/components/elements/Card'
import {
  Form,
  FormErrorMessage,
  FormField,
  FormLabel,
} from '@/components/forms/Form'
import { Button } from '@/components/buttons/Button'
import { AnchorButton } from '@/components/buttons/AnchorButton'
import { TextInput } from '@/components/forms/TextInput'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Nl2br } from '@/components/elements/Nl2br'
import { schema, Schema } from './Register.schema'
import { tos } from '../tos/Tos.constant'

export const Register: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useForm<Schema>({
    mode: 'onTouched',
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  return (
    <Card>
      <CardBody>
        <h1 style={{ fontSize: '1.5rem' }}>project-bd-client</h1>
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
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <AnchorButton variant="outlined" href="#" disabled>
              パスワード忘れ
            </AnchorButton>
            <AnchorButton variant="outlined" href="/login">
              ログイン
            </AnchorButton>
          </div>
          <Button onClick={() => alert('register')}>新規登録</Button>
        </div>
      </CardBody>
    </Card>
  )
}
