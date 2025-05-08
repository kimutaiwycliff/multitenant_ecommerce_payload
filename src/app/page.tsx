import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';

const Home = () => {
  return (
    <div className='flex flex-col gap-4'>
      <p>Hello World</p>
      <Button variant="elevated" className='max-w-xs'>Home</Button>
      <Input placeholder='Enter your name'  className='w-1/2'/>
      <Progress value={50} className='w-1/2' />
    </div>
  );
};
export default Home;
