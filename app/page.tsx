import TicketCard from '../components/TicketCard';

const Dashboard = () => {
  return (
    <div className='p-5'>
      <div className='grid-cols-2 lg:grid xl:grid-cols-4'>
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
      </div>
    </div>
  );
};

export default Dashboard;
