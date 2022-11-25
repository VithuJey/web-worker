import React from "react";

type ToastProps = {
  message: string;
};

export default function Toast({ message }: ToastProps) {
  return (
    <div className="toast">
      <p>{message}</p>
    </div>
  );
}
