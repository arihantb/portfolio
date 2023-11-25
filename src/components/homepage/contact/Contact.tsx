import { HStack, Text, VStack } from "@chakra-ui/react";
import { authorEmail } from "../../../common/constants";
import emailjs from "emailjs-com";

export const Contact = () => {
  const sendEmail = (event: any) => {
    event.preventDefault();

    // emailjs
    //   .sendForm(
    //     "gmail_portfolio",
    //     "gmail_template",
    //     event.target,
    //     "YFjB_NGTikF3SziPK"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  };

  return (
    <VStack>
      <Text fontSize="3xl" fontWeight="bold" textColor="brown.600">
        Contact
      </Text>
      <VStack>
        <HStack fontSize={18} justifyContent="center">
          <Text textColor="brown.600">Email me at</Text>
          <a
            className="flip-text focus:outline-none cursor-pointer"
            data-replace={authorEmail}
            href={`mailto:${authorEmail}`}
          >
            <Text textColor="blue.500">{authorEmail}</Text>
          </a>
          <Text textColor="brown.600">or message me here:</Text>
        </HStack>
        <div className="flex justify-center">
          <form
            className="mt-10 w-full md:mx-auto md:w-2/3 lg:w-1/2 xs:w-2/3"
            onSubmit={sendEmail}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="relative z-10 col-span-2 sm:col-span-1">
                <input
                  type="text"
                  name="name"
                  className="pl-3 peer block w-full outline-none rounded-border-blue rounded-md bg-transparent py-2.5 px-0 text-xl text-stone-500"
                  placeholder=" "
                />
                <label className="-z-10 peer-focus:z-10 peer-focus:ml-2 peer-focus:px-2 peer-out-of-focus dark:peer-out-of-focus peer-focus:bg-white dark:peer-focus:bg-slate-800 px-2 absolute ml-1 top-3 origin-[0] -translate-y-6 scale-75 transform text-xl text-gray-400 duration-200 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                  Name
                </label>
              </div>
              <div className="relative z-0 col-span-2 sm:col-span-1">
                <input
                  type="email"
                  name="email"
                  className="pl-3 peer block w-full outline-none rounded-border-blue rounded-md bg-transparent py-2.5 px-0 text-xl text-stone-500"
                  placeholder=" "
                />
                <label className="-z-10 peer-focus:z-10 peer-focus:ml-2 peer-focus:px-2 peer-out-of-focus dark:peer-out-of-focus peer-focus:bg-white dark:peer-focus:bg-slate-800 px-2 absolute ml-1 top-3 origin-[0] -translate-y-6 scale-75 transform text-xl text-gray-400 duration-200 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                  Email
                </label>
              </div>
              <div className="relative z-0 col-span-2">
                <textarea
                  name="message"
                  rows={5}
                  className="pl-3 peer block w-full outline-none rounded-border-blue rounded-md bg-transparent py-2.5 px-0 text-xl text-stone-500"
                  placeholder=" "
                ></textarea>
                <label className="-z-10 peer-focus:z-10 peer-focus:ml-2 peer-focus:px-2 peer-out-of-focus dark:peer-out-of-focus peer-focus:bg-white dark:peer-focus:bg-slate-800 px-2 absolute ml-1 top-3 origin-[0] -translate-y-6 scale-75 transform text-xl text-gray-400 duration-200 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                  Message
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="sm:h-10 h-8 w-1/3 text-base xs:text-lg md:text-xl mt-5 rounded-md bg-blue-500 hover:bg-blue-400 text-white float-right focus:outline-none focus:bg-blue-400 duration-700"
            >
              Send
            </button>
          </form>
        </div>
      </VStack>
    </VStack>
  );
};
