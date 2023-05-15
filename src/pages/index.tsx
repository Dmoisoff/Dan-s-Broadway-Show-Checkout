import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { SelectDropdown } from "~/components/selectdropdown";
import { mockShows } from "~/utils/mockdata";
import { ReactEventHandler, useState } from "react";
import { number } from "zod";
import { useForm, Controller, useWatch } from "react-hook-form";
import Select from "react-select";
import { PROCESSING_FEE, SERVICE_FEE } from "~/utils/const";
import { useRef } from "react";
import Button from "~/components/button";
import { formatDate, formatCard } from "~/utils/paymentformating";
import SelectShowDetails from "~/components/selectShowDetails";
import PaymentDetails from "~/components/paymentDetails";

type ShowOption = {
  value: number;
  label: string;
};
type TicketQuantityOption = {
  value: number;
  label: number;
};

type WatchedFields = (ShowOption | TicketQuantityOption)[];

const Home: NextPage = () => {
  const { register, handleSubmit, getValues, control, reset } = useForm();
  console.log(handleSubmit);

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  const watchedFields: WatchedFields = useWatch({
    control,
    name: ["show", "ticketQuantity"],
  });

  const resetShowInfo = () => {
    reset({ show: "", ticketQuantity: 0 });
  };

  const [showInfo, ticketQuantity] = watchedFields;

  return (
    <>
      <Head>
        <title>Mock Checkout Page</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
        <div className="">
          <h1 className="gap-12 px-4 py-16 text-5xl font-extrabold tracking-tight text-black sm:text-[5rem]">
            Mock <span className="text-[hsl(280,100%,70%)]">Checkout</span> Page
          </h1>
        </div>

        <div className="h-screen w-9/12">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid h-5/6 grid-cols-5 grid-rows-5 gap-4">
              {/* show picker */}

              <SelectShowDetails control={control} />

              {/* payment details */}
              <PaymentDetails register={register} />

              {/* summary */}
              <div className="bg-gray col-span-2 col-start-4 row-span-4 row-start-1 rounded-md border-gray-300 bg-blue-500 p-4 text-black">
                {/* total */}
                <div className="flex justify-between pb-4">
                  <h4>Total</h4>
                  <div>
                    {showInfo && ticketQuantity
                      ? (
                          (mockShows[showInfo?.value]?.price || 0) *
                            ticketQuantity.value +
                          (ticketQuantity.value * SERVICE_FEE || SERVICE_FEE) +
                          PROCESSING_FEE
                        ).toFixed(2)
                      : SERVICE_FEE + PROCESSING_FEE}
                  </div>
                </div>
                {/* tickets total */}
                <div className="flex justify-between pb-4">
                  <h4>Tickets</h4>
                  <div>
                    {showInfo && ticketQuantity
                      ? `Tickets: ${mockShows[showInfo?.value]?.price || 0} x ${
                          ticketQuantity.value
                        }`
                      : "..."}
                  </div>
                </div>
                {/* notes */}
                <div>
                  <p>Notes</p>
                  <div className="min-h-20 h-20 max-h-20 overflow-auto">
                    <p>{showInfo && mockShows[showInfo?.value]?.note}</p>
                  </div>
                </div>

                {/* fees */}
                <div>
                  <h3>Fees</h3>
                  <div className="flex justify-between pb-4">
                    <p>
                      Service Fee: ${SERVICE_FEE}{" "}
                      {ticketQuantity?.value
                        ? `x ${ticketQuantity?.value}`
                        : "x 1"}
                    </p>
                    {ticketQuantity
                      ? `$${ticketQuantity.value * SERVICE_FEE}`
                      : SERVICE_FEE}
                  </div>
                </div>
                <div className="flex justify-between pb-4">
                  <p>Order Processing Fee</p>
                  <p>${PROCESSING_FEE}</p>
                </div>
                {/* delivery */}
                <div className="flex justify-between pb-4">
                  <p>Delivery</p>
                  <p>Free!</p>
                </div>
                {/* cancel */}
                <div className=" pb-4">
                  <Link href="" onClick={resetShowInfo}>
                    Reset Order
                  </Link>
                </div>
                {/* terms of service */}
                <div className="pb-4">
                  <p className="pb-2">*All Sales Final - No Refunds</p>
                  <p>
                    <Controller
                      name="terms"
                      control={control}
                      render={({ field }) => (
                        <input type="checkbox" {...field} />
                      )}
                      rules={{ required: true }}
                    />{" "}
                    I have read and agree to the current Terms of Use.
                  </p>
                </div>
                <div className="flex justify-evenly">
                  <Button
                    className="w-11/12 bg-green-600"
                    onClick={() => {
                      return;
                    }}
                    type={"submit"}
                  >
                    <p>Place Order</p>
                  </Button>
                </div>

                <div>
                  <p>Expections may apply, see our Terms of Use.</p>
                </div>
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
