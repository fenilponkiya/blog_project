import Head from "next/head";
import ArticleCard from "../../components/ArticleCard";
import Layout from "../../components/layout/Layout";
import articlesData from "../../data/articles.json";

export default function ArticlesPage({ articles }) {
  return (
    <>
      <Head>
        <title>All Articles </title>
        <meta
          name="description"
          content="Browse all latest articles on web development, React, and Next.js."
        />
        <meta property="og:title" content="All Articles " />
        <meta property="og:description" content="Latest blog articles" />
      </Head>

      <Layout>
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-semibold mb-6">All Articles</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      articles: articlesData,
    },
    revalidate: 60,
  };
}
