'use client';

import React from 'react';
// Components
import Button from './Button';
import { toast } from './toast';
// Libraries
import { signIn } from 'next-auth/react';

interface Props {}

const SignInButton: React.FC<Props> = ({}) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const signInWithGoogle = async () => {
    try {
      setIsLoading(true);
      await signIn('google');
    } catch (error) {
      toast({
        title: 'Error signing in',
        message: 'Please try again later.',
        type: 'error',
      });
    }
  };

  return (
    <Button onClick={signInWithGoogle} isLoading={isLoading}>
      Sign in
    </Button>
  );
};

export default SignInButton;
