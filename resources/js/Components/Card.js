import React from "react";
import { Link } from "@inertiajs/inertia-react";

const Card = ({ icon, title, description, link }) => {
    return (
        <Link
            href={link}
            className="flex   items-center bg-white rounded-lg border shadow-md md:flex-row w-full hover:bg-default dark:border-dark dark:bg-muted dark:hover:bg-dark"
        >
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {icon}
            </span>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary-default dark:text-default">
                    {title}
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    {description}
                </p>
            </div>
        </Link>
    );
};

export default Card;
