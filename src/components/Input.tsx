import React, { useEffect, useState } from "react";
import { cls } from "../libs/utils";

const EmailCheckerSvg: React.FC<{ emailCorrect: boolean }> = ({
  emailCorrect,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cls(
        "h-5 w-5 absolute top-3 right-2",
        emailCorrect ? "text-teal-5w00" : "text-gray-500"
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
  );
};

const EyeSvg: React.FC<{ className: string; toggleShow: () => void }> = ({
  className,
  toggleShow,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
      onClick={toggleShow}
    >
      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
      <path
        fillRule="evenodd"
        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};

const EyeOffSvg: React.FC<{ className: string; toggleShow: () => void }> = ({
  className,
  toggleShow,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
      onClick={toggleShow}
    >
      <path
        fillRule="evenodd"
        d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
        clipRule="evenodd"
      />
      <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
    </svg>
  );
};

const InputError: React.FC<{ error: string }> = ({ error }) => {
  return <span className="text-xs text-red-500">{error}</span>;
};

const Input = () => {
  const [email, setEmail] = useState<string | null>();
  const [emailError, setEmailError] = useState<string | null>();
  const [emailCorrect, setEmaiCorrect] = useState<boolean>(false);

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const toggleShowPassword = () => setShowPassword(true);
  const toggleUnShowPassword = () => setShowPassword(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  var regEmail =
    // eslint-disable-next-line no-useless-escape
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
          <EmailCheckerSvg emailCorrect={emailCorrect} />
        </div>
        {emailError && <InputError error={emailError} />}
      </div>
      <div className="flex flex-col space-y-2">
        <label className="text-xs text-gray-500">Password</label>
        <div className="relative w-full">
          <input
            type={showPassword ? "text" : "password"}
            className="p-2 bg-gray-50 focus:bg-gray-100 focus:outline-none rounded-sm shadow-sm w-full"
            placeholder="Password"
          />
          {showPassword ? (
            <EyeSvg
              className="h-5 w-5 absolute top-3 right-2 text-teal-5w00"
              toggleShow={toggleUnShowPassword}
            />
          ) : (
            <EyeOffSvg
              className="h-5 w-5 absolute top-3 right-2 text-gray-500"
              toggleShow={toggleShowPassword}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Input;
