import React from "react";
import { PROCESSING_FEE, SERVICE_FEE } from "~/utils/const";
import { mockShows } from "~/utils/mockdata";
import { Shows, type Options } from "~/types/types";
import Link from "next/link";
import {
  type Control,
  Controller,
  type FieldValues,
  type UseFormReset,
} from "react-hook-form";
import Button from "./button";
import { getTotalPrice } from "~/utils/paymentformating";

interface OrderDetailsProps {
  showInfo: Options | undefined;
  ticketQuantity: Options | undefined;
  control: Control;
  reset: UseFormReset<FieldValues>;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({
  ticketQuantity,
  showInfo,
  control,
  reset,
}) => {
  return (
    <>
      <div className="bg-gray col-span-2 col-start-4 row-span-4 row-start-1 rounded-md border-2 border-gray-300 bg-white p-4 text-black">
        {/* total */}
        <div className="flex justify-between pb-4">
          <h4>Total</h4>
          <div>
            {showInfo && ticketQuantity
              ? getTotalPrice(mockShows, ticketQuantity, showInfo)
              : SERVICE_FEE + PROCESSING_FEE}
          </div>
        </div>
        {/* tickets total */}
        <div className="flex justify-between pb-4">
          <h4>Tickets</h4>
          <div>
            {showInfo && ticketQuantity
              ? `Tickets: $${mockShows[showInfo?.value]?.price || 0} x ${
                  ticketQuantity.value
                }`
              : "..."}
          </div>
        </div>
        {/* notes */}
        <div>
          <p>Notes About Show</p>
          <div className="min-h-20 h-20 max-h-20 overflow-auto">
            <p className="min-h-20 h-20 max-h-20 border-2 border-gray-100">
              {showInfo ? (
                mockShows[showInfo?.value]?.note
              ) : (
                <p className="text-sm text-gray-500">Please Select A Show...</p>
              )}
            </p>
          </div>
        </div>

        {/* fees */}
        <div>
          <h3>Fees</h3>
          <div className="flex justify-between pb-4">
            <p>
              Service Fee: ${SERVICE_FEE}{" "}
              {ticketQuantity?.value ? `x ${ticketQuantity?.value}` : "x 1"}
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
          <Link href="" onClick={() => reset({ show: "", ticketQuantity: 0 })}>
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
              render={({ field }) => <input type="checkbox" {...field} />}
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
    </>
  );
};

export default OrderDetails;
