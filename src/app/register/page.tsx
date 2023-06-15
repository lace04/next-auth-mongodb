'use client';

import axios, { AxiosError } from 'axios';
import { FormEvent, useState } from 'react';

function RegisterPage() {
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      const res = await axios.post('api/auth/signup', {
        email: formData.get('email'),
        password: formData.get('password'),
        fullname: formData.get('fullname'),
      });
      // console.log(res);
    } catch (error) {
      // console.log(error);
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
