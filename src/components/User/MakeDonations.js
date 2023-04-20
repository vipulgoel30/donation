import React, { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { useDataContext } from "../../context/ContextProvider";
import { initiateDonation } from "../../firebase";
import useAuth from "../../hooks/useAuth";
import about1 from "../../images/about1.png";
import { useNavigate } from "react-router-dom";

const MakeDonations = () => {
  const { userData: data, setUserDataUpdated } = useDataContext();
  const { user, email } = useAuth();
  const navigate = useNavigate();
  const description = useRef();

  async function submit(event) {
    event.preventDefault();
    const { success } = await initiateDonation(user, description.current.value);
    if (!success) return toast.error("Some error occurred...");
    setUserDataUpdated(true);
    window.location.href = "/user/donations";
    // toast.success('Donation initiated')
  }

  useEffect(() => {
    if (!data) {
      toast.warn("Please complete your profile first");
      navigate("/user/profile");
    }
  });

  return (
    <>
      <div className="flex items-center justify-center w-full min-h-[90vh] h-fit bg-gradient-to-r from-gradient1a to-gradient1b">
        <div className="p-12  flex  justify-center">
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
                    className="rounded-md  px-2 py-1 mt-2 m-1 bg-gray-100 hover:bg-white"
                    type="text"
                    placeholder="Name"
                    defaultValue={data?.name}
                  />
                  <input
                    className="rounded-md  px-2 py-1 m-1 bg-gray-100 hover:bg-white"
                    type="email"
                    value={email}
                  />
                  <input
                    className="rounded-md  px-2 py-1 m-1 bg-gray-100 hover:bg-white"
                    type="phone"
                    placeholder="Mobile"
                    defaultValue={data?.mobile}
                  />
                  <input
                    className="rounded-md  px-2 py-1 m-1 bg-gray-100 hover:bg-white"
                    type="number"
                    placeholder="Pincode"
                    defaultValue={data?.pincode}
                  />
                  <input
                    className="rounded-md  px-2 py-1 m-1 bg-gray-100 hover:bg-white"
                    type="text"
                    placeholder="Address"
                    defaultValue={data?.address}
                  />
                  <input
                    ref={description}
                    className="rounded-md  px-2 py-1 m-1 bg-gray-100 hover:bg-white"
                    type="text"
                    placeholder="Description (Regarding type of donation)"
                    required
                  />
                  <button
                    type="submit"
                    className="font-semibold my-2 mx-auto btn bg-gray-200 rounded-lg px-4 py-2 m-2"
                  >
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

export default MakeDonations;
