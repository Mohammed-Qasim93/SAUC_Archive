import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import React from "react";

const Index = ({ auth, errors }) => {
    return (
        <Authenticated
            header={
                <h2 className="font-semibold text-xl text-center text-gray-800 leading-tight">
                    لوحة التحكم
                </h2>
            }
            auth={auth}
            errors={errors}
        >
            <Head title="لوحة التحكم" />
        </Authenticated>
    );
};

export default Index;
