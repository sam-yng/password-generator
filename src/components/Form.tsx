import React, { useState } from "react";
import classNames from "classnames";
import { Slider } from "@mui/material";
import { useFormik } from "formik";
import { Option } from "./Option";
import copy from "../assets/images/icon-copy.svg";

type FormikErrors = {
  length?: string;
};

export const Form: React.FC = () => {
  const [password, setPassword] = useState<string | null>("P4$55WOrD!");
  const [strength, setStrength] = useState<number | null>(null);

  const formik = useFormik({
    initialValues: {
      length: 10,
      upper: false,
      lower: false,
      numbers: false,
      symbols: false,
    },
    validate() {
      const errors: FormikErrors = {};
      if (formik.values.length === 0)
        errors.length = "Must have at least 1 character";
    },
    onSubmit: (values) => {
      console.log(values);
      setPassword(generatePassword(formik.values.length));
      setStrength(passwordStrength());
      console.log(password);
    },
  });

  const lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberCharacters = "1234567890";
  const symbolCharacters = "!@#$%^&*";

  const generatePassword = (length: number) => {
    let result = "";
    let characters = "";
    formik.values.lower ? (characters += lowerCaseCharacters) : null;
    formik.values.upper ? (characters += upperCaseCharacters) : null;
    formik.values.numbers ? (characters += numberCharacters) : null;
    formik.values.symbols ? (characters += symbolCharacters) : null;

    if (
      !formik.values.lower &&
      !formik.values.upper &&
      !formik.values.numbers &&
      !formik.values.symbols
    ) {
      return "P4$55WOrD!";
    }

    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const passwordStrength = () => {
    let strength = 1;
    formik.values.upper ? (strength += 1) : null;
    formik.values.numbers ? (strength += 1) : null;
    formik.values.symbols ? (strength += 1) : null;
    return strength;
  };

  return (
    <>
      <div
        className={classNames(
          "h-[8vh]",
          "bg-offgray",
          "font-regular",
          "flex",
          "flex-row",
          "items-center",
          "px-6",
          "py-6",
          "justify-between",
        )}
      >
        <h1
          className={classNames(
            `${password === "P4$55WOrD!" ? "text-gray" : "text-altwhite"}`,
            "text-2xl",
          )}
        >
          {password}
        </h1>
        <button>
          <img src={copy} />
        </button>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className={classNames(
          "h-[60vh]",
          "bg-offgray",
          "text-altwhite",
          "font-regular",
          "px-6",
          "py-6",
        )}
      >
        <div
          className={classNames("flex", "flex-row", "justify-between", "mb-4")}
        >
          <label>Character Length</label>
          <p>{formik.values.length}</p>
        </div>
        <Slider
          sx={{ color: "#A4FFAF" }}
          onChange={formik.handleChange}
          value={formik.values.length}
          min={0}
          max={20}
          defaultValue={10}
          name="length"
        />
        <Option
          option="Include Uppercase Letters"
          onChange={formik.handleChange}
          name="upper"
        />
        <Option
          option="Include Lowercase letters"
          onChange={formik.handleChange}
          name="lower"
        />
        <Option
          option="Include Numbers"
          onChange={formik.handleChange}
          name="numbers"
        />
        <Option
          option="Include Symbols"
          onChange={formik.handleChange}
          name="symbols"
        />
        <div
          className={classNames(
            "flex",
            "flex-row",
            "font-regular",
            "bg-huh",
            "mt-6",
            "items-center",
            "justify-between",
            "mx-2",
            "py-5",
          )}
        >
          <h1 className={classNames("text-gray", "ml-5")}>STRENGTH</h1>
          <div className={classNames("text-2xl", "mr-5")}>
            {strength === null ? (
              <h1 className="text-gray">N/A</h1>
            ) : strength === 1 ? (
              <h1 className="text-altwhite">TOO WEAK!</h1>
            ) : strength === 2 ? (
              <h1 className="text-altwhite">WEAK</h1>
            ) : strength === 3 ? (
              <h1 className="text-altwhite">MEDIUM</h1>
            ) : strength === 4 ? (
              <h1 className="text-altwhite">STRONG</h1>
            ) : null}
          </div>
        </div>
        <div className={classNames("flex", "mt-8")}>
          <button
            type="submit"
            className={classNames(
              "w-full",
              "border",
              "border-green",
              "text-black",
              "bg-green",
              "text-lg",
              "mx-2",
              "py-3",
              "hover:bg-offgray",
              "hover:text-green",
            )}
          >
            GENERATE
          </button>
        </div>
      </form>
    </>
  );
};
