export default function Form() {
  return (
    <>
      <section>
        <form className="flex flex-col gap-4 pt-4">
          <label htmlFor="url" className="text-lg font-semibold">
            Enter URL to shorten:
          </label>
          <input
            type="text"
            id="url"
            placeholder="https://example.com"
            className="border-2 border-gray-300 rounded-md p-2"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 cursor-pointer"
          >
            Shorten URL
          </button>
        </form>
      </section>
    </>
  );
}
