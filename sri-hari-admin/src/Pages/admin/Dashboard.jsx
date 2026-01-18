import React, { useState } from "react";
import SalesChart from "../../components/admin/saleschart";

import Sidebar from "../../components/admin/sidebar";
import Topbar from "../../components/admin/Topbar";
import {
  ShoppingBag,
  Cake,
  IndianRupee,
  Users,
} from "lucide-react";

export default function Dashboard() {
  const [open, setOpen] = useState(false);

  const stats = [
    {
      title: "Total Orders",
      value: "245",
      icon: ShoppingBag,
      bg: "bg-[#EAF4F6]",
    },
    {
      title: "Products",
      value: "38",
      icon: Cake,
      bg: "bg-[#FDF1EC]",
    },
    {
      title: "Revenue",
      value: "₹1,24,500",
      icon: IndianRupee,
      bg: "bg-[#F3EFEA]",
    },
    {
      title: "Users",
      value: "120",
      icon: Users,
      bg: "bg-[#EEF2F3]",
    },
  ];

  return (
      <div className="flex h-screen bg-[#EFE6E2] overflow-hidden">

      
      {/* Sidebar */}
      <Sidebar open={open} setOpen={setOpen} />

      {/* Right side */}
      <div className="flex flex-col flex-1 min-w-0">

        {/* Topbar */}
        <Topbar toggle={() => setOpen(true)} />

        {/* Main */}
         <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">

          <h1 className="text-2xl font-semibold text-[#4B2E39] mb-6">
            Hello Admin 
          </h1>

    {/*==========================  Cards  ============================ */}
<div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
  {stats.map((card) => {
    const Icon = card.icon;

    return (
      <div
        key={card.title}
        className="
          group
          bg-white rounded-2xl p-4 sm:p-5
          transition-all duration-300
          hover:-translate-y-1 hover:shadow-xl
          flex flex-col sm:flex-row
          items-center sm:items-start
          gap-3 sm:gap-4
        "
      >
        {/* Icon */}
        <div
          className={`
            w-11 h-11 sm:w-14 sm:h-14
            flex items-center justify-center
            rounded-xl ${card.bg}
            text-[#1F4E5F]
            transition-transform duration-300
            group-hover:scale-110
          `}
        >
          <Icon size={22} />
        </div>

        {/* Text */}
        <div className="text-center sm:text-left">
          <p className="text-gray-500 text-xs sm:text-sm">
            {card.title}
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-[#4B2E39] mt-1">
            {card.value}
          </h2>
        </div>
      </div>
    );
  })}
</div>


{/* ================== Sales Chart ============================*/}
<section className="my-8">
  <SalesChart />
</section>


{/* ====  Quick Actions ====*/}
{/* <section className="mb-8">
  <h2 className="text-lg font-semibold text-[#4B2E39] mb-4">
    Quick Actions
  </h2>

  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
    {[
      { text: "Add Product", color: "bg-[#1F4E5F]" },
      { text: "View Orders", color: "bg-[#4B2E39]" },
      { text: "Add Category", color: "bg-[#8B5D6A]" },
      { text: "Manage Users", color: "bg-[#C08B5C]" },
    ].map((item) => (
      <button
        key={item.text}
        className={`${item.color} text-white py-3 rounded-xl font-medium
        hover:scale-105 transition-transform`}
      >
        {item.text}
      </button>
    ))}
  </div>
</section> */}

{/* ===  Recent Orders  ==== */}
{/* <section className="bg-white rounded-2xl p-6 shadow-sm">
  <h2 className="text-lg font-semibold mb-4 text-[#4B2E39]">
    Recent Orders
  </h2>

  <div className="overflow-x-auto">
    <table className="w-full text-sm">
      <thead className="text-gray-500 border-b">
        <tr>
          <th className="py-2 text-left">Order ID</th>
          <th className="py-2 text-left">Customer</th>
          <th className="py-2 text-left">Amount</th>
          <th className="py-2 text-left">Status</th>
        </tr>
      </thead>

      <tbody className="text-black">
        {[
          { id: "#1001", name: "Ravi", amt: "₹450", status: "Pending" },
          { id: "#1002", name: "Anita", amt: "₹1,200", status: "Completed" },
          { id: "#1003", name: "Rahul", amt: "₹760", status: "Completed" },
        ].map((o) => (
          <tr key={o.id} className="border-b last:border-0">
            <td className="py-3">{o.id}</td>
            <td>{o.name}</td>
            <td>{o.amt}</td>
            <td>
              <span
                className={`px-3 py-1 rounded-full text-xs
                ${
                  o.status === "Completed"
                    ? "bg-green-100 text-green-600"
                    : "bg-yellow-100 text-yellow-600"
                }`}
              >
                {o.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</section> */}



 </main>
      </div>
    </div>
  );
}
