import Card from './Card'

const TaskColumn = () => (
  <div className=''>
    <p className='text-[18px] font-semibold text-neutral-1'>Working (03)</p>
    <div className='mt-4 space-y-4'>
      <Card />
      <Card />
      <Card />
    </div>
  </div>
)

export default TaskColumn
