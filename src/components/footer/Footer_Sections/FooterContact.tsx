import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const FooterContact: React.FC = () => {
  return (
    <div>
      {/* ============== CONTACT ============== */}
      <h3 className="font-bold text-lg mb-4">Contact</h3>
      <ul className="space-y-3 text-sm">
        <li className="flex items-center gap-2">
          <LocationOnIcon className="text-sm" />
          90, Ojodu Akute Road, Ajayi Farms Bus-Stop
        </li>
        <li className="flex items-center gap-2">
          <EmailIcon className="text-sm" />
          churchadmin@thfconline.net
        </li>
        <li className="flex items-center gap-2">
          <PhoneIcon className="text-sm" />
          +234 805 669 9920
        </li>
      </ul>
    </div>
  );
};

export default FooterContact;
