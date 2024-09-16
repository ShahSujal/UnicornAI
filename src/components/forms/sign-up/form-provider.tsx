'use client'
import { Loader } from '@/components/component/common/loader'
import { useSignUpForm } from '@/hooks/sign-up/use-sign-up'
import { FormProvider } from 'react-hook-form'

type Props = {
  children: React.ReactNode
}

const SignUpFormProvider = ({ children }: Props) => {
  const { methods, onHandleSubmit, loading } = useSignUpForm()

  return (
      <FormProvider {...methods}>
        <form
          onSubmit={onHandleSubmit}
          className="h-full"
        >
          <div className="flex flex-col justify-between gap-3 h-full">
            <Loader loading={loading}>{children}</Loader>
          </div>
        </form>
      </FormProvider>
  )
}

export default SignUpFormProvider
