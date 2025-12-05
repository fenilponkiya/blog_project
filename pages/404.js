import Head from "next/head";
import { useRouter } from "next/navigation";

export default function Custom404() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>404 | Page Not Found</title>
        <meta
          name="description"
          content="The page you are looking for does not exist. Return to the homepage."
        />
        <meta name="robots" content="noindex" />
      </Head>

      <div className="min-h-screen flex flex-col items-center justify-center  px-4">
        <div className="text-center max-w-md">
          <div className="mx-auto mb-8">
            <img
              src="https://plus.unsplash.com/premium_vector-1737035748562-972d777fd339?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Page not found"
              priority
            />
          </div>

          <h1 className="text-8xl font-extrabold text-primary mb-4">404</h1>

          <h2 className="text-2xl font-semibold text-secondary mb-3">
            Oops! Page not found
          </h2>

          <p className="text-secondary mb-8 leading-relaxed">
            The page you are trying to access doesn’t exist or has been moved.
            Let’s get you back on track.
          </p>

          <div className="flex items-center justify-center gap-4">
            <span
              onClick={() => router.replace("/")}
              className="px-6 py-3 rounded-md bg-primary text-white font-semibold  transition cursor-pointer"
            >
              Go Home
            </span>

            <span
              onClick={() => router.replace("/articles")}
              className="px-6 py-3 rounded-md border border-buttonBorder text-primary font-semibold cursor-pointer"
            >
              View Articles
            </span>
          </div>
        </div>

        <p className="mt-12 text-sm text-semiLight">
          Lost? Use the navigation above to find what you’re looking for.
        </p>
      </div>
    </>
  );
}
