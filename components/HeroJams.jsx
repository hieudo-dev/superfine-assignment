import clsx from "clsx";
import HeroJamsSlide from "./HeroJamsSlide";
import { useState } from "react";

export default function HeroJams({ jams }) {
  const [current, setCurrent] = useState(0);

  return (
    <section>
      <div className="carousel w-full">
        {jams.map((jam) => (
          <HeroJamsSlide jam={jam} />
        ))}
      </div>
      <div className="flex justify-center w-full py-2 gap-6">
        {jams.map((jam, index) => (
          <a
            key={jam.id}
            href={`#${jam.id}`}
            className={clsx([
              "btn border-0 btn-circle min-h-0 h-3 w-3 block",
              current === index ? "bg-gray-100" : "bg-gray-700",
            ])}
            onClick={() => setCurrent(index)}
          ></a>
        ))}
      </div>
    </section>
  );
}
