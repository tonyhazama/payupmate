import React, { useEffect } from "react";
import cx from "classnames";
import { useForm } from "react-hook-form";
import { SelectInput } from "@cp-component";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { PaginationType } from "types/request";

const limitOptions = [
  { label: 10, value: 10 },
  { label: 15, value: 15 },
  { label: 20, value: 20 },
  // {label: 50, value: 50}
];

export interface PaginationProps {
  onPaginate: (page: number) => void;
  data?: PaginationType;
}

export const Pagination: React.FC<PaginationProps> = ({
  onPaginate,
  data = {},
}) => {
  const { page = 0, size = 10, total = 0, totalPage = 0 } = data;
  const pages = [...Array(totalPage).fill("")];

  // useEffect(() => {
  //   onPaginate(values);
  // }, [values.page, values.limit]);

  const handlePrev = () => {
    onPaginate(page - 1);
  };

  const handleNext = () => {
    onPaginate(page + 1);
  };
  const from = page * size + 1;
  let to = page * size + size;
  to = total > to ? to : total;

  return (
    <div className={cx("mt-8 flex items-center justify-end space-x-4")}>
      <span className="text-sm font-semibold">{`${from} - ${to} dari ${total} Data`}</span>
      <div className="flex gap-2">
        <button
          onClick={() => {
            if (page > 0) {
              handlePrev();
            }
          }}
          className="btn-primary btn-sm btn min-w-[2.25rem] rounded bg-white p-0 text-primary hover:bg-white"
          type="button"
        >
          <ChevronLeftIcon className="h-4 w-4" />
        </button>
        {pages.map((_, index) => {
          const isActive = page === index;
          return (
            <button
              className={cx(
                "btn-primary btn-square btn-sm btn min-w-[2.25rem] rounded p-0",
                isActive
                  ? "cursor-default hover:bg-primary"
                  : "border-primary bg-white text-primary hover:bg-white"
              )}
              onClick={() => {
                if (!isActive) {
                  onPaginate(index);
                }
              }}
              type="button"
            >
              {index + 1}
            </button>
          );
        })}
        <button
          onClick={() => {
            if (page < totalPage - 1) {
              handleNext();
            }
          }}
          className="btn-primary btn-sm btn w-8 rounded bg-white p-0 text-primary hover:bg-white"
          type="button"
        >
          <ChevronRightIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
