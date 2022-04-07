import React, { useEffect, useState } from "react";
import { cls } from "../libs/utils";

const InputError: React.FC<{ error: string }> = ({ error }) => {
  return <span className="text-xs text-red-500">{error}</span>;
};

const Input = () => {
  const [email, setEmail] = useState<string | null>();
  const [emailError, setEmailError] = useState<string | null>();
  const [password, setPassword] = useState<string | null>();
  const [emailCorrect, setEmaiCorrect] = useState<boolean>(false);

  var regEmail =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

  useEffect(() => {
    if (email) {
      setEmaiCorrect(regEmail.test(email));
    }
  }, [email, regEmail]);

  return (
    <div className="space-y-2 w-96">
      <div className="flex flex-col space-y-2">
        <label className="text-xs text-gray-500">Email</label>
        <div className="relative w-full">
          <input
            type="text"
            className="p-2 bg-gray-50 focus:bg-gray-100 focus:outline-none rounded-sm shadow-sm w-full"
            placeholder="E-Mail"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            onBlur={() => {
              if (email) {
                if (regEmail.test(email)) {
                  setEmailError(null);
                } else {
                  setEmailError("Invaild e-mail address");
                }
              }
            }}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={cls(
              "h-5 w-5 absolute top-3 right-2",
              emailCorrect ? "text-teal-600" : "text-gray-400"
            )}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        {emailError && <InputError error={emailError} />}
      </div>
      <div className="flex flex-col space-y-2">
        <label className="text-xs text-gray-500">Password</label>
        <input
          type="password"
          className="p-2 bg-gray-50 focus:bg-gray-100 focus:outline-none rounded-sm shadow-sm "
          placeholder="Password"
        />
      </div>
    </div>
  );
};

export default Input;
