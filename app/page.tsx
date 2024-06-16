import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="bg-slate-600 text-center">SITE IS WORK IN PROGRESS</div>
      <main className="flex w-full items-start min-h-screen font-mono flex-col p-12 lg:p-24">
        <div className="flex flex-col justify-center items-center">
          <div className="text-4xl">
            <Image
              src="/avatar-placeholder.jpg"
              className="rounded-full"
              alt="Profile Picture of Me"
              width={300}
              height={300}
            />
          </div>
          <div className="mt-12 text-4xl">
            Hey! My name is Trevor Brixey. Check out my projects and what
            I&apos;ve been working on.
          </div>
        </div>
        <div className="flex justify-center items-center flex-col w-full">
          <div className="mt-12 mb-8 text-4xl underline">Projects</div>
          <div>
            <figure className="bg-slate-700 max-w-sm rounded overflow-hidden shadow-lg relative cursor-pointer hover:bg-slate-600">
              <Image
                className="w-full object-contain"
                src="/bread-cat.jpg"
                alt="A cat with bread on its head"
                width={200}
                height={200}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">My Portfolio</div>
                <p className="text-base">
                  The site you are currently on! You don&apos;t need a picture
                  so here is a cat
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Next.js
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Vercel
                </span>
                <a
                  href="https://github.com/tbrixey/my-site"
                  target="_blank"
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 underline"
                >
                  GitHub
                </a>
              </div>
            </figure>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col w-full">
          <div className="mt-12 mb-8 text-4xl underline">Contact Info</div>
        </div>
      </main>
    </div>
  );
}
