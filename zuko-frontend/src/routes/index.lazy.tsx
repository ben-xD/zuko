import { createLazyFileRoute } from '@tanstack/react-router'
import zukoImage from '../assets/zuko.jpg';

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2 gap-2 flex flex-col">
      <h3 className='text-xl font-bold'>Welcome to Zuko.</h3>
      <img src={zukoImage} alt="Zuko homepage picture" className='max-w-96'></img>
    </div>
  )
}