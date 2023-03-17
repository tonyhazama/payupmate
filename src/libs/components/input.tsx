import classNames from "classnames";
import React from "react";
import type { Control } from "react-hook-form";
import { Controller } from "react-hook-form";

export interface InputType extends React.HTMLProps<InputType> {
  control: Control<any>;
  name: string;
}

const Input: React.FC<InputType> = ({
  control,
  name,
  className,
  label,
  required,
}) => (
  <Controller
    control={control}
    name={name}
    render={({
      field: { onChange, onBlur, value, ref },
      fieldState: { invalid, isTouched, isDirty, error },
      formState,
    }) => (
      <div className={classNames("form-control w-full", className)}>
        <label className="label" htmlFor={name}>
          {label && (
            <span
              className={classNames(
                "label-text",
                required
                  ? "after:ml-1 after:text-red-600 after:content-['*']"
                  : ""
              )}
            >
              {label}
            </span>
          )}
        </label>
        <input
          type="text"
          id={name}
          placeholder="Type here"
          className="input-group-sm input-bordered input h-8 w-full rounded-md px-3 align-middle leading-8 outline-none focus:border-primary focus:outline-none"
          value={value}
          ref={ref}
          onBlur={onBlur}
          onChange={onChange}
        />
        {error?.message && (
          <span className="label-text-alt mt-1 text-red-600">
            {error?.message}
          </span>
        )}
      </div>
    )}
  />
);

export { Input };
