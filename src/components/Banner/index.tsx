import BannerDesktop from '@/assets/Banner (1).svg'
import Image from 'next/image'
import BannerMobile from '@/assets/Banner.svg'


export function Banner(){

  return(
    <div className='w-full relative'>
        <Image src={BannerMobile} alt='BannerLogitech' className="block md:hidden w-full" />
        <Image src={BannerDesktop} alt='BannerLogitech' className="hidden md:block w-full" />
    </div>
  )
}