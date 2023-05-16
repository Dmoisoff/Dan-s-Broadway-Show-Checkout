import { type NextPage } from "next";
import Head from "next/head";
import { useForm, Controller, useWatch } from "react-hook-form";
import SelectShowDetails from "~/components/selectShowDetails";
import PaymentDetails from "~/components/paymentDetails";
import OrderDetails from "~/components/orderDetails";
import { type Option, type OrderData } from "~/types/types";
import { mockShows } from "~/utils/mockdata";
import { getTotalPrice } from "~/utils/paymentFormating";

type WatchedFields = Option[];

const Home: NextPage = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    getValues,
    formState: { errors },
  } = useForm();

  const watchedFields: WatchedFields = useWatch({
    control,
    name: ["show", "ticketQuantity"],
    defaultValue: {
      show: { label: "", value: 0 },
      ticketQuantity: { label: 1, value: 1 },
    },
  });

  const [showInfo, ticketQuantity] = watchedFields;

  const onSubmit = (data: OrderData) => {
    // call payment and wait for response
    const res = handlePaymentSubmit(data);
    if (res.status === 200) {
      // send info to backend
      console.log(data);
      alert("Payment successful! Enjoy the show.");
    } else {
      console.error("Error");
    }
  };

  const handlePaymentSubmit = ({
    card,
    name,
    cvv,
    expiry,
  }: {
    card: string;
    name: string;
    cvv: string;
    expiry: string;
  }): { status: number } => {
    // fake payment function
    try {
      if (!ticketQuantity || !showInfo) {
        throw new Error("Error with show or ticket selection");
      }
      const cost = Number(
        getTotalPrice(mockShows, ticketQuantity.value, showInfo.value).toFixed(
          2
        )
      );
      const paymentPackage = {
        card,
        name,
        cvv,
        expiry,
        cost,
      };
      console.log(paymentPackage);
      // fake api call
      // const response = await fetch("https://example.com/payment", {
      //   method: "POST",
      //   body: JSON.stringify({ paymentPackage }),
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });
      return { status: 200 };
    } catch (error) {
      console.error("An error occurred:", error);
      return { status: 400 };
    }
  };

  return (
    <>
      <Head>
        <title>Mock Checkout Page</title>
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
        <div className="h-screen w-9/12">
          <div className="flex min-w-[1150px] justify-center">
            <h1 className="gap-12 px-4 py-10 text-5xl font-semibold">
              Dan's <span className="text-[hsl(280,100%,70%)]">Broadway Show</span>{" "}
              Checkout Page
            </h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" grid h-5/6 min-w-[1150px] grid-cols-5 grid-rows-5 gap-4">
              <SelectShowDetails 
              control={control}
              errors={errors}
              />
              <PaymentDetails
                register={register}
                getValues={getValues}
                control={control}
                errors={errors}
              />
              <OrderDetails
                showInfo={showInfo}
                ticketQuantity={ticketQuantity}
                control={control}
                reset={reset}
                getValues={getValues}
              />
            </div>
          </form>
          <button
            className="h-5 w-5 bg-red-100"
            onClick={() =>{ 
              console.log(getValues())
              console.log(errors)
            }}
          />
        </div>
      </main>
    </>
  );
};

export default Home;
