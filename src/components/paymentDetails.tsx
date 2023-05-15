import React, { useState } from "react";
import {
  type UseFormRegister,
  type FieldValues,
  useWatch,
  Control,
} from "react-hook-form";
import { formatCard, formatDate, formatCVV } from "~/utils/paymentFormating";

interface PaymentDetailsProps {
  register: UseFormRegister<FieldValues>;
  control: Control;
}

const PaymentDetails: React.FC<PaymentDetailsProps> = ({
  register,
  control,
}) => {
  const [isCardFieldFull, setIsCardFieldFull] = useState<boolean>(false);

  // const watchedCardFields = useWatch({
  //   control,
  //   name: ["show", "ticketQuantity"],
  //   defaultValue: {
  //     show: { label: "", value: 0 },
  //     ticketQuantity: { label: "", value: 0 },
  //   },
  // });

  return (
    <div className="bg-gray row-start-23 col-span-3 col-start-1 row-span-3 rounded-md border-2 border-gray-300 bg-white p-4 text-black">
      <p className="font-Roboto flex justify-around text-2xl font-bold">
        Payment Details
      </p>
      <div className="flex h-80 flex-col justify-evenly">
        <div className="input_text relative mt-6">
          {" "}
          <input
            type="text"
            className="font-Roboto h-12 w-full border-2 px-2 pl-7 outline-none transition-all focus:border-blue-900"
            placeholder="John Doe"
            {...register("name", {
              required: true,
            })}
          />{" "}
          <span className="font-Roboto absolute -top-6 left-0 text-sm">
            Cardholder Name
          </span>{" "}
          <i className="fa fa-user absolute left-2 top-4 text-gray-400"></i>{" "}
        </div>
        <div className="input_text relative mt-8">
          <input
            type="tel"
            className="font-Roboto h-12 w-full border-2 px-2 pl-7 outline-none transition-all focus:border-blue-900"
            placeholder="0000 0000 0000 0000"
            maxLength={19}
            minLength={12}
            {...register("card", {
              required: true,
            })}
            onChange={formatCard}
          />
          <span className="font-Roboto absolute -top-6 left-0 text-sm">
            Card Number
          </span>{" "}
          <i className="fa fa-credit-card absolute left-2 top-[14px] text-sm text-gray-400"></i>{" "}
        </div>
        <div className="mt-8 flex gap-5 ">
          <div className="input_text relative w-full">
            {" "}
            <input
              type="text"
              className="font-Roboto h-12 w-full border-2 px-2 pl-7 outline-none transition-all focus:border-blue-900"
              placeholder="mm/yyyy"
              data-slots="my"
              maxLength={7}
              {...register("expiry", {
                required: true,
              })}
              onChange={formatDate}
            />{" "}
            <span className="font-Roboto absolute -top-6 left-0 text-sm">
              Expiry
            </span>{" "}
            <i className="fa fa-calendar absolute left-2 top-4 text-gray-400"></i>{" "}
          </div>
          <div className="input_text relative w-full">
            {" "}
            <input
              type="text"
              className="font-Roboto h-12 w-full border-2 px-2 pl-7 outline-none transition-all focus:border-blue-900"
              placeholder="000"
              data-slots="0"
              data-accept="\d"
              maxLength={3}
              {...register("cvv", {
                required: true,
              })}
              onChange={formatCVV}
            />{" "}
            <span className="font-Roboto absolute -top-6 left-0 text-sm">
              CVV
            </span>{" "}
            <i className="fa fa-lock absolute left-2 top-4 text-gray-400"></i>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
