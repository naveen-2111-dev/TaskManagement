import DeleteBlock from './DeleteBlock';
import PriorityDispllay from './PriorityDispllay';
import ProgressDisplay from './ProgressDisplay';
import StatusDisplay from './StatusDisplay';

const TicketCard = () => {
  return (
    <div className='flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2'>
      <div className='flex mb-3 justify-between'>
        <PriorityDispllay />
        <div className='ml-auto'>
          <DeleteBlock />
        </div>
      </div>
      <h4>Ticke Title</h4>
      <hr className='h-px border-0 bg-page mb-2' />
      <p className='whitespace-pre-wrap'>this is ticket discription</p>
      <div className='flex-grow'></div>
      <div className='flex mt-2'>
        <div className='flex flex-col'>
          <p className='text-xs my-1'>15/05/24 10:43pm</p>
          <ProgressDisplay />
        </div>
        <div className='ml-auto flex item-end'>
          <StatusDisplay />
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
