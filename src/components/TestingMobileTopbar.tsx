import React from "react"

type Props = {
  data?: string
}

const TestingMobileTopbar = (props: Props) => {
  return (
    <div>


      <ul className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
        <li className="w-full">
          <a
            href="#"
            className="inline-block w-full p-4 text-gray-900 bg-gray-100 rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white"
            aria-current="page"
          >
            Profile
          </a>
        </li>
        <li className="w-full">
          <a
            href="#"
            className="inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            Dashboard
          </a>
        </li>
        <li className="w-full">
          <a
            href="#"
            className="inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            Settings
          </a>
        </li>
        <li className="w-full">
          <a
            href="#"
            className="inline-block w-full p-4 bg-white rounded-r-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            Invoice
          </a>
        </li>
      </ul>
    </div>
  )
}

export default TestingMobileTopbar
