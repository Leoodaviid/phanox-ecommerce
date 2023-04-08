import { Skeleton } from '@/components/Skeleton'

const Loading = () => {
  return (
    <div className='flex justify-center flex-wrap gap-10'>
      <div className=''>
        <Skeleton type='image' />
        <div className='flex justify-center mt-2 gap-4 overflow-x-auto'>
          <Skeleton type='smallImage' />
          <Skeleton type='smallImage' />
          <Skeleton type='smallImage' />
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <Skeleton type='title' />
        <Skeleton type='star' />
        <Skeleton type='details' />
        <Skeleton type='text' />
        <Skeleton type='text' />
        <Skeleton type='text' />
        <Skeleton type='text' />
        <Skeleton type='text' />
        <Skeleton type='text' />
        <Skeleton type='text' />
        <Skeleton type='text' />
        <Skeleton type='text' />
        <Skeleton type='text' />
        <Skeleton type='price' />
      </div>
    </div>
  )
}

export default Loading
