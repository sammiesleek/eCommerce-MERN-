import React, { useEffect, useRef } from "react";
import { toPng } from "html-to-image";
import Receipt from "../components/Receipt";

const Print = ({ data }) => {
  const receiptRef = useRef();
  const downloadImage = () => {
    if (receiptRef.current === null) {
      return;
    }

    toPng(receiptRef.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "receipt.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error("Error capturing image:", err);
      });
  };
  useEffect(() => {
    downloadImage();
  }, []);

  return (
    <div>
      <Receipt ref={receiptRef} data={data} />
      {/* { downloadImage()} */}
      {/* {setTimeout(621, downloadImage())} */}
    </div>
  );
};

export default Print;
