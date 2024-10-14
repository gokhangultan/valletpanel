export default function UsersRolesComponent() {
    return (
        <div className="max-w-[1440px] p-8">
        <div className="flex flex-col gap-2 ">
          <div className="flex flex-col lg:flex-row justify-between gap-2">
            <div className="flex gap-1 flex-col">
              <h1>Alt Kullanıcılar</h1>
              <h2>
              Bu sayfada alt kullanıcınıları görüntüleyebilir, rol yetkilerini düzenleyebilirsiniz.
              </h2>
            </div>
            <div>
              <button className="primaryButton">Kullanıcı Ekle</button>
            </div>
          </div>
         
        </div>
        </div>
    );
  }