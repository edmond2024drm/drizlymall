import { Toaster } from "react-hot-toast";

const ToastProvider = () => {
  return (
    <Toaster
      position="top-right"
      containerStyle={{
        top: 150,
        left: 20,
        bottom: 20,
        right: 20,
      }}
    />
  );
};

export default ToastProvider;
