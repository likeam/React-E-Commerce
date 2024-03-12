import React, { useContext } from "react";
import Layout from "../../../components/layout/Layout";
import MyContext from "../../../context/data/MyContext";
import {FaUserTie } from 'react-icons/fa';
import DashboardTab from "./DashboardTab";

const Dashboard = () => {
  const context = useContext(MyContext);

  const { mode } = context;

  

  return (
    <Layout>
      <section className="mt-10 mb-10 text-gray-600 body-font">
        <div className="container px-5 mx-auto mb-10">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="w-full p-4 md:w-1/4 sm:w-1/2">
              <div
                className=" border-2 hover:shadow-purple-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300    px-4 py-3 rounded-xl"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <div
                  className="inline-block w-12 h-12 mb-3 text-purple-500"
                  viewBox="0 0 24 24"
                >
                  <FaUserTie size={50} />
                </div>
                <h2
                  className="text-3xl font-medium text-black title-font fonts1"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  10
                </h2>
                <p
                  className="font-bold text-purple-500 "
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Total Products
                </p>
              </div>
            </div>
            <div className="w-full p-4 md:w-1/4 sm:w-1/2">
              <div
                className=" border-2 hover:shadow-purple-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300    px-4 py-3 rounded-xl"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <div
                  className="inline-block w-12 h-12 mb-3 text-purple-500"
                  viewBox="0 0 24 24"
                >
                  <FaUserTie size={50} />
                </div>
                <h2
                  className="text-3xl font-medium text-black title-font fonts1"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  10
                </h2>
                <p
                  className="font-bold text-purple-500 "
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Total Orders
                </p>
              </div>
            </div>
            <div className="w-full p-4 md:w-1/4 sm:w-1/2">
              <div
                className=" border-2 hover:shadow-purple-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300    px-4 py-3 rounded-xl"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <div
                  className="inline-block w-12 h-12 mb-3 text-purple-500"
                  viewBox="0 0 24 24"
                >
                  <FaUserTie size={50} />
                </div>
                <h2
                  className="text-3xl font-medium text-black title-font fonts1"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  20
                </h2>
                <p
                  className="font-bold text-purple-500 "
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Total Users
                </p>
              </div>
            </div>
            <div className="w-full p-4 md:w-1/4 sm:w-1/2">
              <div
                className=" border-2 hover:shadow-purple-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300    px-4 py-3 rounded-xl"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <div
                  className="inline-block w-12 h-12 mb-3 text-purple-500"
                  viewBox="0 0 24 24"
                >
                  <FaUserTie size={50} />
                </div>
                <h2
                  className="text-3xl font-medium text-black title-font fonts1"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  20
                </h2>
                <p
                  className="font-bold text-purple-500 "
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Total Products
                </p>
              </div>
            </div>
          </div>
        </div>
        <DashboardTab />
      </section>
    </Layout>
  )
}

export default Dashboard;
