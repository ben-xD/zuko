import Page from '@/app/dashboard/page';

function App() {
  // TODO use when users interact with app, not when the app loads...
// const exampleNetworkRequest = async () => {
//   const reply = await client.api.quiz[":id"].$get({param: {id: '123'}})
//   const data = await reply.json();
//   setData(JSON.stringify(data, null, 2));
// }

  return (
    <>
      <Page/>
    </>
  )
}

export default App
