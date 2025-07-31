import { type FormInputProps } from "../types/types";

export const FormInput: React.FC<FormInputProps> = ({
  name,
  type = "text",
  value,
  onChange,
  label,
  placeholder,
  className = "",
  children,
}) => (
  <div className={`mb-4 relative ${className}`}>
    {label && (
      <label htmlFor={name} className="block mb-1 font-medium">
        {label}
      </label>
    )}
    <div className="relative">
      {children && (
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 flex items-center gap-1">
          {children}
        </span>
      )}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-xl border border-[#828282] bg-white py-2 pl-10 pr-4 outline-none transition-all duration-300 ${className}`}
      />
    </div>
  </div>
);

// const Form: React.FC<FormProps> = ({ onSubmit, children, className = "" }) => {
//   return (
//     <form onSubmit={onSubmit} className={`mb-2 ${className}`}>
//       {children}
//     </form>
//   );
// };
