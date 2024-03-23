import { Logo } from "../../shared/ui-kit/Logo";
import PlanetIcon from "../../shared/assets/svg/RU.svg";
import VkIcon from "../../shared/assets/svg/VK.svg";
import TelegramIcon from "../../shared/assets/svg/Telegram.svg";
import WhatsappIcon from "../../shared/assets/svg/Whatsapp.svg";

import style from "./style.module.scss";

export function Footer() {
  return (
    <footer className={style.footer}>
      <Logo text="QPICK" />

      <div className={style.linkBlock}>
        <a href="#">Избранное</a>
        <a href="#">Корзина</a>
        <a href="#">Контакты</a>
      </div>

      <div>
        <span>Условия сервиса</span>

        <div className={style.langBlock}>
          <img src={PlanetIcon} alt="Planet Icon" />
          <div>
            <span>Рус</span>
            <span>Eng</span>
          </div>
        </div>
      </div>

      <div className={style.socialBlock}>
        <img src={VkIcon} alt="" />
        <img src={TelegramIcon} alt="" />
        <img src={WhatsappIcon} alt="" />
      </div>
    </footer>
  );
}
