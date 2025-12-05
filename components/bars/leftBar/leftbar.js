const Leftbar = ({ article }) => {
  return (
    <div className="sm:col-span-2">
      <div className="flex xs:justify-between gap-1  justify-center items-center flex-wrap  text-light">
        <div className="flex items-center  uppercase  ">
          <img
            src={article.author.avatar ?? ""}
            className="w-8 h-8 rounded-full object-cover"
            alt={article.name}
          />
          <span className="ml-3 text-base font-semibold">
            {article.author.name ?? ""}
          </span>
        </div>
        <p className="text-base   font-semibold ">{article.date}</p>
      </div>
      <hr className="mx-0 my-6 bg-divider h-[1px]" />
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: article.body ?? "" }}
      />
    </div>
  );
};

export default Leftbar;
