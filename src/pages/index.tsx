import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { SelectDropdown } from "~/components/selectdropdown";
import { mockShows } from "~/utils/mockdata";
import { useState } from "react";
import { number } from "zod";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";

const Home: NextPage = () => {
  // const [selectedShowId, setSelectedShowId] = useState<number>(0);
  const { register, handleSubmit, getValues, control } = useForm();

  const dropDownOptions = Object.values(mockShows).map((show) => ({
    value: show.id,
    label: `${show.name} - $${show.price}`,
  }));

  // const handleSelectedShow = (id: string) => {
  //   setSelectedShowId(Number(id));
  // };
  console.log(mockShows);

  // util function
  const formatDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue: string = event?.target?.value;
    const cleanedValue = inputValue.replace(/\D/g, "");
    const formattedValue = cleanedValue.replace(/^(\d{2})/, "$1/");
    event.target.value = formattedValue;
  };

  // container flex flex-col items-center justify-center gap-12 px-4 py-16

  return (
    <>
      <Head>
        <title>Mock Checkout Page</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-white">
        <div className="">
          <h1 className="gap-12 px-4 py-16 text-5xl font-extrabold tracking-tight text-black sm:text-[5rem]">
            Mock <span className="text-[hsl(280,100%,70%)]">Checkout</span> Page
          </h1>
        </div>

        <div className="h-screen w-9/12 bg-gray-400">
          <form>
            <div className="grid h-5/6 grid-cols-5 grid-rows-5 gap-4">
              {/* show picker */}
              <div className="max-w-l bg-gray col-span-3 rounded-md border-gray-300 bg-red-500 p-4 text-black">
                <h3 className="flex justify-around text-2xl font-bold">
                  Select Show Details
                </h3>
                <div className="flex w-full justify-evenly pt-4">
                  {/*  */}
                  <div>
                    <div className=" flex w-8/12 flex-row items-center ">
                      <h6 className="text-1xl pr-2">Show:</h6>
                      <Controller
                        name="show"
                        control={control}
                        render={({ field }) => (
                          <Select
                            {...field}
                            classNames={{
                              control: () =>
                                "border border-gray-300 rounded-md w-48",
                            }}
                            options={dropDownOptions}
                            placeholder={"Select Show..."}
                          />
                        )}
                        rules={{ required: true }}
                      />
                    </div>
                  </div>

                  <div className=" flex w-4/12 flex-row items-center ">
                    <h6 className="text-1xl pr-2">Ticket Quantity:</h6>
                    <Controller
                      name="ticketQuantity"
                      control={control}
                      render={({ field }) => (
                        <Select
                          {...field}
                          classNames={{
                            control: () => "border border-gray-300 rounded-md",
                          }}
                          options={[1, 2, 3, 4].map((item) => ({
                            value: item,
                            label: item,
                          }))}
                          placeholder={"0"}
                        />
                      )}
                      rules={{ required: true }}
                    />
                  </div>
                </div>
              </div>
              {/* payment details */}
              <div className="bg-gray row-start-23 col-span-3 col-start-1 row-span-3 rounded-md border-gray-300 bg-green-500 p-4 text-black">
                <p className="flex justify-around text-2xl font-bold">
                  Payment Details
                </p>
                <div className="input_text relative mt-6">
                  {" "}
                  <input
                    type="text"
                    className="h-12 w-full border-2 px-2 pl-7 outline-none transition-all focus:border-blue-900 "
                    placeholder="John Doe"
                    {...register("name", {
                      required: true,
                    })}
                  />{" "}
                  <span className="absolute -top-6 left-0 text-sm">
                    Cardholder Name
                  </span>{" "}
                  <i className="fa fa-user absolute left-2 top-4 text-gray-400"></i>{" "}
                </div>
                <div className="input_text relative mt-8">
                  <input
                    type="tel"
                    className="h-12 w-full border-2 px-2 pl-7 outline-none transition-all focus:border-blue-900 "
                    placeholder="0000 0000 0000 0000"
                    data-slots="0"
                    data-accept="\d"
                    maxLength={19}
                    minLength={12}
                    {...register("card", {
                      required: true,
                    })}
                  />
                  <span className="absolute -top-6 left-0 text-sm">
                    Card Number
                  </span>{" "}
                  <i className="fa fa-credit-card absolute left-2 top-[14px] text-sm text-gray-400"></i>{" "}
                </div>
                <div className="mt-8 flex gap-5 ">
                  <div className="input_text relative w-full">
                    {" "}
                    <input
                      type="text"
                      className="h-12 w-full border-2 px-2 pl-7 outline-none transition-all focus:border-blue-900 "
                      placeholder="mm/yyyy"
                      data-slots="my"
                      maxLength={7}
                      {...register("expiry", {
                        required: true,
                      })}
                      onChange={formatDate}
                    />{" "}
                    <span className="absolute -top-6 left-0 text-sm">
                      Expiry
                    </span>{" "}
                    <i className="fa fa-calendar absolute left-2 top-4 text-gray-400"></i>{" "}
                  </div>
                  <div className="input_text relative w-full">
                    {" "}
                    <input
                      type="text"
                      className="h-12 w-full border-2 px-2 pl-7 outline-none transition-all focus:border-blue-900 "
                      placeholder="000"
                      data-slots="0"
                      data-accept="\d"
                      maxLength={3}
                      {...register("cvv", {
                        required: true,
                      })}
                    />{" "}
                    <span className="absolute -top-6 left-0 text-sm">CVV</span>{" "}
                    <i className="fa fa-lock absolute left-2 top-4 text-gray-400"></i>{" "}
                  </div>
                </div>
              </div>
              {/* summary */}
              <div className="bg-gray col-span-2 col-start-4 row-span-4 row-start-1 rounded-md border-gray-300 bg-blue-500 p-4 text-black">
                3{/* total */}
                <div>{/* {mockShows[getValues]} */}</div>
                {/* tickets total */}
                <div></div>
                {/* notes */}
                <div></div>
                {/* fees */}
                <div></div>
                {/* delivery */}
                <div></div>
                {/* cancel */}
                <div></div>
                {/* terms of service */}
                <div></div>
                {/* place order */}
                <div></div>
                {/* fine print */}
                <div></div>
              </div>
            </div>
          </form>
          <button
            className="h-5 w-5 bg-red-100"
            onClick={() => console.log(getValues())}
          />
        </div>
      </main>
    </>
  );
};

export default Home;
