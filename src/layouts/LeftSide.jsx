import { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Collapse, Nav, NavItem, NavLink } from "reactstrap";
const items = {
  anaSayfa: {
    name: "anaSayfa",
    mainButton: "Ana Sayfa",
    icon: "home",
    to: "/dashboard",
  },
  isletmeYonetimi: {
    name: "isletmeYonetimi",
    mainButton: "İşletme Yönetimi",
    icon: "isletmeyonetimi",
    collapseItems: [
      { text: "İşletme Profili", to: "/business-profile" },
      {
        text: "Kullanıcı Yönetimi",
        collapseItems: [
          { text: "Kullanıcılar", to: "/budget-reports" },
          { text: "Kullanıcı Düzenle", to: "/edituser" },
          { text: "Roller", to: "/expense-tracking" },
        ],
      },
      { text: "Çalışma Şartları", to: "/working-conditions" },
      { text: "Hesap Hareketleri", to: "/account-transactions" },
      { text: "Profili Düzenle", to: "/profile-settings" },
    ],
  },
  butceYonetimi: {
    name: "butceYonetimi",
    mainButton: "Bütçe Yönetimi",
    icon: "budgetmanagement",
    collapseItems: [
      { text: "Bütçe Raporları", to: "/budget-reports" },
      { text: "Gider Takibi", to: "/expense-tracking" },
    ],
  },
  apiYonetimi: {
    name: "apiYonetimi",
    mainButton: "API Yönetimi",
    icon: "apimanagement",
    collapseItems: [
      { text: "API Anahtarları", to: "/api-keys" },
      { text: "Servis Yönetimi", to: "/service-management" },
    ],
  },
  partnerlik: {
    name: "partnerlik",
    mainButton: "Partnerlik",
    icon: "partnership",
    collapseItems: [
      { text: "Partner Listesi", to: "/partner-list" },
      { text: "Partner Başvurusu", to: "/partner-application" },
    ],
  },
  yardimAl: {
    name: "yardimAl",
    mainButton: "Yardım Al",
    icon: "support",
    collapseItems: [
      { text: "SSS", to: "/faq" },
      { text: "Destek Talebi", to: "/support-request" },
    ],
  },
};



