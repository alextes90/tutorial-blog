import Date from "@/components/date/Date";
import Layout from "@/components/Layout/Layout";
import { Post } from "@/types/interfaces";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { getAllPostIds, getPostData } from "../../../lib/posts";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string;
  const postData = await getPostData(id);
  return {
    props: {
      postData,
    },
  };
};

interface PostProps {
  postData: Post;
}
export default function Post({ postData }: PostProps) {
  return (
    <Layout home={false}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className='text-3xl leading-tight font-extrabold tracking-tighter my-4'>
          {postData.title}
        </h1>
        <div className='text-gray-600 my-2'>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
