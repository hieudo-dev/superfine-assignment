export default function SearchInput() {
  return (
    <div className="relative">
      <input
        type="text"
        className="w-full block lg:w-96 h-12 px-4 py-2 rounded-full bg-bluegray text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
        placeholder="Search"
      />
      <button className="absolute text-white right-3 top-2.5 rounded-full bg-purple p-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          width="1em"
          fontSize="1.2rem"
          viewBox="0 0 448 512.2"
          fill="currentColor"
        >
          <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
        </svg>
      </button>
    </div>
  );
}
