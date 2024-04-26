import React from "react";

export default function Info() {
  return (
    <div className="h-full w-full flex items-start justify-center gap-6 flex-col ">
      <h1 className="md:text-7xl font-bold">ABOUT ME</h1>
      <h2 className="md:text-5xl font-bold">who am i ?</h2>
      <span className="md:text-2xl font-semibold">
        I’m a frontend developer with 2 years of experience in web development.
      </span>
      <span className="md:text-2xl font-semibold">
        Currently located in Ho Chi Minh City, Vietnam.Very excited about the
        opportunities to create a appeal and modern user interface with great
        user experience.
      </span>
      <span className="md:text-2xl font-semibold">
        In my free time, i love to learn about how the graphic effect works,
        reading books, playing games.
      </span>
    </div>
  );
}
