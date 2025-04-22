import { Footer } from './components/footer';
import { ProfileImg } from './components/profileImg';

export default function Home() {
  return (
    <>
      <main className="flex flex-col justify-center h-full bg-gradient-to-t from-th-purple via-th-green to-white flex-grow px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:max-w-7xl text-black m-auto gap-4">
          <div className="flex flex-col justify-center gap-4 w-full max-w-96">
            <h1>
              Hello,
              <br />
              I&apos;m Adrienne Bunderson
            </h1>
            <p>
              I&apos;m a front-end developer that enjoys crafting attractive easy to use websites
            </p>

            <p>
              This portfolio is going through large renovations. Please excuse any mess while I fix
              it up.
              <br />
              <a
                href="https://planteddeep.wixsite.com/webworks"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-purple-500 transition-colors"
              >
                Old Portfolio
              </a>
            </p>
          </div>
          <ProfileImg gradient={true} />
        </div>
      </main>
      <Footer />
    </>
  );
}
