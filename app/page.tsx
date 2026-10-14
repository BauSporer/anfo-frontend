"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import z from "zod";

const benutzer = z.object({
  vorname: z.string().min(3, {message: "nicht genug zeichen"}),
  nachname: z.string().min(1, {message: "nicht genug zeichen"}),
  adresse: z.string().min(1, {message: "nicht genug zeichen"}),
  PLZ: z.string().min(1, {message: "nicht genug zeichen"}),
  email: z.email({message: "Email nix gut"}),

})

export type FormSchema = z.infer<typeof benutzer>;

export default function Home() {

const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(benutzer),
  });

  const onsubmit = (data: FormSchema) => {
        console.log(data)
    }

  return (
<div>
  <main>
   <form className="ml-5 grid grid-cols-1" onSubmit={handleSubmit(onsubmit)}>
    <div className="grid grid-cols-1 gap-2 w-40 text-2xl">
      <h1 className="font-bold underline">Anmeldeformular</h1>
      <input placeholder="Vorname" className="input" {...register("vorname")} />
      {errors.vorname && (
        <p className="text-red-500">
          {errors.vorname.message}
        </p>
      )}
      <input placeholder="Nachname" className="input" {...register("nachname")}/>
      {errors.nachname && (
        <p className="text-red-500">
          {errors.nachname.message}
        </p>
      )}
      <input placeholder="Adresse" className="input" {...register("adresse")}/>
      {errors.adresse && (
        <p className="text-red-500">
          {errors.adresse.message}
        </p>
      )}
      <input placeholder="PLZ" className="input" {...register("PLZ")}/>
      {errors.PLZ && (
        <p className="text-red-500">
          {errors.PLZ.message}
        </p>
      )}
      <input placeholder="E-Mail" className="input" {...register("email")}/>
      {errors.email && (
        <p className="text-red-500">
          {errors.email.message}
        </p>
      )}
      <input type="date" className="input" />
      <button type="submit" className="bg-blue-500">Klick me</button>
    </div>
    </form>
    </main>
    </div>
  );
}
