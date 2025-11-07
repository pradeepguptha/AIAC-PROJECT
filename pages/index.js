import Link from 'next/link';
import Layout from '../components/Layout';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <div className="space-y-8">
        <div className="text-center py-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Welcome to My Blog
          </h1>
          <p className="text-xl text-gray-600">
            Discover articles about web development, React, Next.js, and more.
          </p>
        </div>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Latest Posts</h2>
          <div className="grid gap-6 md:grid-cols-1">
            {allPostsData.map(({ id, title, date, author, excerpt }) => (
              <Link
                key={id}
                href={`/posts/${id}`}
                className="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-2 hover:text-blue-600">
                  {title}
                </h3>
                <div className="text-sm text-gray-500 mb-3">
                  <span>{date}</span>
                  {author && <span className="ml-2">by {author}</span>}
                </div>
                {excerpt && (
                  <p className="text-gray-700 leading-relaxed">{excerpt}</p>
                )}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}

