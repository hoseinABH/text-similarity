'use client';
import React from 'react';
// Libraries
import { signOut } from 'next-auth/react';
// Components
import Button from './Button';
import { toast } from './toast';

interface SignOutButtonProps {}

const SignOutButton: React.FC<SignOutButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const signUserOut = async () => {
    try {
      setIsLoading(true);
      await signOut();
    } catch (error) {
      toast({
        title: 'Error signing out',
        message: 'Please try again later.',
        type: 'error',
      });
    }
  };

  return (
    <Button onClick={signUserOut} isLoading={isLoading}>
      Sign out
    </Button>
  );
};

export default SignOutButton;
