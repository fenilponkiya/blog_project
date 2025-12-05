import Link from "next/link";

const RelatedArticles = ({ related }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h3 className="md:text-5xl text-4xl font-semibold text-secondary text-center mb-12">
        Related articles
      </h3>

      <div className="grid xs:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {related.map((r) => (
          <Link key={r.slug} href={`/articles/${r.slug}`}>
            <div className="group cursor-pointer">
              <div className="relative w-full h-36 overflow-hidden ">
                <img
                  src={r.image}
                  alt={r.title}
                  className="
                    w-full h-full object-cover
                    transition-transform duration-500 ease-out
                    group-hover:scale-110
                  "
                />

                <div
                  className="
                    absolute inset-0 bg-black/20 opacity-0
                    transition-opacity duration-300
                    group-hover:opacity-100
                  "
                />
              </div>

              <div className="py-3">
                <div className="text-xl line-clamp-1 overflow-hidden text-ellipsis font-semibold text-primary mb-2 transition-colors duration-300 group-hover:text-secondary">
                  {r.title}
                </div>

                <div
                  className="article-text-override line-clamp-4 overflow-hidden text-ellipsis text-sm t"
                  dangerouslySetInnerHTML={{ __html: r.body ?? "" }}
                />

                <div className="text-sm font-medium text-dark mt-2">
                  By {r.author.name}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedArticles;
