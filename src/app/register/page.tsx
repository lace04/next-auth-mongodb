'use client';

import axios, { AxiosError } from 'axios';
import { FormEvent, useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

function RegisterPage() {
  const [error, setError] = useState('');

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      const signupResponse = await axios.post('api/auth/signup', {
        email: formData.get('email'),
        password: formData.get('password'),
        fullname: formData.get('fullname'),
      });

      const res = await signIn('credentials', {
        email: signupResponse.data.email,
        password: formData.get('password'),
        redirect: false,
      });

      if (res?.ok) return router.push('/dashboard');

      // console.log(res);
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error.response?.data.message);
      }
    }
  };

  return (
    <div className=''>
      <form onSubmit={handleSubmit}>
        {error && <div className='bg-red-700 text-white p2 mb-2'>{error}</div>}

        <h1>Signup</h1>
        <input
          type='text'
          placeholder='Name'
          name='fullname'
          className='bg-zinc-800 px-4 py-2 block mb-2'
        />
        <input
          type='email'
          placeholder='example@email.com'
          name='email'
          className='bg-zinc-800 px-4 py-2 block mb-2'
        />
        <input
          type='password'
          placeholder='******'
          name='password'
          className='bg-zinc-800 px-4 py-2 block mb-2'
        />
        <button className='bg-indigo-700 px-4 py-2 block hover:bg-indigo-600 transition'>
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
