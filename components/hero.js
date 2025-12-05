const Hero = ({ article }) => {
  return (
    <>
      <h1 className="md:text-5xl text-2xl text-primary font-semibold text-center mb-12">
        {article.title}
      </h1>

      <div className="w-full lg:px-0 px-4">
        <div className="w-full aspect-[3/1]">
          <img
            src={article.image}
            alt={article.title}
            className="inset-0 w-full  h-full object-cover "
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
