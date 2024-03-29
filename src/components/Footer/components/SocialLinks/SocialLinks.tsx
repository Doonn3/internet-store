import { Link } from "react-router-dom";

import VkIcon from "@/shared/assets/svg/VK.svg";
import TelegramIcon from "@/shared/assets/svg/Telegram.svg";
import WhatsappIcon from "@/shared/assets/svg/Whatsapp.svg";

import style from "./style.module.scss";

export function SocialLinks() {
  return (
    <div className={style.socialLinks}>
      <Link to={"https://vk.com/"} target="_blank">
        <img src={VkIcon} alt="" />
      </Link>

      <Link to={"https://t.me/DoonnQ"} target="_blank">
        <img src={TelegramIcon} alt="" />
      </Link>

      <Link to={"https://www.whatsapp.com/"} target="_blank">
        <img src={WhatsappIcon} alt="" />
      </Link>
    </div>
  );
}
