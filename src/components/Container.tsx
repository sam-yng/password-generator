import React from "react";
import classNames from "classnames";
import { Form } from "./Form";

export const Container: React.FC = () => {
  return (
    <main className={classNames("min-w-[30vw]", "space-y-4", "mt-4")}>
      <Form />
    </main>
  );
};
