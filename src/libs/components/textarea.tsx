import classNames from "classnames";
import React from "react";
import { Control, Controller } from "react-hook-form";

export interface TextareaType extends React.HTMLProps<HTMLTextAreaElement> {
  control: any;
  name: string;
}

export const Textarea: React.FC<TextareaType> = ({
  control,
  name,
  className,
  label,
  required,
  rows = 5,
  ...rest
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { invalid, isTouched, isDirty, error },
        formState,
      }) => (
        <div className={classNames("form-control w-full", className)}>
          <label className="label">
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
          <textarea
            {...rest}
            className="input-group-sm input-bordered textarea h-8 w-full rounded-md px-3 align-middle leading-6 outline-none focus:border-primary focus:outline-none"
            // className='rounded-md px-3 h-8 border border-base-300 leading-[1] text-sm outline-none focus:border-primary  align-middle'
            rows={rows}
            value={value}
            ref={ref}
            onBlur={onBlur} // notify when input is touched
            onChange={onChange} // send value to hook form />
          />
          {error?.message && (
            <label className="label">
              <span className="label-text-alt text-red-600">
                {error?.message}
              </span>
            </label>
          )}
        </div>
      )}
    />
  );
};
