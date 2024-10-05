import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton'

export const Skeletons = () => {
  return (
    <div className='skeleton__container flex flex-col'>
      <div className='skeleton__btn-container flex gap-2'>
        <Skeleton
          height={45}
          width={80}
          style={{ backgroundColor: '#e0e0e0' }} 
        />
        <Skeleton
          height={45}
          width={80}
          style={{ backgroundColor: '#e0e0e0' }} 
        />{' '}
        <Skeleton
          height={45}
          width={80}
          style={{ backgroundColor: '#e0e0e0' }} 
        />{' '}
        <Skeleton
          height={45}
          width={80}
          style={{ backgroundColor: '#e0e0e0' }} 
        />
      </div>
      <div className='skeleton__container mt-5 flex gap-5'>
        <Skeleton
          height={220}
          width={186}
          style={{ backgroundColor: '#e0e0e0' }} 
        />
        <Skeleton
          height={220}
          width={186}
          style={{ backgroundColor: '#e0e0e0' }} 
        />
        <Skeleton
          height={220}
          width={186}
          style={{ backgroundColor: '#e0e0e0' }} 
        />
      </div>
    </div>
  )
}
