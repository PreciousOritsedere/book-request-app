import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">Library Management</h1>
        <div className="space-x-3">
          <Link href="/" className="mr-4">
            Home
          </Link>
          <Link href="/student">Student</Link>
          <Link href="/librarian">Librarian</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
