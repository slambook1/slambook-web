import SearchField from "@/components/SearchField";
import UserButton from "@/components/UserButton";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 bg-card shadow-sm">
      <div className="mx-auto flex w-full  items-center justify-between gap-5 px-5 py-3">
        <Link href="/" className="text-2xl font-bold text-primary">
          Slambook
        </Link>
        
        <div className="max-w-[50%] sm:w-full mx-auto"><SearchField /></div>
        <div>

        <UserButton className="sm:ms-auto" />
        </div>
      </div>
    </header>
  );
}
