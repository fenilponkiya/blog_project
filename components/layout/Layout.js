import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const pathname = usePathname();
  const CustomLink = ({ href, children, exact = false }) => {
    const isActive = exact ? pathname === href : pathname.startsWith(href);
    return (
      <>
        <Link href={href}>
          <span
            className={`text-sm uppercase  text-secondary hover:underline ${
              isActive ? "font-bold" : ""
            }`}
          >
            {children}
          </span>
        </Link>
        &nbsp;{"/"}&nbsp;
      </>
    );
  };
  return (
    <div className="min-h-screen flex flex-col pt-8 ">
      <header className="">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-center">
          <nav>
            <CustomLink href="/" exact={true}>
              Home
            </CustomLink>
          </nav>
          <nav>
            <CustomLink href="/articles">Articles</CustomLink>
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>
    </div>
  );
}
