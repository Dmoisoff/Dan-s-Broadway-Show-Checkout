import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { mockShows } from "~/utils/mockdata";
import { useForm, Controller, useWatch } from "react-hook-form";
import { PROCESSING_FEE, SERVICE_FEE } from "~/utils/const";
import Button from "~/components/button";
import SelectShowDetails from "~/components/selectShowDetails";
import PaymentDetails from "~/components/paymentDetails";
import OrderDetails from "~/components/orderDetails";
import { type Options } from "~/types/types";

type WatchedFields = Options[];

const Home: NextPage = () => {
  const { register, handleSubmit, getValues, control, reset } = useForm();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  const watchedFields: WatchedFields = useWatch({
    control,
    name: ["show", "ticketQuantity"],
    defaultValue: {
      show: { label: "", value: 0 },
      ticketQuantity: { label: "", value: 0 },
    },
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
              <OrderDetails
                showInfo={showInfo}
                ticketQuantity={ticketQuantity}
                control={control}
                reset={reset}
              />
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
