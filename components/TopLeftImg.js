// next image
import Image from 'next/image';

const TopLeftImg = () => {
  return (
    <div className='absolute left-0 top-0 mix-blend-lighten z-10 w-[200px] xl:w-[400px] opacity-90'>
      <Image src='/top-left-img2.png' width={400} height={394} alt='' priority={true} />
    </div>
  );
};

export default TopLeftImg;
