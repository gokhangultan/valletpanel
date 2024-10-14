import UsersWidget from "./UsersWidget";
import { useState } from "react";
import { Divider, Switch } from "@mui/material";
import { toast } from "react-toastify";
import DonutChart from "./DonutChart";

export default function UsersComponent() {
  const [isSwitchOn, setIsSwitchOn] = useState(true);

  const handleSwitchChange = (event) => {
    const newValue = event.target.checked;
    setIsSwitchOn(newValue);

    toast.success(
      newValue ? "Açık duruma getirildi!" : "Kapalı duruma getirildi!"
    );
  };
  return (
    <div className="max-w-[1440px] p-8">
      <div className="flex flex-col gap-2 ">
        <div className="flex flex-col lg:flex-row justify-between gap-2">
          <div className="flex gap-1 flex-col">
            <h1>Kullanıcılar</h1>
            <h2>
              Bu sayfada alt kullanıcınıları görüntüleyebilir, rol yetkilerini
              düzenleyebilirsiniz.
            </h2>
          </div>
          <div>
            <button className="primaryButton">Kullanıcı Ekle</button>
          </div>
        </div>
        <div className="flex-col-reverse flex lg:flex-row gap-2 pt-4">
          <div className="flex-[1_1_33.3%]">
            <div className="flex flex-col gap-10">
              <div>
                <UsersWidget />
              </div>
              <DonutChart />
            </div>
          </div>
          <div className="flex-[1_1_66.3%]">
            <div className="flex flex-col gap-10">
              {/*Ekip Yönetimi */}
              <div className="flex flex-col gap-2">
                <div className=" card h-[356px] w-full pb-">
                  <div className="relative">
                    <div
                      className="absolute inset-0 bg-cover bg-center "
                      style={{
                        backgroundImage: `url('/crewmanagementbg.svg')`,
                      }}
                    ></div>
                    <img
                      src="/crewmanagementitem.svg"
                      className="relative z-10 mx-auto mt-8"
                      alt="crew management item"
                    />
                  </div>
                  <div className="text-center flex flex-col gap-2 justify-center items-center py-2">
                    <h1>Ekip Yönetimi</h1>
                    <h2 className="w-[390px]">
                      Kullanıcı rolleri oluşturabilir ve bu rolleri
                      kullanıcılara tanımlayabilirsiniz
                    </h2>
                  </div>
                  <div className="flex justify-center py-10">
                    <button className="ghostButton">
                      Kullanıcı ve Rolleri Yönet
                    </button>
                  </div>
                </div>
              </div>
              {/*Son Aktiviteler */}
              <div className="card">
                <div className="flex justify-between py-4 px-8 pb-5 items-center">
                  <h1 className="!text-base">Son Aktiviteler</h1>
                  <div className="flex items-center gap-">
                    <h2 className="!text-sm !font-medium text-[#4B5675] dark:text-textColor">
                      {isSwitchOn
                        ? "Otomatik Yenileme Açık"
                        : "Otomatik Yenileme Kapalı"}
                    </h2>
                    <Switch
                      checked={isSwitchOn}
                      onChange={handleSwitchChange}
                      color="primary"
                    />
                  </div>
                </div>
                <Divider />

                <div className="py-4 px-8">
                  <div className="flex gap-2 ">
                    <img src="/cycle.svg" />
                    <div className="flex flex-col">
                      <h3 className="text-[#071437] text-sm font-normal dark:text-darkTextColor">
                        Yönetici Mert Yavuz şirket profilinde değişiklik yaptı
                      </h3>
                      <h4 className="text-[#78829D] dark:bg-darkTextColor text-xs">
                        Bugün, 9:00 AM
                      </h4>
                    </div>
                  </div>
                  <div className="flex gap-2 ">
                    <img src="/girisyap.svg" />
                    <div className="flex flex-col">
                      <h3 className="text-[#071437] text-sm font-normal dark:text-darkTextColor">
                        Yönetici Mert Yavuz şirket profilinde değişiklik yaptı
                      </h3>
                      <h4 className="text-[#78829D] dark:bg-darkTextColor text-xs">
                        Bugün, 9:00 AM
                      </h4>
                    </div>
                  </div>
                  <div className="flex gap-2 ">
                    <img src="/sirketprofil.svg" />
                    <div className="flex flex-col">
                      <h3 className="text-[#071437] text-sm font-normal dark:text-darkTextColor">
                        Yönetici Mert Yavuz şirket profilinde değişiklik yaptı
                      </h3>
                      <h4 className="text-[#78829D] dark:bg-darkTextColor text-xs">
                        Bugün, 9:00 AM
                      </h4>
                    </div>
                  </div>
                  <div className="flex gap-2 ">
                    <img src="/cycle.svg" />
                    <div className="flex flex-col">
                      <h3 className="text-[#071437] text-sm font-normal dark:text-darkTextColor">
                        Yönetici Mert Yavuz şirket profilinde değişiklik yaptı
                      </h3>
                      <h4 className="text-[#78829D] dark:bg-darkTextColor text-xs">
                        Bugün, 9:00 AM
                      </h4>
                    </div>
                  </div>
                  <div className="flex gap-2 ">
                    <img src="/girisyap.svg" />
                    <div className="flex flex-col">
                      <h3 className="text-[#071437] text-sm font-normal dark:text-darkTextColor">
                        Yönetici Mert Yavuz şirket profilinde değişiklik yaptı
                      </h3>
                      <h4 className="text-[#78829D] dark:bg-darkTextColor text-xs">
                        Bugün, 9:00 AM
                      </h4>
                    </div>
                  </div>
                  <div className="flex gap-2 ">
                    <img src="/sirketprofil.svg" />
                    <div className="flex flex-col">
                      <h3 className="text-[#071437] text-sm font-normal dark:text-darkTextColor">
                        Yönetici Mert Yavuz şirket profilinde değişiklik yaptı
                      </h3>
                      <h4 className="text-[#78829D] dark:bg-darkTextColor text-xs">
                        Bugün, 9:00 AM
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 justify-center items-center ">
        <div>
          <img src="/nouser.svg" />
        </div>
        <div className="text-center flex flex-col gap-2 justify-center ">
          <h1>Tanımlanmış bir kullanıcı & rol bulunmuyor</h1>
          <h2 className="w-[610px]">
            Paneli verimli kullanmak için çalışanlarınızı veya belirlediğiniz
            kişileri ekleyin, yetkilerini yönetin ve yönetim süreçlerini
            kolaylaştırın.
          </h2>
        </div>
        <div className="py-6">
          <button className="primaryButton">Yeni Kullanıcı Ekle</button>
        </div>
      </div>

      <div className="card">
                <div className="flex justify-between py-4 px-8 pb-5 items-center">
                  <h1 className="!text-base">Son Aktiviteler</h1>
                  
                </div>
                <Divider />
                <div className="flex flex-col justify-center items-center gap-10 py-20">
                <img src="/noactivity.svg" className="w-[60%]" />
                <h2 className="text-[#4B5675] dark:bg-darkTextColor">Son Aktiviteler Bu Alanda Görüntülenecektir</h2>
                </div>
          
              
              </div>
    </div>
  );
}
