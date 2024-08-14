"use client";
import { usePathname, useRouter } from "next/navigation";
import { animatePageout } from "../../../lib/animations";

const TransitionLink = ({ href, label }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname != href) {
      animatePageout(href, router);
    }
  };
  return (
    <div className="" onClick={handleClick}>
      {label}
    </div>
  );
};

export default TransitionLink;
