import ExploreMore from "./ExploreMore";
import TourGuides from "./TourGuides";

const Rightbar = ({ article }) => {
  return (
    <aside className="sm:space-y-20 space-y-10">
      <div className="">
        <h3 className="font-semibold text-xl text-primary mb-10">
          Explore More
        </h3>
        <div className="space-y-3">
          <ExploreMore article={article} />
        </div>
      </div>

      <div className="">
        <h3 className="font-semibold text-xl text-primary mb-10">
          Tour Guides{" "}
        </h3>
        <div className="space-y-3">
          <TourGuides article={article} />
        </div>
      </div>
    </aside>
  );
};

export default Rightbar;
