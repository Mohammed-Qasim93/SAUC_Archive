import React from "react";
import { Link } from "@inertiajs/inertia-react";

export default function ResponsiveNavLink({
    method = "get",
    as = "a",
    href,
    active = false,
    children,
}) {
    return (
        <Link
            method={method}
            as={as}
            href={href}
            className={`w-full flex items-start pl-3 pr-4 py-2 border-l-4 ${
                active
                    ? "text-dark border-primary-dark focus:outline-none focus:text-primary-default focus:bg-muted "
                    : "border-transparent text-muted hover:text-dark hover:bg-default hover:border-secondary-dark"
            } text-base font-medium focus:outline-none transition duration-150 ease-in-out`}
        >
            {children}
        </Link>
    );
}
