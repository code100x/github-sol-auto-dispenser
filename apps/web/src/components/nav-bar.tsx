'use client';

import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { RefreshCcw, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { ThemeToggler } from './theme-toggler';
import Link from 'next/link';

export const NavBar = () => {
  const session = useSession();

  return (
    <>
      <nav className="fixed z-50 top-0 px-4 w-full h-16 border-b shadow-sm bg-background/80 backdrop-blur-md flex items-center gap-2 print:hidden">
        <div className="md:max-w-screen-2xl mx-auto flex items-center justify-between w-full">
          <Link href="/">
            <Sparkles />
          </Link>
          <div className="flex items-center gap-2">
            {session?.data?.user ? (
              <div className="flex items-center space-x-2">
                <ThemeToggler />
                <div className="hidden sm:flex items-center justify-around md:w-auto md:block space-x-2">
                  <AppbarAuth />
                </div>
              </div>
            ) : (
              <>
                <ThemeToggler />
                <AppbarAuth />
              </>
            )}
          </div>
        </div>
      </nav>
      <div className="h-16 w-full print:hidden" />
    </>
  );
};

export const AppbarAuth = ({ isInMenu = false }: { isInMenu?: boolean }) => {
  const session = useSession();

  if (session.status === 'loading')
    return (
      <Button variant={'outline'} className="w-20">
        <RefreshCcw className="animate-spin" />
      </Button>
    );

  if (session.status === 'authenticated') {
    return (
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage
            src={session.data.user?.image!}
            className="w-10 h-10 rounded-full"
          />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <Button id="navbar-default" onClick={() => signOut()}>
          Logout
        </Button>
      </div>
    );
  }

  return (
    <Button id="navbar-default" onClick={() => signIn()}>
      Login
    </Button>
  );
};
