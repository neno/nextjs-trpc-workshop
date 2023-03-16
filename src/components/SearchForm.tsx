import { useRouter } from "next/router";

export const SearchForm = () => {
  const router = useRouter();
  const searchTerm = router.query.q as string;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const input = event.currentTarget.searchTerm as HTMLInputElement;
    const q = input.value;
    const encodedQ = encodeURIComponent(q ?? "");
    void router.push(`/?q=${encodedQ}`);
  }

  return (
    <div className="mx-auto w-full max-w-2xl py-4">
      <form onSubmit={handleSubmit}>
        <label className="form-control">
          <input
            type="text"
            placeholder="Search Movies..."
            name="searchTerm"
            className="flex w-full rounded-md bg-black px-2 py-1 text-2xl"
            defaultValue={searchTerm ?? ""}
          />
        </label>
      </form>
    </div>
  );
};
