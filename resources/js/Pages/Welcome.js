import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className="fixed top-0 right-0 px-6 py-4 sm:block">
                    {props.auth.user ? (
                        <Link
                            href={route("dashboard")}
                            className="text-sm text-gray-700 underline"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="text-sm text-gray-700 underline"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route("register")}
                                className="ml-4 text-sm text-gray-700 underline"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>

                <button
                    id="dropdownButton"
                    data-dropdown-toggle="dropdown"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                >
                    Dropdown button{" "}
                    <svg
                        class="ml-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                        ></path>
                    </svg>
                </button>

                <div
                    id="dropdown"
                    class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                >
                    <ul class="py-1" aria-labelledby="dropdownButton">
                        <li>
                            <a
                                href="#"
                                class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                            >
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                            >
                                Settings
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                            >
                                Earnings
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                            >
                                Sign out
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
