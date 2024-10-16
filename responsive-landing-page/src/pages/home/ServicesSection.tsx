import Container from '@/components/Container';
import BatteryReplacement from '@/components/ServiceTiles/BatteryReplacement';
import ChipSetReplacement from '@/components/ServiceTiles/ChipsetReplacement';
import DataRecovery from '@/components/ServiceTiles/DataRecovery';

const ServicesSection = () => {
  return (
    <Container className='my-40'>
      <div className='text-center'>
        <h1>Services that we provide</h1>
        <p className='max-w-[80ch] mx-auto mt-10 mb-20'>
          All our technicians are fully qualified and licensed. Moreover, they
          are incredibly skillful and proficient in various aspects of computer
          repair.
        </p>
      </div>
      <div className='grid grid-cols-12 gap-[20px]'>
        <BatteryReplacement />
        <ChipSetReplacement />
        <DataRecovery />
        <div className='h-[415px] rounded-2xl col-span-12'></div>
        <div className='h-[415px] colspan-12 md:col-span-6 lg:cal-span-4'></div>
        <div className='h-[415px] colspan-12 md:col-span-6 lg:cal-span-4'></div>
        <div className='h-[415px] colspan-12 md:col-span-12 lg:cal-span-4'></div>
      </div>
    </Container>
  );
};

export default ServicesSection;
