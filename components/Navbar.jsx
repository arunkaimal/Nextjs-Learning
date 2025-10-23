import Link from "next/link";

export default function Navbar() {
  return (
    <header className="grid grid-cols-2 h-8">
      <div>My Page</div>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/service">Service</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link  >
          </li>
        </ul>
      </nav>
    </header>
  );
}
