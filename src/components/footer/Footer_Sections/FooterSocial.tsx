import React from "react";
import Image from "next/image";
import InstagramIcon from "@/assets/svgs/social/instagram.svg";
import FacebookIcon from "@/assets/svgs/social/facebook.svg";
import YoutubeIcon from "@/assets/svgs/social/youtube.svg";

const FooterSocial: React.FC = () => {
  return (
    <div className="flex gap-6 sm:mt-6 mt-2 sm:justify-center justify-start sm:ml-0 ml-6">
      {/* ============== SOCIAL ICONS ============== */}
      <a href="#" className="hover:text-gray-400 transition-colors">
        <Image src={FacebookIcon} alt="Facebook" width={24} height={24} />
      </a>
      <a href="#" className="hover:text-gray-400 transition-colors">
        <Image src="/logo/ion_social-twitter.png" alt="Twitter" width={24} height={24} />
      </a>
      <a href="#" className="hover:text-gray-400 transition-colors">
        <Image src={InstagramIcon} alt="Instagram" width={24} height={24} />
      </a>
      <a href="#" className="hover:text-gray-400 transition-colors">
        <Image src={YoutubeIcon} alt="YouTube" width={24} height={24} />
      </a>
    </div>
  );
};

export default FooterSocial;
