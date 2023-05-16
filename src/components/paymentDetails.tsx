import React, { useState } from "react";
import {
  type UseFormRegister,
  type FieldValues,
  type UseFormGetValues,
  useWatch,
  Control,
  type FormState,
} from "react-hook-form";
import { formatCard, formatDate, formatCVV } from "~/utils/paymentFormating";
import { ErrorMessage } from "@hookform/error-message";

interface PaymentDetailsProps {
  register: UseFormRegister<FieldValues>;
  getValues: UseFormGetValues<FieldValues>;
  control: Control;
  errors: FormState<FieldValues>;
}

const PaymentDetails: React.FC<PaymentDetailsProps> = ({
  register,
  getValues,
  control,
  errors,
}) => {
  const [isCardFieldFull, setIsCardFieldFull] = useState<boolean>(false);
  const [isExpiryFieldFull, setIsExpiryFieldFull] = useState<boolean>(false);
  const [isCvvFull, setIsCvvFull] = useState<boolean>(false);

  const handleCardInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    formatCard(event);
    setIsCardFieldFull(event.target.value.length === 19);
  };

  const handleExpiryInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    formatDate(event);
    setIsExpiryFieldFull(event.target.value.length === 7);
  };

  const handleCvvInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    formatCVV(event);
    setIsCvvFull(event.target.value.length === 3);
  };

  //   const watchedCardField: { card: string } = useWatch({
  //     control,
  //     name: "card",
  //     defaultValue: {
  //       card: "",
  //     },
  //   });

  //   console.log(watchedCardField);

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
              required: "This is required.",
            })}
          />{" "}
          <span className="font-Roboto absolute -top-6 left-0 text-sm">
            Cardholder Name
          </span>{" "}
          <i className="fa fa-user absolute left-2 top-4 text-gray-400"></i>{" "}
          {errors?.name && (
            <span className="absolute right-2 top-[12px] text-red-600">
              <ErrorMessage errors={errors} name="name" />
            </span>
          )}
        </div>

        <div className="input_text relative mt-8">
          <input
            type="tel"
            className="font-Roboto h-12 w-full border-2 px-2 pl-7 outline-none transition-all focus:border-blue-900"
            placeholder="0000 0000 0000 0000"
            maxLength={19}
            {...register("card", {
              required: "Fill Out Completely",
              minLength: 19,
              maxLength: 19,
            })}
            onChange={handleCardInput}
          />
          <span className="font-Roboto absolute -top-6 left-0 text-sm">
            Card Number
          </span>{" "}
          <i className="fa fa-credit-card absolute left-2 top-[14px] text-sm text-gray-400"></i>{" "}
          {isCardFieldFull && (
            <i className="fa fa-check absolute right-2 top-[14px] text-base text-green-400"></i>
          )}{" "}
          {!isCardFieldFull && errors?.card && (
            <span className="absolute right-2 top-[12px] text-red-600">
              <ErrorMessage errors={errors} name="card" />
            </span>
          )}
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
                required: "Fill Out Completely",
                minLength: 7,
                maxLength: 7,
              })}
              onChange={handleExpiryInput}
            />{" "}
            <span className="font-Roboto absolute -top-6 left-0 text-sm">
              Expiry
            </span>{" "}
            <i className="fa fa-calendar absolute left-2 top-4 text-gray-400"></i>{" "}
            {isExpiryFieldFull && (
              <i className="fa fa-check absolute right-2 top-[14px] text-base text-green-400"></i>
            )}{" "}
            {!isExpiryFieldFull && errors?.expiry && (
              <span className="absolute right-2 top-[12px] text-red-600">
                <ErrorMessage errors={errors} name="expiry" />
              </span>
            )}
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
                required: "Fill Out Completely",
                minLength: 3,
                maxLength: 3,
              })}
              onChange={handleCvvInput}
            />{" "}
            <span className="font-Roboto absolute -top-6 left-0 text-sm">
              CVV
            </span>{" "}
            <i className="fa fa-lock absolute left-2 top-4 text-gray-400"></i>{" "}
            {isCvvFull && (
              <i className="fa fa-check absolute right-2 top-[14px] text-base text-green-400"></i>
            )}{" "}
            {!isCvvFull && errors?.cvv && (
              <span className="absolute right-2 top-[12px] text-red-600">
                <ErrorMessage errors={errors} name="cvv" />
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
