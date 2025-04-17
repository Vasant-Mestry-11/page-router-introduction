import Link from "next/link";

export default function ClientPage() {
  const clients = [
    {
      id: 'max', name: 'Maximillian'
    },
    {
      id: 'manu', name: 'Manuel'
    }
  ]
  return <div>
    <h1>Client page</h1>
    <ul>
      {clients.map(({ id, name }) => (
        <li key={id}>
          <Link href={`/clients/${id}`}>{name}</Link>
          {/* <Link href={{ pathname: `/clients/[id]`, query: id }}>{name}</Link> */}
        </li>
      ))}
    </ul>
  </div>
}