import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const name = "Alex";
export const siteTitle = "Next.js Sample Website";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home: boolean;
}) {
  return (
    <div className='max-w-2xl px-4 mt-12 mb-24 mx-auto '>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='Learn how to build a personal website using Next.js'
        />
        <meta
          property='og:image'
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <header className='flex flex-col items-center'>
        {home ? (
          <>
            <Image
              priority
              src='/images/profile.jpg'
              className='rounded-full'
              height={144}
              width={144}
              alt=''
            />
            <h1 className='text-2xl leading-6 font-extrabold tracking-tighter my-4'>
              {name}
            </h1>
          </>
        ) : (
          <>
            <Link href='/'>
              <Image
                priority
                src='/images/profile.jpg'
                className='rounded-full'
                height={108}
                width={108}
                alt=''
              />
            </Link>
            <h2 className='text-lg leading-5 my-4'>
              <Link href='/' className='text-black text-xl font-bold'>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className='mt-12 pb-24'>
          <Link href='/'>← Back to home</Link>
        </div>
      )}
    </div>
  );
}
