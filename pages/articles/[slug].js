import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Leftbar from "../../components/bars/leftBar/leftbar";
import Rightbar from "../../components/bars/rightBar/rightbar";
import CommentSection from "../../components/comment/commentSection";
import Hero from "../../components/hero";
import RelatedArticles from "../../components/RelatedArticles";
import articlesData from "../../data/articles.json";
import Layout from "../../components/layout/Layout";

export default function ArticlePage({ article, allArticles, currentIndex }) {
  const router = useRouter();
  const [comments, setComments] = useState([]);
  const [loadingComments, setLoadingComments] = useState(true);
  const [commentsError, setCommentsError] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoadingComments(true);
    setCommentsError(null);
    fetch(`/api/comments?slug=${article.slug}`)
      .then((r) => {
        if (!r.ok) throw new Error("Failed to load comments");
        return r.json();
      })
      .then((data) => {
        if (!mounted) return;
        const initial = data.comments;
        setComments(initial);
        setLoadingComments(false);
      })
      .catch((err) => {
        if (!mounted) return;
        setCommentsError(err.message);
        setLoadingComments(false);
      });
    return () => {
      mounted = false;
    };
  }, [article.slug]);

  const handleAddComment = (newComment) => {
    setComments((prev) => [...prev, newComment]);
  };

  const nextArticle = allArticles[(currentIndex + 1) % allArticles.length];
  const prevArticle =
    allArticles[(currentIndex - 1 + allArticles.length) % allArticles.length];

  const related = allArticles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 4);

  if (!article) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto p-8">Article not found</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Hero article={article} />
      <div className="max-w-6xl mx-auto px-4 py-6">
        <article className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <Leftbar article={article} />

          <Rightbar article={article} />
        </article>
        <section className="grid grid-cols-1 md:grid-cols-3">
          <div className="md:col-span-2">
            <hr className="mx-0 my-6 bg-divider h-[1px]" />

            <div className="flex flex-col items-center justify-center gap-4">
              <p className="text-center font-normal text-xl text-primary">{`About ${article.author.name}`}</p>
              <img
                src={article.author.avatar ?? ""}
                className="w-[100px] h-[100px] rounded-full object-cover"
                alt={article.author.name}
              />
            </div>
            <p className="text-base text-left italic text-light   font-semibold m-6 mb-10 ">
              {article.author.bio}
            </p>
            <hr className="mx-0 my-6 bg-divider h-[1px]" />

            <div className="flex items-center justify-between mt-8">
              <button
                onClick={() => router.push(`/articles/${prevArticle.slug}`)}
                className="mr-2 flex gap-2 px-3 py-2 border font-semibold text-base border-buttonBorder rounded-xs"
              >
                <Image priority src="/images/left.svg" height={16} width={16} />{" "}
                Previous
              </button>
              <button
                onClick={() => router.push(`/articles/${nextArticle.slug}`)}
                className="mr-2 flex gap-2 px-3 py-2 border font-semibold text-base border-buttonBorder rounded-xs"
              >
                Next{" "}
                <Image
                  priority
                  src="/images/right.svg"
                  height={16}
                  width={16}
                />{" "}
              </button>
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="text-sm text-secondary font-normal truncate max-w-[150px]">
                {prevArticle.title}
              </p>
              <p className="text-sm text-secondary font-normal truncate max-w-[150px] text-right">
                {nextArticle.title}
              </p>
            </div>
          </div>
        </section>
        <CommentSection
          comments={comments}
          loadingComments={loadingComments}
          commentsError={commentsError}
          handleAddComment={handleAddComment}
        />
      </div>
      <div className="bg-footerBg mt-8">
        <RelatedArticles related={related} />
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = articlesData.map((a) => ({ params: { slug: a.slug } }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const allArticles = articlesData;
  const article = allArticles.find((a) => a.slug === slug) || null;
  const currentIndex = allArticles.findIndex((a) => a.slug === slug);

  return {
    props: {
      article,
      allArticles,
      currentIndex,
    },
  };
}
