import { Input, Textarea } from "@libs/components";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import type { Room } from "@prisma/client";

export interface RoomFormType {
  title?: string;
  initialValue?: Partial<Room>;
  onCancel: () => any;
  onSubmit: (values: any) => any;
}

export const RoomForm: React.FC<RoomFormType> = ({
  title = "Create Room",
  initialValue,
  onCancel,
  onSubmit = (values) => {
    console.log(values);
  },
}) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Nama Kamar harus diisi"),
    number: Yup.string().required("Nomor Ruangan harus diisi"),
    price: Yup.number().required("Harga Harus diisi"),
    // description: Yup.string()
    //   .required("description is required")
    //   .min(20, "Deskripsi harus lebih dari 20 karakter"),
  });

  const {
    watch,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      number: "",
      price: "",
      description: "",
      ...initialValue,
    },
    resolver: yupResolver(validationSchema),
  });
  const values = watch();

  return (
    <>
      <h1>{title}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <div className="flex gap-4">
            <div className="w-1/4">
              <Input
                label="Nomor Ruangan"
                name="number"
                control={control}
                required
              />
            </div>
            <div className="w-3/4">
              <Input
                label="Nama Ruangan"
                name="name"
                control={control}
                required
              />
            </div>
          </div>

          <div>
            <Input
              label="Harga Ruangan"
              name="price"
              control={control}
              required
            />
          </div>

          <div>
            <Textarea
              label="Deskripsi"
              name="description"
              control={control}
              required
            />
          </div>

          <div className="mt-6 flex gap-4">
            <button className="btn-primary btn-sm btn rounded" type="submit">
              Simpan
            </button>
            <button
              className="btn-outline btn-sm btn rounded"
              onClick={onCancel}
              type="button"
            >
              Batal
            </button>
          </div>
        </div>
      </form>
      <div className="bg-slate-400 p-4">
        <pre>{JSON.stringify({ values, errors }, "", 2)}</pre>
      </div>
    </>
  );
};
