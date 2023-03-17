/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/jsx-key */
import type { Column } from "react-table";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import React from "react";
import { Loading } from "./loading";
import { PaginationType } from "@types";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/solid";
import Pagination from "./pagination";

export interface TableProps {
  columns: Column<object>[];
  data: object[];
  isLoading?: boolean;
  onPaginate?: (page: number, size?: number) => void;
  pagination?: PaginationType;
}

export const Table: React.FC<TableProps> = ({
  columns = [],
  data = [],
  isLoading = false,
  onPaginate = () => {},
  pagination,
}) => {
  const tableInstance = useTable(
    {
      columns,
      data: data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } =
    tableInstance;

  return (
    <>
      <div className="overflow-auto">
        <table
          {...getTableProps}
          className="table-compact table min-w-full table-fixed"
        >
          <thead>
            {headerGroups.map((headerGroup, tri) => (
              <tr
                key={`table-header-${tri}`}
                {...headerGroup.getHeaderGroupProps}
                className="border-b border-gray-100"
              >
                {headerGroup.headers.map((column, thi) => (
                  <th
                    key={`table-header-${thi}`}
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    <div className="flex select-none flex-wrap items-center">
                      {column.render("Header")}
                      {column.isSorted ? (
                        <span>
                          {column.isSortedDesc ? (
                            <ArrowDownIcon className="ml-3" />
                          ) : (
                            <ArrowUpIcon className="ml-3" />
                          )}
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          {/* Apply the table body props */}
          <tbody {...getTableBodyProps}>
            {isLoading ? (
              <tr>
                <td colSpan={columns.length}>
                  <Loading />
                </td>
              </tr>
            ) : (
              rows.map((row, i) => {
                prepareRow(row);
                return (
                  <tr
                    {...row.getRowProps()}
                    className="border-b border-gray-100"
                  >
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    })}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      <Pagination data={pagination} onPaginate={onPaginate} />
    </>
  );
};
