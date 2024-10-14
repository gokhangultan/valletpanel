import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DonutChart from "../components/DonutChart";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

export default function Library() {
  return (
    <div className="flex gap-3 flex-col">
      <div className="flex gap-2 flex-col">
        <p>Başlıklar</p>
        <h1>H1 Title</h1>
        <h2>H2 Title</h2>
      </div>

      <div className="flex gap-2 flex-col">
        <p>Butonlar</p>
        <div className="flex gap-2">
          <button className="primaryButton">Primary Button</button>
          <button className="primaryButton">Secondary Button</button>
          <button className="ghostButton">Ghost Button</button>
          <button className="dangerButton">DangerButton</button>

        </div>
      </div>
      <div className="flex gap-2 flex-col">
        <p>Charts</p>
        <DonutChart />
      </div>

      <div className="flex gap-2 flex-col">
        <p>Cards</p>
        <div className="flex gap-2">
          <div
            className="relative card flex flex-col gap-4 p-8 w-[360px] bg-no-repeat bg-cover"
            style={{ backgroundImage: "url('/magicpattern.svg')" }}
          >
            <div className="flex flex-col gap-1 items-center">
              <img
                src="/rocket.svg"
                className=" mb-2 w-16 h-16"
                alt="Rocket Icon"
              />
              <h5 className="text-[18px] text-gray900 dark:text-gray-50 font-medium">
                Add New Role
              </h5>

              <p className="text-gray700 text-[13px] font-normal">
                Ignite Professional Adventures
              </p>
            </div>
          </div>
          <div className="card flex flex-col gap-4 p-8 w-[360px]">
            <div className="flex flex-row gap-2 items-center">
              <img src="/admin.svg" />
              <div className="flex flex-col gap-1">
                <h5 className="text-[15px] text-gray900 dark:text-gray-50 font-medium">
                  Administrator
                </h5>
                <h5 className="text-[13px] text-gray700 dark:text-gray-200">
                  Default role
                </h5>
              </div>
            </div>
            <p className="text-gray700 text-[13px] font-normal">
              Manages system settings and user access, ensures system stability.
            </p>
            <span className="text-gray800 dark:text-gray-100 text-[13px]">
              1 person
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          {" "}
          <div
            className="relative card border-2 border-[#1C64FE33] border-dashed flex flex-col py-4 px-8 justify-center h-[84px] w-[380px] bg-no-repeat bg-cover"
            style={{ backgroundImage: "url('/magicpattern.svg')" }}
          >
            <div className="flex flex-row gap-3 items-center">
              <img
                src="/bluerocket.svg"
                className=" w-11 h-11"
                alt="Rocket Icon"
              />
              <h5 className="text-[15px] text-gray900 dark:text-gray-50 font-medium">
                Add New Role
              </h5>
            </div>
          </div>
          <div className="card flex flex-col gap-4 px-8 py-4 h-[84px] w-[380px]">
            <div className="flex flex-row gap-2 items-center">
              <img src="/admin.svg" />
              <div className="flex flex-col gap-1">
                <h5 className="text-[15px] text-gray900 dark:text-gray-50 font-medium">
                  Administrator
                </h5>
                <h5 className="text-[13px] text-gray700 dark:text-gray-200">
                  Default role
                </h5>
              </div>
            </div>
          </div>
          <div className="card bg-[#EAFFF1] border-[#17C653] flex flex-col gap-4 px-8 py-4 h-[84px] w-[380px]">
            <div className="flex flex-row gap-2 items-center">
              <img src="/clickrole.svg" />
              <div className="flex flex-col gap-1">
                <h5 className="text-[15px] text-gray900 dark:text-gray-50 font-medium">
                  Muhasebe
                </h5>
                <h5 className="text-[13px] text-gray700 dark:text-gray-200">
                  Default role
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2 flex-col">
      <p>Profil</p>
      <div className="flex flex-row gap-2 ">
      <div className="flex justify-between  px-4 items-center">
          <div className="flex gap-2 items-center">
            <img src="/profile.svg" className="w-9 h-9" />
            <div className="flex flex-col ">
              <h1 className="!text-sm">Tyler Hero</h1>
              <h2 className="!text-xs">Admin</h2>
            </div>
          </div>
          <FontAwesomeIcon
            icon={faEllipsisVertical}
            color="#78829D"
            className="pr-4"
          />
        </div>
        <div className="flex justify-between  px-4 items-center">
          <div className="flex gap-2 items-center">
            <img src="/profile.svg" className="w-9 h-9" />
            <div className="flex flex-col ">
              <h1 className="!text-sm">Tyler Hero</h1>
              <h2 className="!text-xs">Admin</h2>
            </div>
          </div>
          
        </div>
        <div className="flex flex-row justify-between p-6 items-center">
            <div className="flex flex-row gap-4 items-center">
              <div className="relative">
                <img src="/profile.svg" alt="Profile" className="w-16 h-16" />
                <img
                  src="/x.svg"
                  alt="Delete"
                  className="absolute top-0 right-0 w-5 h-5 cursor-pointer bg-white rounded-full"
                />
              </div>
              <span className="formText">150x150px JPEG, PNG Image</span>
            </div>
            <img src="/notepad-edit.svg" />
          </div>
      </div>
   
        </div>
    </div>
  );
}
