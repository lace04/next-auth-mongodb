'use client';

import { FormEvent, useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

function LoginPage() {
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const res = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    });

    if (res?.error) return setError(res.error);

    if (res?.ok) return router.push('/dashboard/profile');
  };

  return (
    <div className='justify-center h-[calc(100vh-4rem)] flex items-center'>
      <form
        onSubmit={handleSubmit}
        className='bg-neutral-900 px-8 py-10 rounded-md w-3/12'
      >
        {error && <div className='bg-red-700 text-white p2 mb-2'>{error}</div>}

        <h1 className='text-3xl text-center font-bold mb-6'>SignIn</h1>
        <input
          type='email'
          placeholder='example@email.com'
          name='email'
          className='bg-zinc-800 px-4 py-2 block mb-2 w-full'
          autoComplete='off'
        />
        <input
          type='password'
          placeholder='******'
          name='password'
          className='bg-zinc-800 px-4 py-2 block mb-2 w-full'
          autoComplete='off'
        />
        <button className='bg-indigo-700 px-4 py-2 block w-full mt-8 hover:bg-indigo-600 transition'>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
