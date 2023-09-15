import clsx from "clsx";

export default function FeaturedJams({ jams, className }) {
  return (
    <section className={clsx("container mx-auto px-4 lg:px-10", className)}>
      <h2 className="text-2xl font-bold ml-2 mb-4 text-gray-200">
        FEATURED JAMS
      </h2>
      <div className="grid lg:grid-cols-3 gap-6">
        {jams.map((jam) => (
          <div className="card card-compact w-full bg-bluegray" key={jam.id}>
            <figure>
              <img
                src={jam.thumbnailImageUrl}
                className="aspect-video lg:aspect-thumbnail w-full rounded-3xl"
                alt={jam.name}
              />
            </figure>
            <div className="card-body gap-0">
              <h2 className="font-bold text-gray-300 mb-0 text-3xl">
                {jam.name}
              </h2>
              <p className="text-pink text-lg mb-1">
                Hosted by{" "}
                <span>
                  {jam.hostProfiles.map((host) => host.username).join(", ")}
                </span>
              </p>
              <p className="text-gray-300 italic text-base mb-1">
                Start in 14 days, 12 hours
              </p>
              <div className="overflow-hidden h-4 relative rounded-xl bg-gray-500 bg-opacity-20">
                <div className="bg-gradient rounded-xl absolute top-0 bottom-0 left-0 w-1/2"></div>
              </div>
              <div className="text-gray-300 italic text-base">
                <p className="inline-flex mr-4">{jam.joinedCount} Joined</p>
                <p className="inline-flex">{jam.submissionCount} Submissions</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-3">
        <button className="border-2 bg-transparent border-gray-700 text-lg text-gray-300 rounded-full px-2 py-1 min-h-0 h-auto">
          VIEW MORE
        </button>
      </div>
    </section>
  );
}
