import { useContext, useState } from "react";
import StatusAlert, { StatusAlertService } from "react-status-alert";
import "react-status-alert/dist/status-alert.css";
import { AppStateContext } from "../ContextApi/AppStateContext";

const Alert = () => {
  const { message, setMessage, severity, setSeverity } =
    useContext(AppStateContext);

  const showSuccessAlert = () => {
    StatusAlertService.showError(message);
  };

  return (
    <div>
      {showSuccessAlert()}
      <StatusAlert />
    </div>
  );

  // if (severity === "error") {
  //   return (
  //     <div
  //       className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
  //       role="alert"
  //       hidden={!active}
  //     >
  //       <strong className="font-bold">Error! {` `}</strong>
  //       <span className="block sm:inline">{message}</span>
  //       <span
  //         className="absolute top-0 bottom-0 right-0 px-4 py-3"
  //         onClick={onClose}
  //       >
  //         <svg
  //           className="fill-current h-6 w-6 text-red-500"
  //           role="button"
  //           xmlns="http://www.w3.org/2000/svg"
  //           viewBox="0 0 20 20"
  //         >
  //           <title>Close</title>
  //           <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
  //         </svg>
  //       </span>
  //     </div>
  //   );
  // }

  // if (severity === "info") {
  //   return (
  //     <div
  //       className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
  //       role="alert"
  //       hidden={!active}
  //     >
  //       <strong className="font-bold">Info! {` `}</strong>
  //       <span className="block sm:inline">{message}</span>
  //       <span
  //         className="absolute top-0 bottom-0 right-0 px-4 py-3"
  //         onClick={onClose}
  //       >
  //         <svg
  //           className="fill-current h-6 w-6 text-green-500"
  //           role="button"
  //           xmlns="http://www.w3.org/2000/svg"
  //           viewBox="0 0 20 20"
  //         >
  //           <title>Close</title>
  //           <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
  //         </svg>
  //       </span>
  //     </div>
  //   );
  // }

  // if (severity === "warning") {
  //   return (
  //     <div
  //       className="bg-amber-100 border border-amber-400 text-amber-700 px-4 py-3 rounded relative"
  //       role="alert"
  //       hidden={!active}
  //     >
  //       <strong className="font-bold">Warning! {` `}</strong>
  //       <span className="block sm:inline">{message}</span>
  //       <span
  //         className="absolute top-0 bottom-0 right-0 px-4 py-3"
  //         onClick={onClose}
  //       >
  //         <svg
  //           className="fill-current h-6 w-6 text-amber-500"
  //           role="button"
  //           xmlns="http://www.w3.org/2000/svg"
  //           viewBox="0 0 20 20"
  //         >
  //           <title>Close</title>
  //           <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
  //         </svg>
  //       </span>
  //     </div>
  //   );
  // }
};

export default Alert;
