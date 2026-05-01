import { Scale } from "lucide-react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <header className="border-b border-base-300 bg-base-100">
      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-3 text-xl font-bold tracking-tight text-base-content"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Scale size={22} />
            </div>

            <span>Legal Engineer Explained</span>
          </Link>

          <div className="rounded-full border border-base-300 px-4 py-2 text-sm font-medium text-base-content/70">
            DE | EN
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
