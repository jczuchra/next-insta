import Image from 'next/image';

const CircleIcon = () => {
  return (
    <div className='relative w-6 mx-2 cursor-pointer'>
      <Image
        className='rounded-full'
        objectFit='contain'
        layout='fill'
        src='/img/test.png'
      />
    </div>
  );
};

export default CircleIcon;
