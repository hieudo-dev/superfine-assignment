import { useEffect, useMemo, useState } from "react";

export default function HeroJamsSlide({ jam }) {
  const targetDate = useMemo(() => new Date(jam.endTime), [jam.startTime]);
  const [countdown, setCountdown] = useState(calculateCountdown());

  function calculateCountdown() {
    const currentDate = new Date();
    const difference = targetDate - currentDate;
    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

    return { days, hours, minutes };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(calculateCountdown());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id={jam.id}
      key={jam.id}
      className="min-h-[450px] lg:min-h-[400px] carousel-item relative w-full flex flex-wrap lg:flex-nowrap"
    >
      <img src={jam.thumbnailImageUrl} className="w-full lg:basis-1/2" />
      <div className="bg-opacity-25 backdrop-blur-sm text-center lg:text-left h-full lg:bg-opacity-100 bg-bluegray absolute lg:static lg:basis-1/2 p-4 lg:px-20 py-16">
        <p className="text-white text-5xl">{jam.name}</p>
        <p className="italic text-base lg:text-lg text-pink">
          Hosted by
          <span>
            {" "}
            {jam.hostProfiles.map((host) => host.username).join(", ")}
          </span>
        </p>
        <p className="mt-4 text-xl text-gray-300">Starts in</p>
        <div className="flex flex-wrap justify-center lg:justify-between">
          <div className="grid grid-cols-3 mb-5 lg:mb-0">
            <p className="text-4xl text-gray-200">{countdown.days}</p>
            <p className="text-4xl text-gray-200">{countdown.hours}</p>
            <p className="text-4xl text-gray-200">{countdown.minutes}</p>
            <p className="text-xl text-gray-200">days</p>
            <p className="text-xl text-gray-200">hours</p>
            <p className="text-xl text-gray-200">minutes</p>
          </div>
          <div className="grid grid-cols-2 text-center">
            <p className="text-4xl text-gray-200">{jam.joinedCount}</p>
            <p className="text-4xl text-gray-200">{jam.submissionCount}</p>
            <p className="text-xl text-gray-200">Joined</p>
            <p className="text-xl text-gray-200">Submission</p>
          </div>
        </div>
        <button className="btn block m-auto bg-gradient no-outline text-gray-100 text-2xl rounded-full mt-8 border-0">
          JOIN NOW!
        </button>
      </div>
    </div>
  );
}
