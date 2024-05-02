import WorkBox from "./WorkBox";

export default function Works() {
  const works = [
    {
      imgSrc: "/images/background-ecom.png",
      name: "ECOM356 ERP HRM",
      link: "https://www.ecom365.app",
      company: "ECOM365.",
      tech: ["ReactJS", "CSS", "HTML", "AntD"],
      year: 2023,
    },
    {
      imgSrc: "/images/background-tmt.png",
      name: "TMT SUBCLO",
      link: "https://pre.subclo.jp/simulation",
      company: "TCOM CORP.",
      tech: ["ReactJS", "SCSS", "HTML", "AntD"],
      year: 2022,
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
