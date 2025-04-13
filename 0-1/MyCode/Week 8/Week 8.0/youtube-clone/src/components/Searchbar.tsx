export const Searchbar = () => {
  return (
    <div>
      <div className="flex border border-gray-500 rounded-3xl p-1 pl-3 text-sm pr-2">
        <input
          id="default-search"
          className="w-full bg-slate-950 text-white border-none outline-none"
          placeholder="Search"
          required
        />
        <button className="bg-slate-950 text-gray-400 font-bold py-2 px-4 rounded inline-flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
