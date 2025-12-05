import { useState } from "react";
import Image from "next/image";

const ExploreMore = ({ article }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextItem = () => {
    if (article.exploreMore && article.exploreMore.length > 0) {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % article.exploreMore.length
      );
    }
  };

  const prevItem = () => {
    if (article.exploreMore && article.exploreMore.length > 0) {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 1 + article.exploreMore.length) %
          article.exploreMore.length
      );
    }
  };

  const renderMobileView = () => {
    if (!article.exploreMore || article.exploreMore.length === 0) return null;

    const currentItem = article.exploreMore[currentIndex];

    return (
      <div className="flex flex-col">
        <div className="flex flex-col gap-3 mb-10 group">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="
              w-full h-40 object-cover mb-2
              transition-transform duration-500 ease-out
              group-hover:scale-105
            "
          />
          <div className="flex flex-start items-center gap-2">
            <span className="text-sm font-medium text-dark">
              {currentItem.tag}
            </span>
            <span className="text-sm text-[#DEDEDE] font-normal">|</span>
            <span className="text-sm text-semiLight font-normal">
              {currentItem.date}
            </span>
          </div>
          <div className="text-base font-normal text-semiDark line-clamp-2 overflow-hidden text-ellipsis">
            {currentItem.title}
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 sm:hidden">
          <button
            onClick={prevItem}
            className="mr-2 flex gap-2 px-3 py-2 border font-semibold text-base border-buttonBorder rounded-xs"
          >
            <Image
              priority
              src="/images/left.svg"
              height={16}
              width={16}
              alt="Previous"
            />
            Previous
          </button>
          <button
            onClick={nextItem}
            className="mr-2 flex gap-2 px-3 py-2 border font-semibold text-base border-buttonBorder rounded-xs"
          >
            Next{" "}
            <Image
              priority
              src="/images/right.svg"
              height={16}
              width={16}
              alt="Next"
            />{" "}
          </button>
        </div>
      </div>
    );
  };

  const renderDesktopView = () => {
    if (!article.exploreMore || article.exploreMore.length === 0) return null;

    return article.exploreMore.map((e) => (
      <div className="flex flex-col gap-3 mb-10 group" key={e.slug}>
        <img
          src={e.image}
          alt={e.title}
          className="
            w-full h-40 object-cover mb-2
            transition-transform duration-500 ease-out
            group-hover:scale-105
          "
        />
        <div className="flex flex-start items-center gap-2">
          <span className="text-sm font-medium text-dark">{e.tag}</span>
          <span className="text-sm text-[#DEDEDE] font-normal">|</span>
          <span className="text-sm text-semiLight font-normal">{e.date}</span>
        </div>
        <div className="text-base font-normal text-semiDark line-clamp-2 overflow-hidden text-ellipsis">
          {e.title}
        </div>
      </div>
    ));
  };

  return article.exploreMore && article.exploreMore.length > 0 ? (
    <>
      <div className="block sm:hidden">{renderMobileView()}</div>

      <div className="hidden sm:block">{renderDesktopView()}</div>
    </>
  ) : (
    <p className="text-sm text-semiLight">No items</p>
  );
};

export default ExploreMore;
