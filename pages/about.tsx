import Link from "next/link";

const AboutPage = () => {
  return (
    <div>
      <h1>About</h1>

      <Link href="/">
        <button>Back home</button>
      </Link>
    </div>
  );
};

export default AboutPage;
