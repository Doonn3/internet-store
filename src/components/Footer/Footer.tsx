import { Logo } from "@/shared/ui-kit/Logo";
import PlanetIcon from "@/shared/assets/svg/RU.svg";
import VkIcon from "@/shared/assets/svg/VK.svg";
import TelegramIcon from "@/shared/assets/svg/Telegram.svg";
import WhatsappIcon from "@/shared/assets/svg/Whatsapp.svg";

import style from "./style.module.scss";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className={style.footer}>
      <Logo text="QPICK" />

      <div className={style.linkBlock}>
        <Link to="*">Избранное</Link>
        <Link to="/basket">Корзина</Link>
        <Link to="*">Контакты</Link>
      </div>

      <div className={style.langBlock}>
        <Link to="*">Условия сервиса</Link>

        <div className={style.langBlock__lang}>
          <img src={PlanetIcon} alt="Planet Icon" />
          <div>
            <button className={style.langBlock__btnActive}>Рус</button>
            <button>Eng</button>
          </div>
        </div>
      </div>

      <div className={style.socialBlock}>
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
    </footer>
  );
}
