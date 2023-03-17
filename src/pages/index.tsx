import React from "react";
import {
  BoltIcon,
  DocumentTextIcon,
  HomeModernIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { formatMoney } from "../libs/util";
import { trpc } from "../libs/util/trpc";

const IndexPage = () => {
  const hello = trpc.hello.useQuery({ text: "client" });
  console.log(hello.data);
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      <div className="card col-span-12 rounded-md border border-base-300 bg-white md:col-span-6 xl:col-span-4">
        <div className="card-body p-6">
          {/* <h2 className="card-title">Overview</h2> */}
          <div className="mb-2 flex items-center gap-4">
            <HomeModernIcon className="h-10 w-10 text-primary" />
            <div>
              <div className="text-xl font-extrabold">{80}</div>
              <div className="text-sm">Jumlah Kamar</div>
            </div>
            <div className="absolute right-8 top-6 text-sm font-medium">
              <Link
                href="/room"
                className="text-primary hover:text-primary-focus"
              >
                Lihat data Ruangan
              </Link>
            </div>
          </div>
          <div className="flex rounded bg-base-100 py-2">
            <div className="flex w-1/3 flex-col items-center justify-center p-2">
              <div className="text-xl font-extrabold">{80}</div>
              <div className="text-sm">Terisi</div>
            </div>
            <div className="flex w-1/3 flex-col items-center justify-center p-2">
              <div className="text-xl font-extrabold">{80}</div>
              <div className="text-sm">Kosong</div>
            </div>
            <div className="flex w-1/3 flex-col items-center justify-center p-2">
              <div className="text-xl font-extrabold">{80}</div>
              <div className="text-sm">Tidak Tersedia</div>
            </div>
          </div>
        </div>
      </div>
      <div className="card col-span-12 rounded-md border border-base-300 bg-white md:col-span-6 xl:col-span-4">
        <div className="card-body p-6">
          {/* <h2 className="card-title">Overview</h2> */}
          <div className="mb-2 flex items-center gap-4">
            <UserGroupIcon className="h-10 w-10 text-success" />
            <div>
              <div className="text-xl font-extrabold">{80}</div>
              <div className="text-sm">Jumlah Penyewa</div>
            </div>
            <div className="absolute right-8 top-6 text-sm font-medium">
              <Link href="/room" className="text-success">
                Lihat data Penyewa
              </Link>
            </div>
          </div>
          <div className="flex rounded bg-base-100 py-2">
            <div className="flex w-1/3 flex-col items-center justify-center p-2">
              <div className="text-xl font-extrabold">{80}</div>
              <div className="text-sm">Sudah Bayar</div>
            </div>
            <div className="flex w-1/3 flex-col items-center justify-center p-2">
              <div className="text-xl font-extrabold">{80}</div>
              <div className="text-sm">Belum Bayar</div>
            </div>
            <div className="flex w-1/3 flex-col items-center justify-center p-2">
              <div className="text-xl font-extrabold">{80}</div>
              <div className="text-sm">Jatuh Tempo</div>
            </div>
          </div>
        </div>
      </div>
      <div className="card col-span-12 rounded-md border border-base-300 bg-white md:col-span-6 xl:col-span-4">
        <div className="card-body p-6">
          {/* <h2 className="card-title">Overview</h2> */}
          <div className="mb-2 flex items-center gap-4">
            <BoltIcon className="h-10 w-10 text-accent" />
            <div>
              <div className="text-xl font-extrabold">{80} Kwh</div>
              <div className="text-sm">Penggunaan Daya</div>
            </div>
            <div className="absolute right-8 top-6 text-sm font-medium">
              <Link
                href="/room"
                className="text-primary hover:text-primary-focus"
              >
                Lihat Penggunaan Daya
              </Link>
            </div>
          </div>
          <div className="flex rounded bg-base-100 py-2">
            <div className="flex w-1/2 flex-col items-center justify-center p-2">
              <div className="text-xl font-extrabold">{80}</div>
              <div className="text-sm">Aktif</div>
            </div>
            <div className="flex w-1/2 flex-col items-center justify-center p-2">
              <div className="text-xl font-extrabold">{80}</div>
              <div className="text-sm">Non Aktif</div>
            </div>
          </div>
        </div>
      </div>
      <div className="card col-span-12 rounded-md border border-base-300 bg-white md:col-span-6 xl:col-span-4">
        <div className="card-body p-6">
          <div className="mb-2 flex items-center gap-4">
            <UserGroupIcon className="h-10 w-10 text-primary" />
            <div>
              <div className="text-xl font-extrabold">{8000} Liter</div>
              <div className="text-sm">Sisa Air</div>
            </div>
            <div className="absolute right-8 top-6 text-sm font-medium">
              <Link
                href="/room"
                className="text-primary hover:text-primary-focus"
              >
                Lihat Penggunaan Air
              </Link>
            </div>
          </div>
          <div className="flex rounded bg-base-100 py-2">
            <div className="flex w-1/2 flex-col items-center justify-center p-2">
              <div className="text-xl font-extrabold">{80}</div>
              <div className="text-sm">Aktif</div>
            </div>
            <div className="flex w-1/2 flex-col items-center justify-center p-2">
              <div className="text-xl font-extrabold">{80}</div>
              <div className="text-sm">Non Aktif</div>
            </div>
          </div>
        </div>
      </div>
      <div className="card col-span-12 rounded-md border border-base-300 bg-white md:col-span-12 xl:col-span-8">
        <div className="card-body p-6">
          <div className="mb-2 flex items-center gap-4">
            <DocumentTextIcon className="h-10 w-10 text-error" />
            <div>
              <div className="text-xl font-extrabold">
                {formatMoney(80000000)}
              </div>
              <div className="text-sm">Saldo Anda</div>
            </div>
            <div className="absolute right-8 top-6 text-sm font-medium">
              <Link href="/room" className="text-error">
                Lihat data Administrasi
              </Link>
            </div>
          </div>
          <div className="flex rounded bg-base-100 py-2">
            <div className="flex w-1/3 flex-col items-center justify-center p-2">
              <div className="text-xl font-extrabold">
                {formatMoney(90000000)}
              </div>
              <div className="text-sm">Total Pemasukan</div>
            </div>
            <div className="flex w-1/3 flex-col items-center justify-center p-2">
              <div className="text-xl font-extrabold">
                {formatMoney(5123154)}
              </div>
              <div className="text-sm">Total Pengeluaran</div>
            </div>
            <div className="flex w-1/3 flex-col items-center justify-center p-2">
              <div className="text-xl font-extrabold">
                {formatMoney(5123154)}
              </div>
              <div className="text-sm">Total Laba</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
