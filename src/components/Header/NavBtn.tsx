import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { NavBtnProps } from './types';

const NavBtn = ({
  icon,
  customClass,
  href,
  onClick = () => {},
}: NavBtnProps) => {
  const router = useRouter();
  const isCurrent = router.pathname === href;
  const Icon: any = dynamic(
    () => import(`../../svg/${icon}${isCurrent ? 'Solid' : 'Outline'}`)
  );
  return href ? (
    <Link href={href}>
      <div className={`md:inline-flex cursor-pointer px-3 ${customClass}`}>
        <Icon />
      </div>
    </Link>
  ) : (
    <div
      className={`md:inline-flex cursor-pointer px-2 ${customClass}`}
      onClick={onClick}>
      <Icon />
    </div>
  );
};

export default NavBtn;
