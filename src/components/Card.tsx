import OptionsImg from '../assets/icon-ellipsis.svg'

type CardProps = {
    backgroundColor: string;
    backgroundImage: string;
    title: string;
    current: number;
    previous: number;
}

export function Card({ backgroundColor, backgroundImage, title, current, previous }: CardProps) {
    return(
        <div className="row-span-1 bg-[length:3.3rem] bg-no-repeat rounded-lg mediaCard" style={{
            backgroundPositionX: window.screen.width <= 375 ? '16rem' : '7rem',
            backgroundPositionY: '-.3rem',
            backgroundImage: backgroundImage,
            backgroundColor: backgroundColor,
        }}>
            <div className="bg-[#1C1F4A] p-5 rounded-lg h-4/5 mt-[2.1rem] transition-colors duration-300 cursor-pointer hover:bg-[#444a8f]">
                <div className='flex items-center justify-between mb-4 max-sm:mb-1'>
                    <p className='text-xs font-medium'>{title}</p>
                    <img src={OptionsImg} alt="Opções" className='h-1 z-30' />
                </div>
                <div className='max-sm:flex max-sm:items-center justify-between'>
                    <span className='text-4xl font-light max-sm:text-3xl'>{current}hrs</span>
                    <p className='text-[.6rem] font-light mt-1'>Last Week - {previous}hrs</p>
                </div>
            </div>
        </div>
    )

}