// "use client";
// import { useRef } from "react";
// import Picture1 from "../../../public/eazweb.webp";
// import Picture2 from "../../../public/felina.webp";
// import Picture3 from "../../../public/apex.webp";
// import Image from "next/image";
// import { motion, useScroll, useTransform } from "framer-motion";

// export default function Index() {
//   const container = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ["start end", "end start"],
//   });
//   const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
//   const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
//   const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

//   const projects = [
//     [
//       { src: Picture1, y: sm },
//       { src: Picture2, y: md },
//       { src: Picture3, y: lg },
//     ],
//     [
//       { src: Picture1, y: sm },
//       { src: Picture2, y: md },
//       { src: Picture3, y: lg },
//     ],
//     [
//       { src: Picture1, y: sm },
//       { src: Picture2, y: md },
//       { src: Picture3, y: lg },
//     ],
//     [
//       { src: Picture1, y: sm },
//       { src: Picture2, y: md },
//       { src: Picture3, y: lg },
//     ],
//   ];

//   return (
//     <div ref={container} className="mt-[50vh] min-h-screen">
//       {projects.map((project, index) => (
//         <div key={`project_${index}`} className="mb-[70vh]">
//           <div className="relative flex justify-center items-center mt-[5vh]">
//             {project.map(({ src, y }, i) => (
//               <motion.div
//                 style={{ y }}
//                 key={`i_${index}_${i}`}
//                 className={`absolute ${
//                   i === 0 ? "h-[60vh] w-[50vh] z-[1]" : ""
//                 } ${i === 1 ? "left-[55vw] top-[15vh] h-[40vh] w-[30vh] z-[2]" : ""} ${
//                   i === 2 ? "left-[27.5vw] top-[40vh] h-[25vh] w-[20vh] z-[3]" : ""
//                 }`}
//               >
//                 <Image src={src} placeholder="blur" alt="image" fill className="object-cover" />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
