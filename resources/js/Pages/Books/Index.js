import React from "react";
import Table from "@/Components/Table";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";
import { AiOutlineUserAdd } from "react-icons/ai";

const Index = ({ auth, errors }) => {
    return (
        <Authenticated
            header={
                <h2 className="font-semibold text-xl text-center text-muted leading-tight">
                    الصادرة
                </h2>
            }
            auth={auth}
            errors={errors}
        >
            <Head title="لوحة التحكم" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6  lg:px-8">
                    <div className="bg-white py-4 gap-4 px-4 grid grid-cols-2 items-center justify-center overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="col-span-1 px-2">
                            <Link
                                href="/register"
                                className="w-fit flex items-center gap-x-4 px-4 py-2 rounded-md bg-primary-default hover:bg-primary-dark text-muted"
                            >
                                <span>إضافة كتاب</span>
                                <AiOutlineUserAdd className="bg-inherit" />
                            </Link>
                        </div>

                        <div className="col-span-2 mt-10">
                            <Table
                                data={auth.user}
                                cols={["name", "email", "role"]}
                                arabicCols={[
                                    "الاسم",
                                    "البريد الالكتروني",
                                    "الصلاحيات",
                                ]}
                                paginate
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};

export default Index;
