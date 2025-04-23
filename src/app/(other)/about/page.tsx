import { ProfileImg } from '@/app/components/profileImg';

export default function About({}) {
  return (
    <div className="flex gap-4 flex-col md:flex-row">
      <div className="flex flex-col justify-center gap-4">
        <h1>About me</h1>
        <p>
          Hi, I&apos;m Adrienne Bunderson and I am a web developer / frontend software engineer
          based in Utah. I have a lot of experience in React.js both professional and personal. I
          love sites that look clean modern and slick along with being easy to use.
        </p>
        <h2>Story</h2>
        <p>
          I recently graduated with a BS in Web Design & Development from Brigham Young University -
          Idaho. When I first started college I wasn&apos;t sure what I wanted to go into besides
          something to do with computers. I took a wide variety of courses and as sson as I hit my
          first web development course I was hooked. I love having a concept for a website and
          following through. Making everything fit together and work brings me a lot of joy.
        </p>
        <h2>Current Projects</h2>
        <p>
          I have a couple of different things I am working on right now. My biggest priority is
          creating this portfolio. I am working on deep diving into Next.js to make this site the
          most streamlined and effective it can be. This is also my first time using TypeScript and
          Tailwind and it is fun learning what they can bring to my skillset. I&apos;m also doing a
          bit of freelance work on a WordPress site for an author friend. He has decided to use
          Elementor but is a bit out of his depth and I&apos;ve had fun figuring out what parts of
          his site are controlled in different places.
        </p>
        <h2>Skills</h2>
        <p>
          I am extremely comfortable with React.js, JavaScript, HTML, and CSS. I have worked with
          them for years and a lot of what I have been creating currently uses React. I have worked
          in a lot of different languages over the years including PHP, .NET, Java, and Python. I
          have worked with structured and unstructured databases such as MySQL and MongoDB. I am
          comfortable on Macs and Windows. I have used multiple IDEs.
        </p>
        <h2>Fun facts</h2>
        <p>
          Some of my favorite hobbies are puzzles and reading. I have a rubic cube collection of 13
          cubes of various sizes and shapes. I also enjoy jigsaw puzzles. My largest puzzle is 4,000
          pieces and I have many smaller (piece count wise) puzzles. Does it count as small when you
          can sit on it and work on it at the same time?
        </p>

        {/* add links here for github, linked in, email/contact form */}
        <a
          href="https://docs.google.com/document/d/17E8oCbpet2yCK9reDphRXp3V3rXfJC_ygrK7gB0lq8Y/export?format=pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="self-start inline-block bg-th-purple px-4 py-2 rounded hover:bg-th-dk-green hover:text-white transition mb-4"
        >
          Download Resume
        </a>

        <a
          href="https://docs.google.com/document/d/17E8oCbpet2yCK9reDphRXp3V3rXfJC_ygrK7gB0lq8Y/preview"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-th-purple px-4 py-2 rounded hover:bg-th-dk-green hover:text-white transition mb-4 w-fit"
        >
          View Resume
        </a>
      </div>
      <ProfileImg gradient={false} />
    </div>
  );
}
