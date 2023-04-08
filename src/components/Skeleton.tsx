interface SkeletonProps {
  type: 'title' | 'text' | 'image' | 'smallImage' | 'star' | 'details' | 'price'
}

export const Skeleton = ({ type }: SkeletonProps) => {
  return (
    <div
      className={`bg-zinc-300 bg-cover rounded-[15px] animate-pulse 
        ${type === 'image' ? 'w-[355px] sm:w-[400px] h-[400px]' : ''} 
        ${type === 'smallImage' ? 'w-[70px] h-[70px]' : ''}
        ${type === 'title' ? 'w-[50%] h-[25px] mb-2' : ''}
        ${type === 'star' ? 'w-[25%] h-[16px] mb-2' : ''} 
        ${type === 'details' ? 'w-[20%] h-[18px] mb-2' : ''} 
        ${type === 'text' ? 'w-[300px] sm:w-[560px] h-[16px] gap-5' : ''}
        ${type === 'price' ? 'w-[30%] h-[18px] mt-2' : ''}
       `}
    />
  )
}
