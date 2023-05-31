import Head from "next/head";
import Layout, { siteTitle } from "@/components/Layout/Layout";
import { getSortedPostsData } from "../../lib/posts";
import { GetStaticProps } from "next";
import { Post } from "@/types/interfaces";
import Link from "next/link";
import Date from "@/components/date/Date";

interface HomeProps {
  allPostsData: Post[];
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default function Home({ allPostsData }: HomeProps) {
  return (
    <Layout home={true}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className='text-base leading-relaxed'>
        <p className='text-xl py-2'>Hello my name is Alex</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
        </p>
      </section>
      <section className='text-lg leading-relaxed pt-px'>
        <h2 className='text-xl leading-5 my-4 font-bold'>Blog</h2>
        <ul className='list-none p-0'>
          {allPostsData.map(({ id, date, title }) => (
            <li className='mb-5' key={id}>
              <Link href={`/posts/${id}`} className='text-red'>
                {title}
              </Link>
              <br />
              <small className='text-gray-600'>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
