import { IconButtonV } from "@/shared/ui-kit/IconButtonV";

import LikeIcon from "@/shared/assets/svg/Vector.svg";

type PropsType = {
  value?: number;
  onClick?: () => void;
};

export function LikeButton(props: PropsType) {
  return (
    <IconButtonV icon={LikeIcon} onClick={props.onClick} value={props.value} />
  );
}
