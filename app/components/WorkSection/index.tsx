import WorkBox from "./WorkBox";
import TcomPic from "@/public/images/background-tmt.png";
import EcomPic from "@/public/images/background-ecom.png";
import KiengLa from "@/public/images/background-kiengla.png";

export default function Works() {
  const works = [
    {
      imgSrc: EcomPic,
      name: "ECOM356 ERP HRM",
      link: "https://www.ecom365.app",
      company: "ECOM365.",
      tech: ["ReactJS", "CSS", "HTML", "AntD"],
      year: 2023,
    },
    {
      imgSrc: TcomPic,
      name: "TMT SUBCLO",
      link: "https://pre.subclo.jp/simulation",
      company: "TCOM CORP.",
      tech: ["ReactJS", "SCSS", "HTML", "AntD"],
      year: 2022,
    },
    {
      imgSrc: KiengLa,
      name: "Kieng La Ba Ria",
      link: "",
      company: "Kieng La Ba Ria.",
      tech: ["NextJS", "TailwindCss", "Figma"],
      year: "Freelance",
    },
  ];
  return (
    <section id="works" className="h-fit w-full bg-black p-10">
      <h1 className="lg:text-7xl text-5xl text-gray-300 font-bold text-center ">
        {"◓ SELECTED WORKS ◓"}
      </h1>
      {works.map((work, index) => (
        <WorkBox key={work.link} reverse={index % 2 === 0} {...work} />
      ))}
    </section>
  );
}
