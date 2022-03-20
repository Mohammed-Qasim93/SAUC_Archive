import React from "react";
import Table from "@/Components/Table";
import Authenticated from "@/Layouts/Authenticated";
import { Link } from "@inertiajs/inertia-react";
import { AiOutlineUserAdd } from "react-icons/ai";
import moment from "moment";
import "moment/locale/ar-kw";

const Index = ({ auth, errors, users, column }) => {
    const cols = Object.keys(column);
    const data = users.map((user) => {
        user.created_at = moment().format("DD/MM/YYYY");
        user.last_seen =
            moment().minutes() <
            new Date().setMinutes(new Date().getMinutes() - 2)
                ? "online"
                : "offline";
        return user;
    });
    console.log(data);
    return (
        <Authenticated
            auth={auth}
            errors={errors}
            header={
                <h2 className="font-semibold text-xl text-center text-gray-800 leading-tight">
                    المستخدمين
                </h2>
            }
        >
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6  lg:px-8">
                    <div className="bg-white py-4 gap-4 px-4 grid grid-cols-2 items-center justify-center overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="col-span-1 px-2">
                            <Link
                                href="/register"
                                className="w-fit flex items-center gap-x-4 px-4 py-2 rounded-md bg-primary-default hover:bg-primary-dark text-muted"
                            >
                                <span>إضافة مستخدم</span>
                                <AiOutlineUserAdd className="bg-inherit" />
                            </Link>
                        </div>
                        {auth.user.role == "مدير" ? (
                            <div className="col-span-2 mt-10">
                                <Table
                                    data={data}
                                    cols={cols}
                                    arabicCols={column}
                                    paginate
                                />
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};

export default Index;
