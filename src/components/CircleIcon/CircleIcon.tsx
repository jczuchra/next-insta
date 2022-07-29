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
      {isHighlight && (
        <div
          className={`absolute circle${
            size + 2
          } -left-1 -top-1  bg-gradient-to-tr from-[#ffb600] to-[#d300c5] rounded-[1000px] p-[10px]`}
        />
      )}
      {isHighlight && (
        <div
          className={`absolute circle${
            size + 1
          } left-[-2px] top-[-2px]  bg-white rounded-[1000px] p-[10px]`}
        />
      )}
      <Image
        className={`rounded-full border-1 `}
        objectFit='contain'
        layout='fill'
        src={src}
      />
    </div>
  );
};

export default CircleIcon;
