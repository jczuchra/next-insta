import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const NavBtn = ({ type, icon, customClass, href }: NavBtnProps) => {
  const Icon: any = dynamic(
    () => import(`@heroicons/react/${type}/${icon}Icon`)
  );
  return href ? (
    <Link href={href}>
      <Icon
        className={`h-6 md:inline-flex cursor-pointer px-2 ${customClass}`}
      />
    </Link>
  ) : (
    <Icon className={`h-6 md:inline-flex cursor-pointer px-2 ${customClass}`} />
  );
};

export default NavBtn;

type NavBtnProps = {
  type: string;
  icon: string;
  customClass?: string;
  href?: string;
  onClick?: Function;
};
