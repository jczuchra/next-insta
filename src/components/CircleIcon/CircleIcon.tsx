import Image from 'next/image';
import { CircleIconProps } from './types';

const CircleIcon = ({
  src,
  size = 6,
  customClass = '',
  isHighlight = false,
  onClick = () => {},
}: CircleIconProps) => {
  return (
    <div
      onClick={() => onClick()}
      className={`relative circle${size} mx-2 cursor-pointer ${customClass}`}>
      <Image
        className={`rounded-full border-1 ${
          isHighlight && '!border-solid !border-orange-500'
        }`}
        objectFit='contain'
        layout='fill'
        src={src}
      />
      {isHighlight && (
        <canvas className='absolute -top-1 -left-1 ' height='66' width='66' />
      )}
    </div>
  );
};

export default CircleIcon;
