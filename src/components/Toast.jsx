import "react-toastify/dist/ReactToastify.css";

// Componenets;
import { toast, ToastContainer, Zoom } from "react-toastify";

export const Toast = () => {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={3001}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Zoom}
      />
    </div>
  );
};

// Success toast;
export const showSuccessToast = (message) => {
  toast.success(message, {
    position: "top-right",
    autoClose: 3001,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Zoom,
  });
};

// Error toast;
export const showErrorToast = (message) => {
  toast.error(message, {
    position: "top-right",
    autoClose: 3001,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Zoom,
  });
};
