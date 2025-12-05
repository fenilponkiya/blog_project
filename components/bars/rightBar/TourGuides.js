import Image from "next/image";

const TourGuides = ({ article }) => {
  const renderStars = (rating) => {
    const stars = [];
    const maxStars = 5;

    for (let i = 1; i <= maxStars; i++) {
      if (i <= rating) {
        stars.push(
          <svg
            key={i}
            className="w-4 h-4 fill-rating"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        );
      } else {
        stars.push(
          <svg
            key={i}
            className="w-4 h-4 fill-white stroke-rating"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        );
      }
    }

    return <div className="flex">{stars}</div>;
  };
  return article.tourGuides && article.tourGuides.length > 0 ? (
    article.tourGuides.map((g, idx) => (
      <>
        <div key={idx} className="flex items-center gap-3 ">
          <img
            src={g.avatar}
            className="w-[60px] h-[60px] rounded-full object-cover"
            alt={g.name}
          />
          <div className="flex flex-col gap-1">
            <div className="text-base font-normal text-dark">{g.name}</div>
            <div className="flex items-center gap-2">
              <Image
                src={"/images/location.svg"}
                width={13.33}
                height={16.66}
                alt={g.name}
              />
              <div className="text-xs text-dark font-normal">
                {g.userCountry ?? ""}
                {g.userCountry && g.userCity ? ", " : ""} {g.userCity ?? ""}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center text-sm  gap-4 text-semiDark font-normal">
          {renderStars(g.rating)}({g.rating})
        </div>
        {article.tourGuides.length - 1 !== idx ? (
          <hr className="mx-0 !my-5   bg-[#DEDEDE] h-[1px]" />
        ) : null}
      </>
    ))
  ) : (
    <p className="text-sm text-gray-500">No guides listed</p>
  );
};

export default TourGuides;
