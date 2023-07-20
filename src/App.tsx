import classNames from "classnames";
import React from "react";
import { Container } from "./components/Container";

export const App: React.FC = () => {
  return (
    <main
      className={classNames(
        "bg-black",
        "h-screen",
        "flex",
        "flex-col",
        "justify-center",
        "items-center",
      )}
    >
      <h1 className={classNames("text-xl", "text-gray", "font-regular")}>
        Password Generator
      </h1>
      <Container />
    </main>
  );
};
