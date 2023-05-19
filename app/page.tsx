import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="flex items-start min-h-screen font-sans flex-col p-24">
        <div className="w-full max-w-1xl md:flex">Hey! My name is Trevor.</div>
        <div className="w-full max-w-2xl justify-center md:flex">
          Welcome to my site.
        </div>
        <div className="w-full max-w-5xl justify-end md:flex">
          It is a little messy, but I like it this way.
        </div>
        <div className="w-full max-w-5xl mt-12 justify-center md:flex">
          {
            "I'm working on a few things and will post them here when they are done."
          }
        </div>
        <div className="w-full max-w-5xl mt-12 justify-between md:flex">
          <a href="https://github.com/tbrixey" target="_blank">
            <button className="rounded-full bg-[#4078c0] px-8 py-2">
              GitHub
            </button>
          </a>
          <a href="mailto:trevorbrixeyapps@gmail.com">
            <button className="rounded-full bg-[#4078c0] px-8 py-2">
              Contact me
            </button>
          </a>
        </div>
        <div className="w-full flex items-center  mt-4 flex-col">
          <span>here is a good cat picture</span>
          <Image
            alt="bread-cat"
            width="256"
            height="256"
            src="/bread-cat.jpg"
          />
        </div>
      </main>
      <footer className="font-mono float-right">xD</footer>
    </div>
  );
}
