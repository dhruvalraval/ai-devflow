'use client'

import Image from 'next/image'
import {signIn} from 'next-auth/react'
import {toast} from 'sonner'

import ROUTES from '@/constants/routes'

import {Button} from '../ui/button'

const SocialAuthForm = () => {
  const buttonClass =
    'background-dark400_light900 body-medium text-dark200_light800 m-h-12 rounded-2 px-4 py-3.5'

  const handleSignIn = async (provider: 'github' | 'google') => {
    try {
      await signIn(provider, {
        redirectTo: ROUTES.HOME,
      })
    } catch (error) {
      toast.error('Sign in failed', {
        description: error instanceof Error ? error.message : 'Error occurred while signing in',
      })
    }
  }
  return (
    <div className='flex flex-wrap gap-2.5 mt-10'>
      <Button className={buttonClass} onClick={() => handleSignIn('github')}>
        <Image
          src='/icons/github.svg'
          alt='github logo'
          width={20}
          height={20}
          className='object-contain mr-2.5 invert-colors'
        />
        <span>Log in with Github</span>
      </Button>
      <Button className={buttonClass} onClick={() => handleSignIn('google')}>
        <Image
          src='/icons/google.svg'
          alt='google logo'
          width={20}
          height={20}
          className='object-contain mr-2.5'
        />
        <span>Log in with Google</span>
      </Button>
    </div>
  )
}
export default SocialAuthForm
