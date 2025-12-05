import Head from "next/head";
import Layout from "../components/layout/Layout";
import Link from "next/link";

export default function Page() {
  return (
    <Layout>
      <Head>
        <title>Performance Marketing Agency | Grow Your Business</title>
        <meta
          name="description"
          content="We are an innovative and performance-driven marketing agency helping brands grow with data-backed strategies."
        />
      </Head>

      <section className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          We are an <span className="text-primary">innovative</span> &{" "}
          <span className="text-primary">performance-driven</span> marketing
          agency.
        </h1>

        <p className="max-w-3xl mx-auto text-light text-lg mb-10 leading-relaxed">
          We help startups and enterprises scale faster through data-driven
          strategies, conversion-focused campaigns, and cutting-edge digital
          solutions.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/articles"
            className="px-8 py-3 rounded-md bg-primary text-white font-semibold"
          >
            Get a Free Consultation
          </Link>

          <Link
            href="/articles"
            className="px-8 py-3 rounded-md border border-buttonBorder text-primary font-semibold "
          >
            View Our Work
          </Link>
        </div>
      </section>
    </Layout>
  );
}
