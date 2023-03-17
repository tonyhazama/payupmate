/* eslint-disable react/prop-types */
import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowLeftIcon,
  DocumentTextIcon,
  HomeModernIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { formatMoney } from "../../libs/util";
import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import { trpc } from "../../libs/util/trpc";
import type { Room } from "@prisma/client";
import cx from "classnames";
import { RoomForm } from "./components/form";
import { FormMode, PaginationQueryInput } from "@types";
import { Table } from "@libs/components/table";
import { Column, Row } from "react-table";
import Swal from "sweetalert2";
import { RommSummary } from "./components/summary";
import { DateTime } from "luxon";

const defaultAction = { type: "", payload: {} };

export const TenantPage = () => {
  const [pagination, setPagination] = useState<PaginationQueryInput>({
    page: 0,
    size: 10,
  });
  const { data, error, isFetching, refetch } = trpc.room.getRooms.useQuery(
    pagination,
    { refetchOnWindowFocus: false }
  );
  const mutationCreate = trpc.room.createRoom.useMutation();
  const mutationUpdate = trpc.room.updateRoom.useMutation();
  const mutationDelete = trpc.room.deleteRoom.useMutation();

  const tableData = useMemo(() => data?.data || [], [data]);

  const [action, setAction] = useState(defaultAction);

  const handleCancel = () => {
    setAction(defaultAction);
  };

  const handleCreate = () => {
    setAction({ type: FormMode.Create, payload: {} });
  };

  const handleEdit = (values: any) => {
    setAction({ type: FormMode.Edit, payload: values });
  };

  const createRow = async (value: any) => {
    // const res = await trpcClient;
    try {
      const res = await mutationCreate.mutateAsync(value);
      Swal.fire({
        icon: "success",
        title: "Data Tersimpan",
        text: "Data Ruangan berhasil disimpan",
      });
      setAction(defaultAction);
      refetch();
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Data Tidak Tersimpan",
        text: "Data Ruangan gagal disimpan",
      });
    }
  };

  const updateRow = async (value: any) => {
    // const res = await trpcClient;
    try {
      const res = await mutationUpdate.mutateAsync(value);
      Swal.fire({
        icon: "success",
        title: "Data Tersimpan",
        text: "Data Ruangan berhasil diubah",
      });
      setAction(defaultAction);
      refetch();
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Data Tidak Tersimpan",
        text: "Data Ruangan gagal diubah",
      });
    }
  };

  const deleteRow = async (id: string) => {
    // const res = await trpcClient;
    try {
      const res = await mutationDelete.mutateAsync(id);
      Swal.fire({
        icon: "success",
        title: "Data Terhapus",
        text: "Data Ruangan berhasil dihapus",
      });
      setAction(defaultAction);
      refetch();
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Data Tidak Terhapus",
        text: "Data Ruangan gagal dihapus",
      });
    }
  };

  const roomColumns: Column<object>[] = useMemo(
    () => [
      { Header: "Nomor", accessor: "number" },
      {
        Header: "Nama",
        accessor: "name",
        Cell: ({ value }) => <div className="w-full">{value}</div>,
      },
      { Header: "Harga", accessor: "price" },
      { Header: "Deskripsi", accessor: "description" },
      {
        Header: "Status",
        // eslint-disable-next-line react/no-unstable-nested-components
        Cell: ({ row }) => {
          const { contracts } = row.original;
          if (contracts.length <= 0) {
            return <span>Kosong</span>;
          }
          return <span>Terisi</span>;
        },
      },
      {
        // Header: "Action",
        Header: () => <div className="w-full text-right">Action</div>,
        accessor: "action",
        // eslint-disable-next-line react/no-unstable-nested-components
        Cell: ({ row }: any) => {
          return (
            <div className="flex justify-end gap-2">
              <button
                className={cx(
                  "btn-error btn-square btn-sm btn min-w-[2.25rem] rounded p-0"
                )}
                onClick={() => {
                  deleteRow(row.original.id);
                }}
                type="button"
              >
                <TrashIcon className="h-4 w-4" />
              </button>
              <button
                className={cx(
                  "btn-info btn-square btn-sm btn min-w-[2.25rem] rounded p-0"
                )}
                onClick={() => {
                  handleEdit(row.original);
                }}
                type="button"
              >
                <PencilIcon className="h-4 w-4" />
              </button>
            </div>
          );
        },
      },
    ],
    []
  );

  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12">
        <Link href="/" passHref>
          <div className="btn-primary btn-sm btn mb-4 rounded">
            <ArrowLeftIcon className="mr-4 h-4 w-4" /> Kembali ke Beranda
          </div>
        </Link>
        <h1>Kamar</h1>
      </div>
      <RommSummary data={data?.summary} />

      <div className="card">
        <div className="card-body p-6">
          {!action.type ? (
            <>
              <div className="mb-2 flex items-center gap-4">
                <button
                  className="btn-primary btn-sm btn rounded"
                  type="button"
                  onClick={handleCreate}
                >
                  <PlusIcon className="mr-2 h-4 w-4" /> Tambah Kamar
                </button>
              </div>
              <Table
                columns={roomColumns}
                data={tableData}
                onPaginate={(page, size) => {
                  setPagination({ page, size });
                }}
                pagination={data?.pagination}
                isLoading={isFetching}
              />
            </>
          ) : (
            <RoomForm
              title={
                action.type === FormMode.Create
                  ? "Tambah Ruangan"
                  : "Edit Ruangan"
              }
              initialValue={action.payload}
              onCancel={handleCancel}
              onSubmit={(val) => {
                if (action.type === FormMode.Create) {
                  createRow(val);
                } else {
                  updateRow(val);
                }
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TenantPage;
