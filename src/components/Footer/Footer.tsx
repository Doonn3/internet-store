import { Logo } from "@/shared/ui-kit/Logo";

import { LanguageSelectorContainer } from "./components/LanguageSelectorContainer";
import { NavigationLinks } from "./components/NavigationLinks";
import { SocialLinks } from "./components/SocialLinks";

import style from "./style.module.scss";

export function Footer() {
  return (
    <footer className={style.footer}>
      <Logo text="QPICK" />
      <NavigationLinks />
      <LanguageSelectorContainer />
      <SocialLinks />
    </footer>
  );
}
