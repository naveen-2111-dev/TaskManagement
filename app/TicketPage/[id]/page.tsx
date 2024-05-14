import { props } from "@/types"

const TicketPage = ({ params }: props) => {
  return (
      <div>TicketPage { params.id }</div>
  )
}

export default TicketPage