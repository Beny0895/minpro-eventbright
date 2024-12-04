"use client";
import useAuthStore from "@/stores/auth-store";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import axiosInstance from "@/lib/axios";
import { CiSearch } from "react-icons/ci";

export default function Navbar() {
  const { user, clearAuth } = useAuthStore();
  const router = useRouter();
  const [hasEvents, setHasEvents] = useState(false);

  console.log("User from auth store:", user); // Debug log

  useEffect(() => {
    const checkUserEvents = async () => {
      if (user && user.role === "event-organizer") {
        try {
          const response = await axiosInstance.get(`/event/organizer/events`);
          if (response.data.events && response.data.events.length > 0) {
            setHasEvents(true);
          }
        } catch (error) {
          console.error("Error checking user events:", error);
        }
      }
    };

    checkUserEvents();
  }, [user]);

  const handleFindEvent = () => {
    if (!user) {
      Swal.fire({
        title: "Authentication Required",
        text: "You must log in first to view events.",
        icon: "info",
        confirmButtonText: "Login",
      }).then(() => {
        router.push("/login");
      });
    } else {
      router.push("/find-event");
    }
  };

  const handleLogout = () => {
    clearAuth();
    Swal.fire({
      icon: "success",
      title: "Logout successful",
      text: "You have been logged out successfully.",
      timer: 2000,
      showConfirmButton: false,
    }).then(() => {
      router.push("/");
    });
  };

  return (
    <div className=" bg-white fixed top-0 left-0 right-0 z-10 bg-opacity-50 py-4 px-8 transition-all duration-300 ">
    <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
         <button className="text-2xl font-bold text-green-500 " onClick={() => router.push("/")}>Eventbright</button>
       <div className=" items-center border rounded-full p-2 ">
          <input type="text" placeholder="Search" className="outline-none text-black bg-white"/>
          <button className="text-black"><CiSearch/></button>
       </div>
        <div className="hidden md:block">
          <div className="ml-4 flex items-center space-x-4">
         
          <button className="bg-green-600 text-white hover:text-black rounded-lg hover:bg-green-300 font-bold p-2" onClick={handleFindEvent}>
          Find Event
        </button>

        {user && user.role === "admin" && (
          <button className="bg-green-600 text-white hover:text-black rounded-lg hover:bg-green-300 font-bold p-2" onClick={() => router.push("/becomeorganizer")}>
            Organizer
          </button>
        )}

        {user && user.role === "admin" && (
          <button className="bg-green-600 text-white hover:text-black rounded-lg hover:bg-green-300 font-bold p-2" onClick={() => router.push("/approve-requests")}>
            Approve Requests
          </button>
        )}

        {user && user.role === "event-organizer" && (
          <>
            <button className="bg-green-600 text-white hover:text-black rounded-lg hover:bg-green-300 font-bold p-2" onClick={() => router.push("/event/createevent")}>
              Create Event
            </button>

            {hasEvents && (
              <>
              <button className="bg-green-600 text-white hover:text-black rounded-lg hover:bg-green-300 font-bold p-2" onClick={() => router.push("/dashboard/my-events")}>
                My Event
              </button>
              <button
                  className="bg-green-600 text-white hover:text-black rounded-lg hover:bg-green-300 font-bold p-2"
                  onClick={() => router.push("/dashboard/statistics")}
                >
                  Event Statistics
                </button>
              </>
            )}
          </>
        )}
        {/*  */}
        {user ? (
          <div className="flex items-center gap-4">
            <button
              className="bg-green-600 text-white hover:text-black rounded-lg hover:bg-green-300 font-bold p-2"
              type="button"
              onClick={handleLogout}
            >
              Logout
            </button>
            <p className="text-black">Welcome, {user.name}</p>
          </div>
        ) : (
          <>
            <button
              className="bg-green-600 text-white hover:text-black rounded-lg hover:bg-green-300 font-bold p-2"
              type="button"
              onClick={() => router.push("/login")}
            >
              Login
            </button>
            <button
              className="bg-green-600 text-white hover:text-black rounded-lg hover:bg-green-300 font-bold p-2"
              type="button"
              onClick={() => router.push("/register")}
            >
              Sign Up
            </button>
          </>
        )}
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
}
