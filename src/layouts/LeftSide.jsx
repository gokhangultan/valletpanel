import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function LeftSide() {
  return (
    <div className="w-[310px]">
      <div className="flex flex-col gap-2">
        <Link to="/users">users</Link>
        <Link to="/edituser">editusers</Link>
        <Link to="/usersroles">usersroles</Link>
        <Link to="/library">Library</Link>
      </div>
    </div>
  );
}
