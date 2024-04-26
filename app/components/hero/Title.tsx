import React from "react";

const Title = () => {
  const bigText = ["Lesson", "Trying", "Knowledge"];

  return (
    <div className="flex flex-col gap-1">
      {bigText.map((text) => (
        <p
          className="first-letter:text-5xl first-letter:text-blue-600 first-letter:pr-1"
          key={text}
        >
          {text}
        </p>
      ))}
    </div>
  );
};

export default Title;
