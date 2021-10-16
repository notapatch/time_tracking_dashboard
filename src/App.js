import TimeTracks from './data/timeTracks.json'
import { Tab } from '@headlessui/react'

function MyTabs() {
  return (
    <Tab.Group>
      <Tab.List>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>Content 1</Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  )
}

function App() {
  return (
    <div className="App">
      <MyTabs />
      {TimeTracks.map(timeTrack => (
        <h2>{timeTrack.title}</h2>
      ))}
    </div>
  );
}

export default App;
