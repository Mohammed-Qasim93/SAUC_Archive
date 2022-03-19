import React, { useEffect } from "react";
import Button from "@/Components/Button";
import Guest from "@/Layouts/Guest";
import FormItem from "@/Components/FormItem";
import ValidationErrors from "@/Components/ValidationErrors";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
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

    const handleClick = () => {
        Inertia.get("/");
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <Guest>
            <Head title="إضافة مستخدم" />
            <ValidationErrors errors={errors} />
            <form onSubmit={submit}>
                <FormItem
                    name="name"
                    type="text"
                    label="الاسم"
                    forInput="name"
                    required
                    placeholder=" "
                    handleChange={handleChange}
                />
                <FormItem
                    name="password"
                    type="password"
                    label="كلمة المرور"
                    forInput="password"
                    required
                    placeholder=" "
                    handleChange={handleChange}
                />
                <FormItem
                    name="password_confirmation"
                    type="password"
                    label="تأكيد كلمة المرور"
                    forInput="password_confirmation"
                    required
                    placeholder=" "
                    handleChange={handleChange}
                />

                <div className="flex items-center justify-around mt-4">
                    <Button primary processing={processing}>
                        تسجيل
                    </Button>
                    <Button type="button" handleClick={handleClick}>
                        رجوع
                    </Button>
                </div>
            </form>
        </Guest>
    );
}
