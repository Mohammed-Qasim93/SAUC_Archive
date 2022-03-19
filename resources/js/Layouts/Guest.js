import React from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/inertia-react";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center sm:pt-0 ">
            <div className="flex flex-col items-center">
                <p>
                    <ApplicationLogo className="w-40 h-40 fill-current text-gray-500" />
                </p>
                <h1 className="text-xl my-5 font-tajawal-bold select-none"><span className="text-primary-dark">نظام الارشيف</span> - كلية شط العرب الجامعة</h1>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
