import { Badge } from "@nextui-org/badge";
import ButtonComponent from "./ButtonComponent";
import { Button } from "@nextui-org/button";
import NotificationIcon from "./icons/NotificationIcon";

export function NavbarComponent() {
  return (
    <div className="sticky top-0 z-40 shadow-lg bg-white">
      <div className="mx-auto container px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="md:flex md:items-center md:gap-12">
          <a className="block" href="/">
            <span className="self-center whitespace-nowrap text-xl font-semibold text-[#2372B7]">
              Ecommerce Websit
            </span>
          </a>
        </div>

        <div className="hidden md:block">
          <nav aria-label="Global">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/about-us"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/policy"
                >
                  Policy
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/create-product"
                >
                  My Shop
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex md:order-2 items-center gap-6">
            <Badge content="9+" shape="circle" color="danger">
              <Button
                radius="full"
                isIconOnly
                aria-label="more than 99 notifications"
                variant="light"
              >
                <NotificationIcon height={5} width={10} size={24} />
              </Button>
            </Badge>
            <a href="/login">
              <ButtonComponent name="Login" />
            </a>
          </div>
          <div className="block md:hidden">
            <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
