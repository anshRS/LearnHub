"use client"
import { User } from "@phosphor-icons/react";
import axios from "axios";
import { useEffect, useState } from "react";

const DashboradPage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/dashboard");
        setUser(response.data.user);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-2 mt-14 w-full font-raleway items-center p-2 mt-15">
      <div className="bg-neutral-100 p-4 text-center w-full">
        <span className="text-3xl">Welcome to Dashboard</span>
        <div className="items-center justify-center flex flex-row w-full">
          <div className="rounded-full shadow-lg p-2 m-1">
            <User size={90} />
          </div>
        </div>

        <div className="p-2 w-full font-raleway flex flex-col justify-center items-center p-2 mt-10 mb-10">
          <h2 className="mb-3 block w-full text-start bg-neutral-100 text-xl font-bold w-2/3 p-2">Bio</h2>
          <div className="rounded-xl w-2/3 bg-neutral-100 p-4 shadow-lg">
            "Passionate software developer with a knack for turning innovative ideas into robust and scalable software solutions. Equipped with a strong background in programming, I thrive on solving complex problems and designing efficient code. Always eager to stay up-to-date with the latest technologies and best coding practices. As a team player, I collaborate seamlessly with cross-functional teams to deliver high-quality software products. When I'm not coding, you can find me exploring new technologies, attending hackathons, and contributing to open-source projects. Let's build the future together, one line of code at a time!"
          </div>
        </div>

        <div className="w-full flex flex-row justify-center gap-20 mt-4 rounded m-5 w-full flex-wrap">
          <div className="w-1/3 shadow-lg">
            <h2 className="block w-full bg-neutral-100 text-xl font-bold">Basic Profile</h2>
            <div className="m-2 p-5 bg-white">
              <div className="border-b-2 text-start flex flex-row justify-between">
                <div className="font-bold w-1/2">Firstname</div>
                <div className="w-1/2">{user?.firstname}</div>
              </div>
              <div className="border-b-2 text-start flex flex-row">
                <div className="font-bold w-1/2">Lastname</div>
                <div className="w-1/2">{user?.lastname}</div>
              </div>
              <div className="border-b-2 text-start flex flex-row">
                <div className="font-bold w-1/2">Email</div>
                <div className="w-1/2">{user?.email}</div>
              </div>
              <div className="border-b-2 text-start flex flex-row">
                <div className="font-bold w-1/2">Username</div>
                <div className="w-1/2">{user?.username}</div>
              </div>
            </div>
          </div>
          <div className="w-1/3 shadow-lg">
            <h2 className="w-full bg-neutral-100 text-xl font-bold">Additional Info</h2>
            <div className="m-2 p-5 bg-white">
              <div className="border-b-2 text-start flex flex-row justify-between">
                <div className="font-bold w-1/2">Age</div>
                <div className="w-1/2">{user?.age}</div>
              </div>
              <div className="border-b-2 text-start flex flex-row">
                <div className="font-bold w-1/2">Gender</div>
                <div className="w-1/2">{user?.gender}</div>
              </div>
              <div className="border-b-2 text-start flex flex-row">
                <div className="font-bold w-1/2">Phone</div>
                <div className="w-1/2">{user?.phone}</div>
              </div>
              <div className="border-b-2 text-start flex flex-row">
                <div className="font-bold w-1/2">Profession</div>
                <div className="w-1/2">{user?.profession}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboradPage;
