import Reveal from "../Reveal/Reveal";
const Title = () => {
  const bigText = [
    {
      firstLetter: "L",
      other: "esson",
      lastWord: "E",
    },
    {
      firstLetter: "T",
      other: "rying",
      lastWord: "RI",
    },
    {
      firstLetter: "K",
      other: "nowledge",
      lastWord: "IET",
    },
  ];

  return (
    <div className="flex flex-col gap-1 ">
      {bigText.map((text, index) => (
        <Reveal key={index} custom={index}>
          <>
            <span className="md:text-9xl sm:text-7xl text-5xl font-bold">
              {text.firstLetter}
            </span>
            <span
              className="md:text-8xl sm:text-6xl text-4xl  first-letter:pr-1 uppercase font-extrabold transparent-border-text"
              key={text.other}
            >
              {text.other}
            </span>
            <span
              className="md:text-8xl sm:text-6xl text-4xl  first-letter:pr-1 uppercase font-extrabold "
              key={text.lastWord}
            >
              - {text.lastWord}
            </span>
          </>
        </Reveal>
      ))}
    </div>
  );
};

export default Title;
