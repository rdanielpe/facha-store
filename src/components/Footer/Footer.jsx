const Footer = () => {
  return (
    <>
      <footer className="m-4 mt-20 bg-[#03465E] rounded-lg shadow dark:bg-gray-900">
        <div className="w-full max-w-screen-xl p-4 mx-auto md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://flowbite.com/"
              className="flex items-center mb-4 space-x-3 sm:mb-0 rtl:space-x-reverse"
            >
              <img
                src="../../../public/img/logo.png"
                className="h-20"
                alt="Flowbite Logo"
              />
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-white sm:text-center dark:text-gray-400">
            © 2024
            <a href="#" className="hover:underline">
              Fach@-Store
            </a>
          </span>
        </div>
      </footer>
    </>
  );
};
export default Footer;
