'use client';

import { useSession, signOut } from 'next-auth/react';

function ProfilePage() {
  const { data: session, status } = useSession();

  return (
    <div className='justify-center h-[calc(100vh-4rem)] flex flex-col items-center'>
      <div className='bg-neutral-900 px-8 py-10 rounded-md w-2/3'>
        <h1 className='text-4xl font-bold text-center'>Profile</h1>
        <pre className='text-lg'>
          {JSON.stringify({ session, status }, null, 2)}
        </pre>

        <button
          // center
          className='bg-red-600 hover:bg-red-500 transition text-white font-bold py-2 px-4 rounded mt-4'
          onClick={() => signOut()}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default ProfilePage;