export default function LeftSide() {
  const [selectedIndex, setSelectedIndex] = useState([-1, -1, -1]);
  const [collapsedIndex, setCollapsedIndex] = useState(0);
  const [darkMode, setDarkMode] = useState(true);

  const toggleSelected = (index, menuIndex, thirdIndex) => {
    setSelectedIndex([index, menuIndex, thirdIndex]);
  };
  return (
    <div className="w-[310px] bg-[#F6F6F9]">
      <div className="flex flex-col">
        <LeftNavItem
          to={items.anaSayfa.to}
          isSelected={selectedIndex[0] === items.anaSayfa.name}
          toggleSelected={() => { toggleSelected(items.anaSayfa.name, -1); setCollapsedIndex(-1) }}
          mainButton={items.anaSayfa.mainButton}
          icon={items.anaSayfa.icon}
        />
        <LeftNavItemWithCollapse
          isSelected={selectedIndex[0] === items.isletmeYonetimi.name}
          secondSelected={selectedIndex[1]}
          thirdSelected={selectedIndex[2]}
          toggleSelected={(menuIndex, thirdIndex) =>
            toggleSelected(items.isletmeYonetimi.name, menuIndex, thirdIndex)
          }
          mainButton={items.isletmeYonetimi.mainButton}
          icon={items.isletmeYonetimi.icon}
          collapseItems={items.isletmeYonetimi.collapseItems}
          collapsedIndex={collapsedIndex}
          index={items.isletmeYonetimi.name}
          setCollapsedIndex={setCollapsedIndex}
        />
        <LeftNavItemWithCollapse
          isSelected={selectedIndex[0] === items.butceYonetimi.name}
          secondSelected={selectedIndex[1]}
          toggleSelected={(menuIndex) =>
            toggleSelected(items.butceYonetimi.name, menuIndex)
          }
          mainButton={items.butceYonetimi.mainButton}
          icon={items.butceYonetimi.icon}
          collapseItems={items.butceYonetimi.collapseItems}
          collapsedIndex={collapsedIndex}
          index={items.butceYonetimi.name}
          setCollapsedIndex={setCollapsedIndex}
        />
        <LeftNavItemWithCollapse
          isSelected={selectedIndex[0] === items.apiYonetimi.name}
          secondSelected={selectedIndex[1]}
          toggleSelected={(menuIndex) =>
            toggleSelected(items.apiYonetimi.name, menuIndex)
          }
          mainButton={items.apiYonetimi.mainButton}
          icon={items.apiYonetimi.icon}
          collapseItems={items.apiYonetimi.collapseItems}
          collapsedIndex={collapsedIndex}
          index={items.apiYonetimi.name}
          setCollapsedIndex={setCollapsedIndex}
        />
        <LeftNavItemWithCollapse
          isSelected={selectedIndex[0] === items.partnerlik.name}
          secondSelected={selectedIndex[1]}
          toggleSelected={(menuIndex) =>
            toggleSelected(items.partnerlik.name, menuIndex)
          }
          mainButton={items.partnerlik.mainButton}
          icon={items.partnerlik.icon}
          collapseItems={items.partnerlik.collapseItems}
          collapsedIndex={collapsedIndex}
          index={items.partnerlik.name}
          setCollapsedIndex={setCollapsedIndex}
        />
        <LeftNavItemWithCollapse
          isSelected={selectedIndex[0] === items.yardimAl.name}
          secondSelected={selectedIndex[1]}
          toggleSelected={(menuIndex) =>
            toggleSelected(items.yardimAl.name, menuIndex)
          }
          mainButton={items.yardimAl.mainButton}
          icon={items.yardimAl.icon}
          collapseItems={items.yardimAl.collapseItems}
          collapsedIndex={collapsedIndex}
          index={items.yardimAl.name}
          setCollapsedIndex={setCollapsedIndex}
        />
      </div>
    </div>
  );
}
{/**-------------------------------------------------**/ }
{/**-------------------------------------------------**/ }
{/**-------------------------------------------------**/ }
{/**-------------------------------------------------**/ }
{/**-------------------------------------------------**/ }
{/**-------------------------------------------------**/ }
{/**-------------------------------------------------**/ }
{/**-------------------------------------------------**/ }
const LeftNavItemWithCollapse = ({
  mainButton,
  icon,
  collapseItems,
  isSelected,
  secondSelected,
  thirdSelected,
  toggleSelected,
  collapsedIndex,
  setCollapsedIndex,
  index
}) => {

  const [collapsed, setCollapsed] = useState(false);
  const [subCollapsed, setSubCollapsed] = useState(-1);
  const toggleCollapsed = () => {
    setCollapsed((prev) => !prev);
  };
  useEffect(() => {
    if (collapsed) setCollapsedIndex(index)
  }, [collapsed])
  useEffect(() => {
    setCollapsed(collapsedIndex === index)
    if (collapsedIndex !== index) setSubCollapsed(-1)
  }, [collapsedIndex])
  useEffect(() => {
    if (!isSelected) setCollapsed(false)
  }, [isSelected])
  const toggleSubCollapsed = (index) => {
    setSubCollapsed(subCollapsed == index ? -1 : index);
  }

  //const iconSrc = isSelected || darkMode ? `/white${icon}.svg` : `/${icon}.svg`;
  const iconSrc = `/${icon}.svg`;

  return (
    <NavItem className="relative">
      <div className="mr-4">
        <div
          className={"border-0 p-0 bg-transparent w-full text-[14px]"}
          onClick={toggleCollapsed}
        >
          <div
            className={
              "pl-2 flex gap-2 items-center align-middle dark:text-[#000] text-gray-500 py-2 ml-5 mr-2 w-full h-full rounded"}
          >
            <img
              src={iconSrc}
              alt={`${mainButton} icon`}
              className="inline-block w-5 h-6"
            />
            <span
              data-key="t-dashboards"
              className="ms-2 font-semibold text-sm leading-5"
            >
              {mainButton}
            </span>
            {collapsed ? <img src="/caretup.svg" /> : <img src="/caretdown.svg" />}
          </div>
        </div>
      </div>

      <Collapse className="pt-2" isOpen={collapsed}>
        <Nav vertical className="space-y-1">
          {collapseItems.map((item, index) => (
            <NavItem
              key={index}
              className="relative"
              onClick={() => !item.collapseItems && toggleSelected(index)}
            >
              <NavLink
                tag={Link}
                to={item.to || "#"}
                className={
                  "flex items-center ml-14 mr-2 gap-2 " +
                  (!item.collapseItems && isSelected && secondSelected === index
                    ? "bg-[#fff] text-blue-500"
                    : "text-gray-500")
                }
                onClick={() => item.collapseItems && toggleSubCollapsed(index)}
              >
                <p className="font-semibold text-sm leading-5 ">{item.text}</p> {item.collapseItems && (subCollapsed === index ? <img src="/caretup.svg" /> : <img src="/caretdown.svg" />)}
              </NavLink>
              {
                item.collapseItems &&
                <Collapse isOpen={subCollapsed === index}>
                  {
                    item.collapseItems.map((item2, index2) => {
                      return <NavItem className="relative" key={index2}>
                        <NavLink
                          tag={Link}
                          to={item2.to || "#"}
                          className={
                            "flex items-center ml-20 mr-2 gap-2 " +
                            (isSelected && secondSelected === index && thirdSelected === index2
                              ? "bg-[#fff] text-blue-500"
                              : "text-gray-500")
                          }
                          onClick={() => toggleSelected(index, index2)}
                        >
                          <p className="font-semibold text-sm leading-5 ">{item2.text}</p>
                        </NavLink>
                      </NavItem>
                    })
                  }
                </Collapse>
              }
            </NavItem>
          ))}
        </Nav>
      </Collapse>
    </NavItem>
  );
};
{/**-------------------------------------------------**/ }
{/**-------------------------------------------------**/ }
{/**-------------------------------------------------**/ }
{/**-------------------------------------------------**/ }
{/**-------------------------------------------------**/ }
{/**-------------------------------------------------**/ }

const LeftNavItem = ({ mainButton, icon, isSelected, to, toggleSelected }) => {
  const darkMode = localStorage.getItem("darkMode") === "false";
  //const iconSrc = darkMode || isSelected ? `/white${icon}.svg` : `/${icon}.svg`;
  const iconSrc = `/${icon}.svg`;

  return (
    <NavItem className="relative">
      <NavLink
        tag={Link}
        to={to || "#"}
        color="link"
        onClick={toggleSelected}
        className="text-[14px] p-0 mr-4"
      >
        <div
          className={
            "pl-2 flex gap-2 items-center  align-middle dark:text-[#000] text-[#fff] py-2 ml-5 h-full w-full rounded " +
            (isSelected ? "text-gray-500"
              : "text-gray-500")
          }
        >
          {/* teklilerin isSelected iken rengi değişecekse yukarıda */}
          <img
            src={iconSrc}
            alt={`${mainButton} icon`}
            className="inline-block w-5 h-6"
          />
          <span
            data-key="t-dashboards"
            className="ms-2 font-semibold text-sm leading-5"
          >
            {mainButton}
          </span>
        </div>
      </NavLink>
    </NavItem>
  );
};