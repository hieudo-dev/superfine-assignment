import clsx from "clsx";

export default function FeaturedGames({ games, className }) {
  return (
    <section className={clsx("container mx-auto px-4 lg:px-10", className)}>
      <h2 className="text-2xl font-bold ml-2 mb-4 text-gray-200">
        FEATURED GAMES
      </h2>
      <div className="grid lg:grid-cols-3 gap-5">
        {games.map((game) => (
          <div key={game.id} className="card card-compact w-full bg-bluegray">
            <figure>
              <img
                src={
                  game.thumbnailImageUrl ??
                  "https://img.icons8.com/ios/100/no-image.png"
                }
                className={clsx(
                  "aspect-square object-cover w-full rounded-3xl",
                  {
                    "p-28": !game.thumbnailImageUrl,
                  }
                )}
                loading="lazy"
                alt="Shoes"
              />
            </figure>
            <div className="card-body gap-0">
              <div className="flex justify-between items-center">
                <h2 className="font-bold text-gray-300 mb-0 text-3xl">
                  {game.name}
                </h2>
                <div className="border-0 badge bg-gray-500 text-gray-200 text-2xl py-4 px-2">
                  ${game.price}
                </div>
              </div>
              <p className="text-pink text-lg mb-1">#{game.genre}</p>
              <p className="text-xl text-gray-200">{game.description}</p>
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
