import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider } from "@mui/material";

export default function UsersWidget() {
  return (
    <div className="card max-w-[350px] ">
      <div className="flex justify-between py-4 px-8 pb-5 items-center">
        <h1 className="!text-base">Alt Kullanıcılar (14)</h1>
        <FontAwesomeIcon
          icon={faEllipsisVertical}
          color="#78829D"
          className="pr-4"
        />
      </div>

      <Divider />
      <div className="flex flex-col gap-4 py-5 px-4">
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
          <FontAwesomeIcon
            icon={faEllipsisVertical}
            color="#78829D"
            className="pr-4"
          />
        </div>
      </div>
      <Divider />
      <div className="flex justify-center py-4">
        <button className="border-b-lightModePrimary border-b border-dotted text-lightModePrimary font-medium text-[13px] leading-4">
          Tümünü Gör
        </button>
      </div>
    </div>
  );
}
