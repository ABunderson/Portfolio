import { Fragment } from "react";
import Image from "next/image";

export default function Bio({}) {
  return (
    <div className="flex gap-4 sm:flex-col md:flex-row">
      <div className="flex flex-col justify-center gap-4">
        <h1>About me</h1>
        <p>
          Hi, I&apos;m Adrienne Bunderson and I am a web developer / frontend
          software engineer based in Utah. I have a lot of experience in
          React.js both professional and personal. I love sites that look clean
          modern and slick along with being easy to use.
        </p>
        <h2>Story</h2>
        <p>
          I recently graduated with a BS in Web Design & Development from
          Brigham Young University - Idaho. When I first started college I
          wasn't sure what I wanted to go into besides something to do with
          computers. I took a wide variety of courses and as sson as I hit my
          first web development course I was hooked. I love having a concept for
          a website and following through. Making everything fit together and
          work brings me a lot of joy.
        </p>
        <h2>Current Projects</h2>
        <p>
          I have a couple of different things I am working on right now. My
          biggest priority is creating this portfolio. I am working on deep
          diving into Next.js to make this site the most streamlined and
          effective it can be. This is also my first time using TypeScript and
          Tailwind and it is fun learning what they can bring to my skillset.
          I'm also doing a bit of freelance work on a WordPress site for an
          author friend. He has decided to use Elementor but is a bit out of his
          depth and I've had fun figuring out what parts of his site are
          controlled in different places.
        </p>
        <h2>Skills</h2>
        <p>
          I am extremely comfortable with React.js, JavaScript, HTML, and CSS. I
          have worked with them for years and a lot of what I have been creating
          currently uses React. I have worked in a lot of different languages
          over the years including PHP, .NET, Java, and Python. I have worked
          with structured and unstructured databases such as MySQL and MongoDB.
          I am comfortable on Macs and Windows. I have used multiple IDEs.
        </p>
        <h2>Fun facts</h2>
        <p>
          Some of my favorite hobbies are puzzles and reading. I have a rubic
          cube collection of 13 cubes of various sizes and shapes. I also enjoy
          jigsaw puzzles. My largest puzzle is 4,000 pieces and I have many
          smaller (piece count wise) puzzles. Does it count as small when you
          can sit on it and work on it at the same time?
        </p>

        {/* add links here for github, resume, linked in, email/contact form */}
      </div>
      <div className="w-[400px] h-[400px] p-[10px] max-w-full bg-th-purple rounded-lg flex-shrink-0">
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
  );
}
