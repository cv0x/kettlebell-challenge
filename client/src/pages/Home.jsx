import { SignInButton } from '@clerk/clerk-react'
import React from 'react'

export default function Home() {
  return (
    <div>
      <h1>sign in </h1>
      <SignInButton  mode='modal' forceRedirectUrl='/dashboard'/>
    </div>
  );
}
