import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="site-section">
        <div className="wrapper flex flex-col items-center gap-2">
          <h1 className="text-center text-5xl font-bold lg:text-7xl">
            Keep track of issues, find solutions faster.
          </h1>
          <p className="mx-auto text-center text-lg lg:w-4/5 lg:text-xl">
            Get updates on issues that arise, find solutions with all the help
            you can get and keep accessible for the next person.
          </p>
          <Link href={"/auth/register"} className="btn primary lg">
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}
