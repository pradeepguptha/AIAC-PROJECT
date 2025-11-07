import Layout from '../../components/Layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Link from 'next/link';

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <article className="bg-white rounded-lg shadow-md p-8">
        <Link
          href="/"
          className="inline-block mb-6 text-blue-600 hover:text-blue-800 font-medium"
        >
          ← Back to home
        </Link>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {postData.title}
        </h1>
        
        <div className="text-sm text-gray-500 mb-8 pb-4 border-b">
          <span>{postData.date}</span>
          {postData.author && (
            <span className="ml-2">by {postData.author}</span>
          )}
        </div>
        
        <div
          className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-code:text-blue-600 prose-pre:bg-gray-100 prose-a:text-blue-600"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
    </Layout>
  );
}

