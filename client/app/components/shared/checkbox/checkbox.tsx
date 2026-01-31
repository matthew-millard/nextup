import type { InputHTMLAttributes } from "react";

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

export function Checkbox({ label, className = "", id, ...props }: CheckboxProps) {
  return (
    <label className="flex items-center cursor-pointer" htmlFor={id}>
      <input
        type="checkbox"
        id={id}
        className={`
          appearance-none
          w-6 h-6
          border-2 border-[rgba(0,0,0,0.12)]
          rounded
          bg-white
          cursor-pointer
          relative
          checked:bg-[#494949]
          checked:border-[#494949]
          checked:after:content-['']
          checked:after:absolute
          checked:after:left-1.75
          checked:after:top-0.75
          checked:after:w-1.5
          checked:after:h-2.5
          checked:after:border-white
          checked:after:border-r-2
          checked:after:border-b-2
          checked:after:rotate-45
          transition-colors
          ${className}
        `}
        {...props}
      />
      {label && <span className="ml-2">{label}</span>}
    </label>
  );
}
