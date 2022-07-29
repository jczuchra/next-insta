import dynamic from 'next/dynamic';
import { SvgIconProps } from './types';

const SvgIcon = ({ className, icon }: SvgIconProps) => {
  const Icon = dynamic(() => import(`../../svg/${icon}`));
  return (
    <div className={className}>
      <Icon />
    </div>
  );
};

export default SvgIcon;
