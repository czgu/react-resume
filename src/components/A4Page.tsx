import type { A4PageProps } from "../types";

export const A4Page = ({ children }: A4PageProps) => {
  return (
    <div className="bg-white flex flex-col mx-auto mb-[0.5cm] p-[1cm] w-[21cm] h-[29.7cm] print:mb-0">
      {children}
    </div>
  );
};
