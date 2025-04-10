import React from "react";

export default function Input({ ref, label, isTextArea = false, ...props }) {
  const classes = [
    "w-full",
    "focus:outline-none",
    "focus:border-stone-600",
    "p-1",
    "border-b-2",
    "rounded-sm",
    "border-stone-300",
    "bg-stone-200",
    "text-stone-600",
  ].join(" ");

  return (
    <p className="flex flex-col gap-1 my-4 ">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {isTextArea ? (
        <textarea ref={ref} className={classes} {...props} />
      ) : (
        <input ref={ref} className={classes} {...props} />
      )}
    </p>
  );
}
