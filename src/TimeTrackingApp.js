import { Tab } from '@headlessui/react'
import jeremyImage from './assets/images/image-jeremy.png'
const USER_ACCOUNT = {name: "Jeremy Robson", image: jeremyImage}

function UserAccount(props) {
  return (
    <div className="bg-report grid grid-cols-user-report rounded-xl p-9 relative z-10">
      <div>
        <img className="relative z-30 inline-block h-16 w-16 rounded-full ring-2 ring-white"
             src={props.userAccount.image}
             alt="user portrait'"
        />
      </div>
      <div className="ml-5 text-left">
        <h3 className="text-sm font-normal text-neutral-blue-200">Report for</h3>
        <h2 className="text-2xl font-light text-white">{props.userAccount.name}</h2>
      </div>
    </div>
  )
}

function TrackingTabs() {
  return (
    <Tab.Group>
      <div className="flex flex-col xl:flex-row">
        <div>
          <UserAccount userAccount={USER_ACCOUNT}/>
          <Tab.List className="flex xl:flex-col justify-between xl:items-start">
            <Tab>Daily</Tab>
            <Tab>Weekly</Tab>
            <Tab>Monthly</Tab>
          </Tab.List>
        </div>
        <Tab.Panels>
           <Tab.Panel>Daily stats</Tab.Panel>
           <Tab.Panel>Weekly stats</Tab.Panel>
           <Tab.Panel>Monthly stats</Tab.Panel>
         </Tab.Panels>
      </div>
    </Tab.Group>
  )
}

function TimeTrackingApp(props) {
  return (
    <div className="App">
      <div className="px-6 py-20 bg-neutral-blue-500">
        <TrackingTabs />
      </div>
    </div>
  );
}

export default TimeTrackingApp;
