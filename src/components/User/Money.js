import React, { useEffect } from "react";
import about1 from "../../images/about1.png";
import { toast } from "react-toastify";
import { useDataContext } from "../../context/ContextProvider";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Money = () => {
    const { userData: data } = useDataContext();
    const { email } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!data) {
            toast.warn('Please complete your profile first')
            navigate("/user/profile");
        }
    });

    async function submit(event) {
        event.preventDefault();
        toast.success("Thanks for donating");
    }

    return (
        <>
            <div className="flex items-center justify-center w-full">
                <div className="p-12 bg-gradient-to-r from-gradient1a to-gradient1b flex  justify-center">
                    <div className="flex mx-auto justify-center items-center">
                        <div className="p-2 w-1/3">
                            <img className="rounded-full" src={about1} alt="" />
                        </div>
                        <div className="p-8 items-center w-1/2">
                            <h1 className="font-bold text-xl m-1">
                                Please provide the following information for donations:
                            </h1>
                            <div className="flex flex-col">
                                <form onSubmit={submit}>
                                    <input
                                        className="rounded-md w-4.8 px-2 py-1 mt-2 m-1 bg-gray-100 hover:bg-white"
                                        type="text"
                                        placeholder="Name"
                                        value={data?.name}
                                    />
                                    <input
                                        className="rounded-md w-4.8 px-2 py-1 m-1 bg-gray-100 hover:bg-white"
                                        type="email"
                                        placeholder="Email"
                                        value={email}
                                    />
                                    <input
                                        className="rounded-md w-4.8 px-2 py-1 m-1 bg-gray-100 hover:bg-white"
                                        type="phone"
                                        placeholder="Mobile no."
                                        value={data?.mobile}
                                    />
                                    <input
                                        className="rounded-md w-4.8 px-2 py-1 m-1 bg-gray-100 hover:bg-white"
                                        type="money"
                                        placeholder="Amount to be donated"
                                    />
                                    <button className="font-semibold my-2 mx-auto btn bg-gray-200 rounded-lg px-4 py-2 m-2">
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Money;
