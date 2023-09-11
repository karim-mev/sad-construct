import { Facebook } from "./icons/Facebook";
import { Instagram } from "./icons/Instagram";
import { Mail } from "./icons/Mail";
import { Snapchat } from "./icons/Snapchat";

export default function Footer() {
  return (
    <div className="flex bg-gray-100 text-gray-600 items-center justify-between px-8 py-10">
      <div className="flex flex-1 gap-4">
        <h4>Logo</h4>
      </div>
      <div className="flex gap-4 items-center justify-center flex-1">
        Our mission is to make construction better
      </div>
      <div className="flex items-center justify-end gap-6 flex-1">
        <Snapchat />
        <Facebook />
        <Instagram />
        <Mail />
      </div>
    </div>
  );
}
