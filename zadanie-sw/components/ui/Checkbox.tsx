import { FC } from "react";
interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const Checkbox: FC<CheckboxProps> = ({ checked, onChange }) => {
  return (
    <div>
      <input
        type="checkbox"
        className="sr-only peer"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span
        className="
                    h-6 w-6
                    block border-1 rounded-sm border-[#E0E2EA]
                    peer-checked:before:content-['✔']
                    peer-checked:before:flex peer-checked:before:items-center peer-checked:before:justify-center
                    peer-checked:before:text-black
                    peer-checked:border-black"
        role="checkbox"
      />
    </div>
  );
};
