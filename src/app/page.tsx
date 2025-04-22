import Image from "next/image";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <>
    <main className="flex flex-col justify-center h-full bg-gradient-to-t from-th-purple via-th-green to-white flex-grow">
      <div className="grid grid-cols-2 lg:max-w-7xl text-black m-auto gap-4">
        <div className="flex flex-col justify-center gap-4 w-96">
          <h1>
            Hello,
            <br />
            I&apos;m Adrienne Bunderson
          </h1>
          <p>
            I&apos;m a front-end developer that enjoys crafting attractive easy to
            use websites
          </p>

          <p>
            This portfolio is going through large renovations. Please excuse any
            mess while I fix it up.
            <br/>
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
        <div className="w-[400px] h-[400px] p-[10px] bg-gradient-to-t from-white via-th-green to-th-purple rounded-lg">
          <div className="w-full h-full relative rounded-lg overflow-hidden bg-white ">
            <Image
              src="/abProfile.jpg"
              alt="Profile image"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </main>
    <Footer/>
    </>
  );
}
