import React, { ChangeEventHandler } from "react";
import classNames from "classnames";
import { Checkbox } from "@mui/material";

type OptionProps = {
  option: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  name: string;
};

export const Option: React.FC<OptionProps> = ({
  option,
  onChange,
  name,
}: OptionProps) => {
  return (
    <div
      className={classNames("flex", "flex-row", "mb-2", "mt-2", "items-center")}
    >
      <Checkbox
        sx={{
          color: "#A4FFAF",
          "&.Mui-checked": {
            color: "#A4FFAF",
          },
          ml: 0,
        }}
        name={name}
        onChange={onChange}
      />
      <h1 className="ml-2">{option}</h1>
    </div>
  );
};
