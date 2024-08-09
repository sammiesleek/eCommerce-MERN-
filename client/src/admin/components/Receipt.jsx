import React from "react";
import QRCode from "qrcode.react";
const Receipt = React.forwardRef((props, ref) => {
  const info = props.data;
  console.log(info);

  return (
    <div ref={ref} className="rctp_gen w-[600px] bg-[#F8FAFB] flex px-6 py-40 ">
      <div className="flex flex-col w-full">
        {/* Header */}
        <div className="flex w-full justify-between">
          <div className="flex flex-row gap-x-6">
            <span>
              <p className="font-semibold text-base text-[#20A076]">
                Sales Order No.
              </p>
              <p className="font-semibold text-base text-[#20A076]">
                Receipt No.
              </p>
              <p className="font-semibold text-base text-[#20A076]">
                Customer's Name
              </p>
              <p className="font-semibold text-base text-[#20A076]">
                Customer's Address
              </p>
            </span>
            <span className="gap-y-1 flex flex-col">
              <p className="font-normal text-sm text-black">{info._id}</p>
              <p className="font-normal text-sm text-black">{info._id}</p>
              <p className="font-normal text-sm text-black">{info.firstName}</p>
              <p className="font-normal text-sm text-black">
                {info.shippingAddress}
              </p>
            </span>
          </div>
        </div>

        {/* Table */}
        <div className="flex mt-10">
          <table className="w-full text-sm text-left rtl:text-right rounded border">
            <thead className="text-xs text-[#FFFFFF] uppercase border-l-2 border-r-2 border-black bg-[#20A076] px-2">
              <tr className="font-medium">
                <th scope="col" className="px-6 py-3">
                  SN
                </th>
                <th scope="col" className="px-6 py-3">
                  PRODUCT DESCRIPTION
                </th>
                <th scope="col" className="px-6 py-3">
                  QUANTITY
                </th>
                <th scope="col" className="px-6 py-3">
                  UNIT PRICE
                </th>
                <th scope="col" className="px-6 py-3">
                  TOTAL
                </th>
              </tr>
            </thead>
            <tbody className="px-2">
              {info.orderItems.map((item, index) => (
                <tr key={index} className="border font-medium">
                  <th
                    scope="row"
                    className="border-2 border-t-0 border-black px-6 py-4 text-black whitespace-nowrap"
                  >
                    01
                  </th>
                  <td className="px-6 py-4 border-l-0 border-2 border-t-0 border-black">
                    {item.name}
                  </td>
                  <td className="px-6 py-4 border-2 border-t-0 border-l-0 border-black">
                    {item.qty}
                  </td>
                  <td className="px-6 py-4 border-2 border-t-0 border-l-0 border-black">
                    {item.itemsPrice}
                  </td>
                  <td className="px-6 py-4 border-2 border-t-0 border-l-0 border-black">
                    {item.totalPrice}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="flex">
          <span className="flex gap-x-4 justify-end items-end ml-auto pr-6 mt-4">
            <p className="font-medium text-[#20A076]">Total Amount :</p>
            <p className="font-medium text-black">$100.00</p>
          </span>
        </div>
        <div className="flex">
          <div className="flex">
            <QRCode value={JSON.stringify(props.data)} size={140} />
          </div>
          <span className="flex flex-col gap-x-4 justify-end items-end ml-auto pr-6 mt-4">
            <p className="font-medium text-[#20A076] m-0">Amount Paid</p>
            <p className="font-bold text-3xl text-black">$100.00</p>
          </span>
        </div>
      </div>
    </div>
  );
});

Receipt.displayName = "Receipt";

export default Receipt;
