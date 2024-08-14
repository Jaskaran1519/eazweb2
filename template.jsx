// "use client";

// import { useEffect } from "react";
// import { animatePagein } from "../lib/animations";

// const Template = ({ children }) => {
//   useEffect(() => {
//     const timeoutId = setTimeout(() => {
//       animatePagein();
//     }, 0); // This delay ensures the animation runs after hydration

//     return () => clearTimeout(timeoutId);
//   }, []);

//   return (
//     <>
//       <div
//         className="w-full h-screen z-50 fixed top-0 left-0 bg-zinc-700"
//         id="banner"
//       ></div>
//       {children}
//     </>
//   );
// };

// export default Template;
