'use client';

function AboutPage() {
  return (
    <div className='justify-center h-[calc(100vh-4rem)] flex flex-col items-center'>
      <div className='bg-neutral-900 px-8 py-10 rounded-md w-2/3'>
        <h1 className='text-4xl font-bold text-center mb-7'>About</h1>
        <p>Next.js with NextAuth</p> <br />
        <p>
          Next.js is a React framework that makes it easy to build and deploy
          server-rendered web applications. NextAuth is an open-source
          authentication library that makes it easy to add authentication to
          Next.js applications.
        </p>
        <br />
        <p>
          Together, Next.js and NextAuth can be used to build secure, scalable
          web applications. Next.js provides the server-side rendering that
          makes web applications faster and more SEO-friendly, while NextAuth
          provides the authentication that keeps users safe.
        </p>
        <br />
        <p>
          This combination of technologies can be used to build a wide variety
          of web applications, from simple blogs to complex enterprise
          applications.
        </p>
        <br />
        <p>Here are some of the benefits of using Next.js with NextAuth:</p>
        <br />
        <p>
          Security: NextAuth provides a secure and reliable authentication
          solution that is easy to use. Scalability: Next.js is a scalable
          framework that can handle high traffic loads. SEO: Next.js's
          server-side rendering makes web applications faster and more
          SEO-friendly.
        </p>
        <br />
        <p>
          If you are looking to build a secure, scalable, and SEO-friendly web
          application, then Next.js with NextAuth is a great option.
        </p>
        <br />
      </div>
    </div>
  );
}

export default AboutPage;
