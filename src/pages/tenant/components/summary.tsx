import { HomeModernIcon } from "@heroicons/react/24/outline";
import { trpc } from "@libs/util";
import React from "react";

export const RommSummary = ({ data }: any) => {
  return (
    <>
      <div className="card col-span-4">
        <div className="card-body flex-row p-6">
          <div className="flex items-center gap-4">
            <HomeModernIcon className="h-12 w-12 text-primary" />
            <div>
              <div className="text-xl font-extrabold">{data?.total || 0}</div>
              <div className="text-sm">Jumlah Kamar</div>
            </div>
          </div>
        </div>
      </div>
      <div className="card col-span-8">
        <div className="card-body flex-row p-6">
          <div className="flex flex-1">
            <div className="flex w-1/3 flex-col items-center justify-center p-2">
              <div className="text-2xl font-extrabold">{data?.filled || 0}</div>
              <div className="text-sm">Terisi</div>
            </div>
            <div className="flex w-1/3 flex-col items-center justify-center p-2">
              <div className="text-2xl font-extrabold">{data?.booked || 0}</div>
              <div className="text-sm">Dibooking</div>
            </div>
            <div className="flex w-1/3 flex-col items-center justify-center p-2">
              <div className="text-2xl font-extrabold">{data?.empty || 0}</div>
              <div className="text-sm">Kosong</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
