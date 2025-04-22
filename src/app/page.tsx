import { Greet } from "./components/Greet";
import { Counter } from "./components/Counter";
import PolaroidGallery from "./components/PolaroidGallery";

export default function Home() {
  return (
    <main className="flex flex-col justify-center h-full bg-gradient-to-t from-th-purple via-th-green to-white flex-grow">
      <div className="grid grid-cols-2 lg:max-w-7xl text-black m-auto gap-4">
        <div className="flex flex-col justify-center bg-blue-100">
          <h1>Adrienne Bunderson</h1>
          <p>Web Developer and Frontend Software Engineer</p>
          <p>tagline something simple</p>
        </div>
        <PolaroidGallery />
        {/* <img
          src="/abProfile.jpg"
          alt="Profile image"
          className="max-w-40"
        /> */}
      </div>
    </main>
  );
}
