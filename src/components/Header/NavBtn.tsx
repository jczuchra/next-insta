import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { NavBtnProps } from './types';

const NavBtn = ({ icon, customClass, href }: NavBtnProps) => {
  const router = useRouter();
  const isCurrent = router.pathname === href;
  const Icon: any = dynamic(
    () =>
      import(`@heroicons/react/${isCurrent ? 'solid' : 'outline'}/${icon}Icon`)
  );
  return href ? (
    <Link href={href}>
      <Icon
        className={`h-7 md:inline-flex cursor-pointer px-3 ${customClass}`}
      />
    </Link>
  ) : (
    <Icon className={`h-7 md:inline-flex cursor-pointer px-2 ${customClass}`} />
  );
};

export default NavBtn;
