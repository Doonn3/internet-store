import { Link, NavLink } from "react-router-dom";

import { IconButtonV } from "@/shared/ui-kit/IconButtonV";

import BasketICon from "@/shared/assets/svg/Vector-1.svg";

type PropsType = {
  value?: number;
  onClick?: () => void;
};

export function BasketButton(props: PropsType) {
  return (
    <Link to="/basket">
      <IconButtonV
        icon={BasketICon}
        onClick={props.onClick}
        value={props.value}
      />
    </Link>
  );
}
