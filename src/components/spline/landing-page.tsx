import Spline from '@splinetool/react-spline';

export default function LandingPage() {
  return (
    <div className='w-full h-screen flex justify-center items-center relative '>
        <Spline scene="https://prod.spline.design/nX8CfZ1bx1lD5XCK/scene.splinecode" />
        <div className=' absolute flex justify-center items-center flex-col '>
           <h1 className=' text-[120px] text-[#4a4949] font-fragment font-medium'>Unicorn Ai</h1>
           <p className=' font-fragment font-extralight text-gray-300'>The unlimited ai marketing product for all the products</p>
        </div>
    </div>
  );
}
