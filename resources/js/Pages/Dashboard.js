import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import Card from "@/Components/Card";
import { BiExport, BiImport } from "react-icons/bi";
import Table from "@/Components/Table";

export default function Dashboard({ auth, errors }) {
    const cardInfo = [
        {
            icon: <BiExport className="w-20 h-16" />,
            title: "تصدير البيانات",
            description: "تصدير البيانات الخاصة بك",
            link: "/sent",
        },
        {
            icon: <BiImport className="w-20 h-16" />,
            title: "استيراد البيانات",
            description: "استيراد البيانات الخاصة بك",
            link: "/received",
        },
    ];

    return (
        <Authenticated
            auth={auth}
            errors={errors}
            header={
                <h2 className="font-semibold text-xl text-center text-gray-800 leading-tight">
                    لوحة التحكم
                </h2>
            }
        >
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6  lg:px-8">
                    <div className="bg-white py-4 gap-4 px-4 grid grid-cols-2 items-center justify-center overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="col-span-2 flex gap-x-4">
                            {cardInfo.map((card, index) => {
                                return (
                                    <Card
                                        key={index}
                                        icon={card.icon}
                                        title={card.title}
                                        description={card.description}
                                        link={card.link}
                                    />
                                );
                            })}
                        </div>
                        {auth.user.role == 0 ? (
                            <div className="col-span-2 mt-10">
                                <p className="text-center text-muted text-xl">
                                    الصادرة والواردة مؤخراً
                                </p>
                                <Table
                                    data={""}
                                    cols={["id", "name"]}
                                    arabicCols={["رقم", "الاسم"]}
                                />
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
