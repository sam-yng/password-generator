import React from "react";
import classNames from "classnames";

export const Container: React.FC = () => {
  return (
    <main className={classNames("min-w-[30vw]", "space-y-4", "mt-4")}>
      <div className={classNames("h-[10vh]", "bg-offgray")}></div>
      <div className={classNames("h-[50vh]", "bg-offgray")}></div>
    </main>
  );
};
