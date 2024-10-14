import DonutChart from "../components/DonutChart";

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
          <button className="primaryButton">Primary Button</button>
          <button className="primaryButton">Secondary Button</button>
          <button className="ghostButton">Ghost Button</button>
</div>
<div className="flex gap-2 flex-col">
            <p>Charts</p>
      <DonutChart />
        </div>
          </div>
    );
  }
  