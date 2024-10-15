import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider } from "@mui/material";
import { useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

export default function EditUserComponent() {
  const [deleteModal, setDeleteModal] = useState(false);

  const toggleDeleteModal = () => {
    setDeleteModal(!deleteModal);
  };

  const handleDeleteUser = () => {
    console.log("User deleted!");
    toggleDeleteModal();
  };

  return (
    <div className="p-4">
      <div className="flex flex-col gap-4">
        {/*Kişisel Bilgiler*/}
        <div className="card">
          <div className="flex justify-between py-4 px-8 pb-5 items-center">
            <h1 className="!text-base">Kişisel Bilgiler</h1>
          </div>
          <Divider />
          <div className="flex flex-row justify-between p-6 items-center">
            <div className="flex flex-row gap-4 items-center">
              <span className="formText">Profil Fotoğraf</span>
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
          <Divider />

          <div className="flex flex-row justify-between p-6 items-center">
            <div className="flex flex-row gap-4 items-center">
              <span className="formText w-[100px]">İsim</span>

              <span className="formText !text-gray-800 dark:!text-gray-200 ">
                Jason Tatum
              </span>
            </div>
            <img src="/notepad-edit.svg" />
          </div>
          <Divider />
          <div className="flex flex-row justify-between px-6 py-4 items-center">
            <div className="flex flex-row gap-4 items-center">
              <span className="formText w-[100px]">Rol</span>

              <div className="flex flex-row items-center gap-1">
                <img src="/admin.svg" className="w-8 h-8" />
                <span className="formText !text-gray-800 dark:!text-gray-200 ">
                  Admin
                </span>
              </div>
            </div>
            <img src="/notepad-edit.svg" />
          </div>
          <Divider />
          <div className="flex flex-row justify-between p-6 items-center">
            <div className="flex flex-row gap-4 items-center">
              <span className="formText w-[100px]">Email</span>

              <span className="formText !text-gray-800 dark:!text-gray-200 ">
                hello@vallet.com.tr
              </span>
            </div>
            <img src="/notepad-edit.svg" />
          </div>
          <Divider />
          <div className="flex flex-row justify-between p-6 items-center">
            <div className="flex flex-row gap-4 items-center">
              <span className="formText w-[100px]">Telefon</span>

              <span className="formText !text-gray-800 dark:!text-gray-200 ">
                +90 532 739 90 12
              </span>
            </div>
            <img src="/notepad-edit.svg" />
          </div>
        </div>
        {/*Rol Seçimi*/}
        <div className="card">
          <div className="flex justify-between py-4 px-8 pb-5 items-center">
            <h1 className="!text-base">Rol Seçimi</h1>
          </div>
          <Divider />
          <h5 className="subTitle">
            Eklemek istediğiniz kullanıcının rolünü seçin. Kullanıcıya
            tanımlanan rol daha sonra değiştirebilir.
          </h5>

          <div className="py-4 px-8 pb-5 flex flex-row justify-between flex-wrap gap-6">
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
          </div>
          <div className="py-4 px-8 pb-5 flex justify-end">
            <button className="primaryButton">Rolü Değiştir</button>
          </div>
        </div>

        {/*User Delete*/}
        <div className="card">
          <div className="flex justify-between py-4 px-8 pb-5 items-center">
            <h1 className="!text-base">Kullanıcıyı Sil</h1>
          </div>
          <Divider />

          <div className="flex justify-between py-8 px-4 pb-10">
            <div className="flex justify-between  px-4 items-center">
              <div className="flex gap-2 items-center">
                <img src="/profile.svg" className="w-9 h-9" />
                <div className="flex flex-col ">
                  <h1 className="!text-sm">Tyler Hero</h1>
                  <h2 className="!text-xs">Admin</h2>
                </div>
              </div>
            </div>
            <div className="pr-4">
            <button className="dangerButton" onClick={toggleDeleteModal}>Kullanıcıyı Sil</button>
            </div>
          </div>
        </div>
      </div>
      {/* Reactstrap Modal for User Deletion */}
      <Modal isOpen={deleteModal} toggle={toggleDeleteModal}>
        <ModalHeader toggle={toggleDeleteModal}>Kullanıcıyı Sil</ModalHeader>
        <ModalBody>
          <p>Bu kullanıcıyı silmek istediğinize emin misiniz?</p>
        </ModalBody>
        <ModalFooter>
          <button color="danger" onClick={handleDeleteUser}>
            Evet, Sil
          </button>
          <button color="secondary" onClick={toggleDeleteModal}>
            İptal
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
