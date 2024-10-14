export default function Footer() {
    return (
      <footer className="dark:bg-gray-50 bg-[#151529] h-20">
        <div className="text-[#fff] dark:text-[#000] h-full">
          <div className="h-full flex gap-3 justify-between items-center align-middle px-5">
            <div className="flex-[1_1_33.3%]">
              © <script>document.write(new Date().getFullYear())</script> VALLET
              ÖDEME VE FİNANSAL TEKNOLOJİ ANONİM ŞİRKETİ Tüm Hakları Saklıdır.
            </div>
            <img src="src/assets/images/vallet.png" className="w-24 " />
            <div className="text-sm-end d-none d-sm-block flex-[1_1_33.3%]">
              Vallet Panel
            </div>
          </div>
        </div>
      </footer>
    );
  }
  