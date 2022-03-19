import React, { useEffect } from "react";
import Button from "@/Components/Button";
import Guest from "@/Layouts/Guest";

import ValidationErrors from "@/Components/ValidationErrors";
import { Head, useForm } from "@inertiajs/inertia-react";
import FormItem from "@/Components/FormItem";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const handleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <Guest>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <FormItem
                    name="الاسم"
                    type="text"
                    label="الاسم"
                    placeholder=" "
                    required
                    handleChange={handleChange}
                />

                <FormItem
                    name="password"
                    type="password"
                    label="كلمة المرور"
                    placeholder=" "
                    required
                    handleChange={handleChange}
                />

                <div className="flex items-center justify-end mt-4">
                    <Button className="ml-4" processing={processing}>
                        دخول
                    </Button>
                </div>
            </form>
        </Guest>
    );
}
