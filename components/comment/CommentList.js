export default function CommentList({ comments }) {
  if (!comments || comments.length === 0) {
    return <p className="text-gray-500">No comments yet. Be the first!</p>;
  }

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

  return (
    <ul className="space-y-4">
      {comments.map((c, index) => (
        <li key={c.id} className="">
          <div className="flex items-center gap-4 ">
            <img
              src={c.avatar ?? ""}
              className="w-[59.87px] h-[60px] rounded-full object-cover"
              alt={c.author}
            />
            <div className="w-full">
              <div className="flex flex-wrap items-center justify-between">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="text-base font-normal text-dark">
                    {c.author}
                  </div>
                  <div className="flex items-center text-sm  gap-4 text-semiDark font-normal">
                    {renderStars(c.rating)}({c.rating})
                  </div>
                </div>
                <div className="text-sm font-normal text-semiLight">
                  {c.date}
                </div>
              </div>
              <p className="text-primary font-normal text-sm">{c.text}</p>
            </div>
          </div>
          {comments.length - 1 !== index && (
            <hr className="mx-0 my-6 bg-divider h-[1px]" />
          )}
        </li>
      ))}
    </ul>
  );
}
