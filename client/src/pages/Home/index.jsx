import Header from '../../components/Header'
import TableAddresses from '../../components/TableAddresses'

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-start bg-gray-100">
      <Header />
      <TableAddresses />
    </div>
  )
}
