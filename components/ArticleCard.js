import Link from "next/link";
import Image from "next/image";

export default function ArticleCard({ article }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group block rounded-xl overflow-hidden border border-footerBg bg-white hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-44 md:h-52 w-full overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

        {article.category && (
          <span className="absolute top-3 left-3 z-10 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
            {article.category}
          </span>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold leading-snug line-clamp-1 group-hover:text-primary transition-colors">
          {article.title}
        </h3>

        <div className="mt-4 flex items-center justify-between text-sm text-semiLight">
          {article.date && <span>{article.date}</span>}

          <span className="font-medium text-primary group-hover:underline">
            Read more →
          </span>
        </div>
      </div>
    </Link>
  );
}
