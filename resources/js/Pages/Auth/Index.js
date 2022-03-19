import Table from "@/Components/Table";
import Authenticated from "@/Layouts/Authenticated";
import React from "react";

const Index = ({ auth, errors, users }) => {
    console.log(users);
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
                        {auth.user.role == 1 ? (
                            <div className="col-span-2 mt-10">
                                <Table
                                    data={users}
                                    cols={["id", "name"]}
                                    arabicCols={["رقم", "الاسم"]}
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
