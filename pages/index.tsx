import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-6xl font-bold">
        Welcome to
          <a className="text-blue-600" href="https://nextjs.org">
          Next.js!
          </a>
      </h1>

    </div>
  );
};

export default Home;
