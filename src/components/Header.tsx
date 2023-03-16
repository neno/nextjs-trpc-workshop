import { signIn, signOut, useSession } from "next-auth/react";
import { SearchForm } from "./SearchForm";

export const Header = () => {
  const { data: sessionData } = useSession();

  return (
    <div className="mx-8 mt-6">
      <div className="navbar rounded-box bg-neutral">
        <div className="flex-1">
          <a className="btn-ghost btn text-xl normal-case">
            Next.js tRPC Workshop
          </a>
        </div>
        <div className="flex-1">
          <SearchForm />
        </div>
        <div className="align-right flex flex-1 justify-end gap-2">
          <div className="dropdown-end dropdown">
            {sessionData?.user ? (
              <label
                tabIndex={0}
                className="btn-ghost btn-circle avatar btn"
                onClick={() => void signOut()}
              >
                <div className="w-10 rounded-full">
                  <img
                    src={sessionData?.user?.image ?? ""}
                    alt={sessionData?.user?.name ?? ""}
                  />
                </div>
              </label>
            ) : (
              <button
                className="btn-ghost rounded-btn btn"
                onClick={() => void signIn()}
              >
                Sign in
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
