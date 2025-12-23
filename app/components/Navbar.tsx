"use client";
import Link from "next/link";
import { useSession } from "next-auth/react";
import LogoutButton from "./LogoutButton";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-gray-800 fixed top-0 z-50 w-full">
      <div className="px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center">
            <img
              src="/movielogo.webp"
              alt="Company Logo"
              width={60}
              height={40}
              className="mr-6"
            />

            <div className="hidden sm:flex space-x-4">
              <Link href="/movies" className="text-white">
                Movies
              </Link>
              <Link
                href="/favourites"
                className="text-gray-300 hover:text-white"
              >
                Favourites
              </Link>
              <Link
                href="/hollywood"
                className="text-gray-300 hover:text-white"
              >
                Hollywood
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {session ? (
              <>
                <span className="text-sm text-gray-300">
                  Hi, {session.user?.name}
                </span>
                <LogoutButton />
              </>
            ) : null}
          </div>
        </div>
      </div>
    </nav>
  );
}
