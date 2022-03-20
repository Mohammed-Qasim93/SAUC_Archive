import React, { useEffect } from "react";
import Table from "@/Components/Table";
import Authenticated from "@/Layouts/Authenticated";
import { Link } from "@inertiajs/inertia-react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { RiRadioButtonLine } from "react-icons/ri";
import moment from "moment";
import "moment/locale/ar-kw";

const Index = ({ auth, errors, users, column }) => {
    const cols = Object.keys(column);
    let last_seen = [];
    const data = users.map((user, key) => {
        user.created_at = moment().format("DD/MM/YYYY");
        last_seen[key] =
            moment().subtract(1, "m").format("DD/MM/YYYY HH:mm") <
                moment(user.last_seen).format("DD/MM/YYYY HH:mm") &&
            user.last_seen != null ? (
                <span className="text-green-400 gap-x-2 flex items-center justify-center">
                    <RiRadioButtonLine />
                    <p>متصل</p>
                </span>
            ) : (
                <span className="text-red-400 gap-x-2 flex items-center justify-center">
                    {moment(user.last_seen).fromNow()}
                </span>
            );
        return { ...user, last_seen: last_seen[key] };
    });
    return (
        <Authenticated
            auth={auth}
            errors={errors}
            header={
                <h2 className="font-semibold text-xl text-center text-muted leading-tight">
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
