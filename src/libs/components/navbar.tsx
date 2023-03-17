import React from "react";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import {
  DocumentTextIcon,
  HomeIcon,
  HomeModernIcon,
  ReceiptPercentIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="fixed left-0 right-0 top-0 z-10 w-full bg-primary">
      <div className="container m-auto flex h-14 items-center justify-between py-2 px-4 lg:px-0">
        <span className="flex h-10 items-center text-xl font-bold italic text-white">
          Pay-up-mate
        </span>
        <div className="flex items-center">
          <div className="dropdown-end dropdown">
            <div
              tabIndex={0}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded"
            >
              <Bars3BottomRightIcon className="h-6 w-6 text-white" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu menu-compact mt-2 w-52 bg-base-100 py-2 drop-shadow-lg"
            >
              <li>
                <Link href="/room" className="text-md font-semibold">
                  <HomeIcon className="h-6 w-6" />
                  <span>Kamar</span>
                </Link>
              </li>
              <li>
                <Link href="/tenant" className="text-md font-semibold">
                  <UserGroupIcon className="h-6 w-6" />
                  <span>Penyewa</span>
                </Link>
              </li>
              <li>
                <Link href="/contract" className="text-md font-semibold">
                  <DocumentTextIcon className="h-6 w-6" />
                  <span>Kontrak</span>
                </Link>
              </li>
              <li>
                <Link href="/bill" className="text-md font-semibold">
                  <ReceiptPercentIcon className="h-6 w-6" />
                  <span>Tagihan</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
