import { cn } from "../../lib/utils";
import Marquee from "../../components/Marque";

const reviews = [
  {
    name: "Davis",
    username: "@davis",
    body: "Amazing! The whole process was smooth and it saved a lot of time",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Harry Uppal",
    username: "Switchfixx Electricals",
    body: "Nice work, I would love to connect with you guys for a new project soon",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Aman",
    username: "@aman",
    body: "Me and my team appreciate the extra efforts you guys put in our work",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Aufour.co",
    username: "@aufour",
    body: "Amazing work, all of our customers are very satisfied with you product",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Srishti Goyal",
    username: "@srishti",
    body: "Thanks for saving my time, Would love to work with you guys again",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Akash Gupta",
    username: "@akash",
    body: "Nice and clean work, I wish you guys good luck for your future work",
    img: "https://avatar.vercel.sh/john",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative w-64  cursor-pointer overflow-hidden rounded-xl container1 border p-10",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-white">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border  ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r from-white dark:from-background"></div> */}
      {/* <div className="pointer-events-none absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l from-white dark:from-background"></div> */}
    </div>
  );
}

export default MarqueeDemo;
