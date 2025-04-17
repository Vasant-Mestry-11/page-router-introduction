import { useRouter } from "next/router"

export default function ClientIdPage() {

  const router = useRouter();

  function loadProjectHandler() {
    // load data...
    // router.push('/clients/max/projecta')
    router.push({
      pathname: '/clients/[id]/[clientProjectId]',
      query: { id: 'max', clientProjectId: 'projecta' }
    })
  }
  return <div>
    <h1>Client Id page</h1>
    <button onClick={loadProjectHandler}>Load project A</button>
  </div>
}