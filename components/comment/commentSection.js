import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import SectionHeader from "../common/sectionHeader";

const CommentSection = ({
  comments,
  loadingComments,
  commentsError,
  handleAddComment,
}) => {
  return (
    <section className="mt-10">
      <SectionHeader title="Comments" />

      {loadingComments ? (
        <div className="space-y-2">
          <div className="h-12 bg-gray-100 animate-pulse rounded" />
          <div className="h-12 bg-gray-100 animate-pulse rounded" />
        </div>
      ) : commentsError ? (
        <p className="text-red-500">{commentsError}</p>
      ) : (
        <CommentList comments={comments} />
      )}

      <CommentForm onAdd={handleAddComment} />
    </section>
  );
};

export default CommentSection;
