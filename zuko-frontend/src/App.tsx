import { useEffect, useState } from "react"
import { client } from "./httpClient";

function App() {
  const [data, setData] = useState<string>();

  // TODO use when users interact with app, not when the app loads...
const exampleNetworkRequest = async () => {
  const reply = await client.api.quiz[":id"].$get({param: {id: '123'}})
  const data = await reply.json();
  setData(JSON.stringify(data, null, 2));
}

useEffect(() => {
  exampleNetworkRequest();
}, []);

  return (
    <>
      <h1>Zuko</h1>
      {data && <pre>Reply from server: {data}</pre>}
    </>
  )
}

export default App
