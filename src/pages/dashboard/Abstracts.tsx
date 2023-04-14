import DashboardLayout from "@layouts/DashboardLayout";
import React from "react";

type Props = {};

const Abstracts = (props: Props) => {
  return (
    <DashboardLayout>
      <div className="flex flex-row items-center space-x-4 bg-white p-2 m-4 rounded-lg flex-1">
        <input
          type="text"
          placeholder="Search abstracts..."
          className="p-2 border border-slate-200 flex-1 rounded-lg"
        />
        <div className="flex p-2 bg-blue-900 text-white font-semibold rounded-lg">
          Add New
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Abstracts;
