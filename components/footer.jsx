import { Instagram } from "lucide-react";
import Container from "./ui/container";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <Container>
        <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 mb-14 sm:my-5">
          <div className="flex flex-col items-start p-5 mx-6 sm:mx-2 gap-y-3">
            <p className={`font-bold text-2xl tracking-tighter`}>
              drizly<span className="text-orange-500">mall</span>
            </p>
            <p className="text-xs text-left text-black">
              &copy; 2024 Drizlymall, Inc. Të gjitha të drejtat të rezervuara.
            </p>
            <div className="flex items-center gap-x-2">
              <Link
                href="https://www.instagram.com/drizlymall/"
                target="_blank"
                className="p-2 rounded-full bg-neutral-200"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://www.tiktok.com/@drizlymall"
                target="_blank"
                className="bg-neutral-200 text-[20px] rounded-full p-2 mx-1"
              >
                <svg
                  id="icons"
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z" />
                </svg>
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=100088688234176&mibextid=LQQJ4d
"
                target="_blank"
                className="bg-neutral-200 text-[20px] rounded-full p-2"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-start justify-end py-5 mx-10 sm:mx-8 gap-y-3 sm:flex-row gap-x-20">
            <div>
              <h1 className="font-semibold text-left">Kontakti</h1>
              <ul className="py-2 text-sm text-gray-500">
                <li className="py-1">
                  <a
                    href="mailto:drizlymall@gmail.com"
                    className="hover:underline"
                  >
                    drizlymall@gmail.com
                  </a>
                </li>
                <li className="font-semibold text-gray-600">
                  Instagram:
                  <a
                    href="https://www.instagram.com/drizlymall/"
                    className="font-normal text-gray-500 hover:underline"
                  >
                    &nbsp;drizlymall
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
