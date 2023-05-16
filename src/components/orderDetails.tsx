import React from "react";
import { PROCESSING_FEE, SERVICE_FEE } from "~/utils/const";
import { mockShows } from "~/utils/mockdata";
import { type Option } from "~/types/types";
import Link from "next/link";
import {
  type Control,
  Controller,
  type FieldValues,
  type UseFormReset,
  type UseFormGetValues,
} from "react-hook-form";
import Button from "./button";
import { getTotalPrice } from "~/utils/paymentFormating";

interface OrderDetailsProps {
  showInfo: Option | undefined;
  ticketQuantity: Option | undefined;
  control: Control;
  reset: UseFormReset<FieldValues>;
  getValues: UseFormGetValues<FieldValues>;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({
  ticketQuantity,
  showInfo,
  control,
  reset,
  getValues,
}) => {
  const hasShowId = !!showInfo?.value;
  const hasTicketQuantity = !!ticketQuantity?.value;

  return (
    <>
      <div className="bg-gray col-span-2 col-start-4 row-span-4 row-start-1 rounded-md border-2 border-gray-300 bg-white p-4 text-black ">
        <div className="flex justify-between pb-4 font-sans text-lg font-semibold">
          <h4>Total</h4>
          <div>
            {hasShowId && ticketQuantity
              ? `$${getTotalPrice(
                  mockShows,
                  ticketQuantity.value,
                  showInfo.value
                ).toFixed(2)}`
              : <p className="text-sm font-light">...</p>}
          </div>
        </div>

        <div className="font-Roboto flex justify-between pb-4">
          <h4 className="font-semibold">Tickets</h4>
          <div className="text-sm font-light">
            {hasShowId && hasTicketQuantity
              ? `$${mockShows[showInfo?.value]?.price || 0} x ${
                  ticketQuantity.value
                }`
              : "..."}
          </div>
        </div>

        <div className=" pb-4">
          <p className="font-Roboto pb-2 font-semibold">Notes About Show</p>
          <div className="min-h-20 h-20 max-h-20 overflow-auto">
            <div className="min-h-20 h-20 max-h-20 overflow-auto ">
              {hasShowId ? (
                <p className=" text-sm font-light">
                  {mockShows[showInfo?.value]?.note}
                </p>
              ) : (
                <p className="text-sm text-gray-500">Please Select A Show...</p>
              )}
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-Roboto pb-2 font-semibold">Fees</h3>
          <div>
            <div className="flex justify-between">
              <p className="font-Roboto text-sm font-light">
                Service Fee: ${SERVICE_FEE}{" "}
                {hasTicketQuantity ? `x ${ticketQuantity?.value}` : "x 1"}
              </p>
              <p className="font-Roboto text-sm font-light">
                {hasTicketQuantity
                  ? `$${ticketQuantity.value * SERVICE_FEE}`
                  : `$${SERVICE_FEE}`}
              </p>
            </div>
            <div className="flex justify-between pb-4">
              <p className="font-Roboto text-sm font-light">
                Order Processing Fee
              </p>
              <p className="font-Roboto text-sm font-light">
                ${PROCESSING_FEE}
              </p>
            </div>
          </div>
        </div>

        <h3 className="font-Roboto pb-2 font-semibold">Delivery</h3>
        <div className="flex justify-between pb-4">
          <p className="font-Roboto text-sm font-light">Moblie Entry</p>
          <p className="font-Roboto text-sm font-light">Free!</p>
        </div>

        <div className="font-Roboto pb-6 text-sm font-semibold  text-blue-600">
          <Link href="" onClick={() => reset({ show: "",
      ticketQuantity: { label: 1, value: 1 }, })}>
            Reset Order
          </Link>
        </div>

        <div className="pb-4">
          <p className="pb-2 text-sm font-semibold">
            *All Sales Final - No Refunds
          </p>
          <div>
            <span className="">
              <Controller
                name="terms"
                control={control}
                render={({ field }) => (
                  <input
                    className={` ${
                      !getValues("terms") ? "ring-2 ring-blue-500" : ""
                    }`}
                    type="checkbox"
                    {...field}
                  />
                )}
                rules={{ required: true }}
              />
            </span>{" "}
            <span className="text-sm font-semibold">
              I have read and agree to the current{" "}
              <span className="text-blue-600">Terms of Use</span>.
            </span>
          </div>
        </div>
        <div className="flex justify-evenly pb-4">
          <Button
            className="h-10 w-11/12 bg-green-600 text-white"
            onClick={() => {
              return;
            }}
            type={"submit"}
          >
            <p>Place Order</p>
          </Button>
        </div>

        <div>
          <p className="text-[10px] font-semibold">
            *Expections may apply, see our{" "}
            <span className="text-blue-600">Terms of Use</span>.
          </p>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
