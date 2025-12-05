import { useState } from "react";
import SectionHeader from "../common/sectionHeader";
import Image from "next/image";
import BadSVG from "../svg/badSVG";
import SemiBadSVG from "../svg/semiBadSVG";
import AverageSVG from "../svg/averageSVG";
import SemiGoodSVG from "../svg/semiGoodSVG";
import GoodSVG from "../svg/goodSVG";

export default function CommentForm({ onAdd }) {
  const [author, setAuthor] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [activeRating, setActiveRating] = useState("good");
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");

  function formatDate(dateString) {
    const date = new Date(dateString);

    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }

  const rating = () => {
    switch (activeRating) {
      case "bad":
        return 1;
      case "average":
        return 2;
      case "normal":
        return 3;
      case "nice":
        return 4;
      case "good":
        return 5;
      default:
        return 0;
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!author.trim()) {
      newErrors.author = "Name is required";
    } else if (author.trim().length < 2) {
      newErrors.author = "Name must be at least 2 characters";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!text.trim()) {
      newErrors.text = "Comment is required";
    } else if (text.trim().length < 10) {
      newErrors.text = "Comment must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitError("");

    if (!validateForm()) {
      return;
    }

    setSubmitting(true);

    try {
      await new Promise((r) => setTimeout(r, 400));
      const newComment = {
        id: "local-" + Date.now(),
        author: author.trim(),
        email: email.trim(),
        text: text.trim(),
        date: formatDate(new Date().toISOString()),
        rating: rating(),
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop",
      };
      onAdd(newComment);
      setAuthor("");
      setEmail("");
      setText("");
      setErrors({});
    } catch (error) {
      setSubmitError("Failed to submit comment. Please try again.");
      console.error("Error submitting comment:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="mt-10">
      <SectionHeader title="Add a comment" />

      <form onSubmit={handleSubmit} className="space-y-3 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex flex-col">
              <label className="mb-1 text-sm text-inputLabel font-medium">
                Name
              </label>
              <input
                value={author}
                onChange={(e) => {
                  setAuthor(e.target.value);
                  if (errors.author) {
                    setErrors((prev) => ({ ...prev, author: "" }));
                  }
                }}
                className={`border-none p-3 rounded-xl bg-inputBg w-full ${
                  errors.author ? "ring-2 ring-red-500" : ""
                }`}
              />
              {errors.author && (
                <p className="text-red-500 text-sm mt-1">{errors.author}</p>
              )}
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-sm text-inputLabel font-medium">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) {
                    setErrors((prev) => ({ ...prev, email: "" }));
                  }
                }}
                className={`border-none p-3 rounded-xl bg-inputBg w-full ${
                  errors.email ? "ring-2 ring-red-500" : ""
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm text-inputLabel font-medium">
              Comment
            </label>
            <textarea
              value={text}
              onChange={(e) => {
                setText(e.target.value);
                if (errors.text) {
                  setErrors((prev) => ({ ...prev, text: "" }));
                }
              }}
              placeholder="Type Anything..."
              rows={4}
              className={`border-none p-3 rounded-xl bg-inputBg w-full h-full ${
                errors.text ? "ring-2 ring-red-500" : ""
              }`}
            />
            {errors.text && (
              <p className="text-red-500 text-sm mt-1">{errors.text}</p>
            )}
          </div>
        </div>

        <div className="pt-4 flex flex-wrap md:flex-nowrap gap-6 h-full items-stretch">
          <div className="bg-inputBg rounded-xl flex-grow flex flex-wrap md:flex-nowrap gap-2 items-center justify-between px-4 py-1">
            <p className="text-dark font-medium text-base  mr-4">
              Rate the usefulness of the article
            </p>
            <div className="flex flex-wrap md:flex-nowrap gap-1">
              <div
                onClick={() => setActiveRating("bad")}
                className={`flex gap-2 items-center p-2 md:px-4 px-3 rounded-xl cursor-pointer transition-colors ${
                  activeRating === "bad" ? "bg-[#FF0412]" : "hover:bg-gray-100"
                }`}
              >
                <BadSVG color={activeRating === "bad" ? "white" : "#FF0412"} />
                {activeRating === "bad" ? (
                  <span className="font-medium text-sm text-white">Bad</span>
                ) : null}
              </div>
              <div
                onClick={() => setActiveRating("average")}
                className={`flex gap-2 items-center p-2 md:px-4 px-3 rounded-xl cursor-pointer transition-colors ${
                  activeRating === "average"
                    ? "bg-[#FF6700]"
                    : "hover:bg-gray-100"
                }`}
              >
                <SemiBadSVG
                  color={activeRating === "average" ? "white" : "#FF6700"}
                />
                {activeRating === "average" ? (
                  <span className="font-medium text-sm text-white">
                    Average
                  </span>
                ) : null}
              </div>
              <div
                onClick={() => setActiveRating("normal")}
                className={`flex gap-2 items-center p-2 md:px-4 px-3 rounded-xl cursor-pointer transition-colors ${
                  activeRating === "normal"
                    ? "bg-[#FFB416]"
                    : "hover:bg-gray-100"
                }`}
              >
                <AverageSVG
                  color={activeRating === "normal" ? "white" : "#FFB416"}
                />
                {activeRating === "normal" ? (
                  <span className="font-medium text-sm text-white">Normal</span>
                ) : null}
              </div>
              <div
                onClick={() => setActiveRating("nice")}
                className={`flex gap-2 items-center p-2 md:px-4 px-3 rounded-xl cursor-pointer transition-colors ${
                  activeRating === "nice" ? "bg-[#1C9AF4]" : "hover:bg-gray-100"
                }`}
              >
                <SemiGoodSVG
                  color={activeRating === "nice" ? "white" : "#1C9AF4"}
                />
                {activeRating === "nice" ? (
                  <span className="font-medium text-sm text-white">Nice</span>
                ) : null}
              </div>
              <div
                onClick={() => setActiveRating("good")}
                className={`flex gap-2 items-center p-2 md:px-4 px-3 rounded-xl cursor-pointer transition-colors ${
                  activeRating === "good" ? "bg-[#00BA5C]" : "hover:bg-gray-100"
                }`}
              >
                <GoodSVG
                  color={activeRating === "good" ? "white" : "#00BA5C"}
                />
                {activeRating === "good" ? (
                  <span className="font-medium text-sm text-white">Good</span>
                ) : null}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="px-6 py-3 rounded-xl  flex items-center gap-2 bg-dark font-medium text-sm text-white transition-colors disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap flex-shrink-0 h-full"
            disabled={submitting}
          >
            <Image
              src="/images/chat.svg"
              alt="Chat Icon"
              width={14}
              height={14}
            />
            {submitting ? "Sending..." : "Send"}
          </button>
        </div>

        {submitError && (
          <div className="text-red-500 text-sm mt-2">{submitError}</div>
        )}
      </form>
    </section>
  );
}
