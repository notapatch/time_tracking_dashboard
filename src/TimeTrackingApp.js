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

function TrackingTabs(props) {
  function timeFrameTypes() {
    return Object.keys(props.timeTracks[0].timeframes);
  }

  return (
    <Tab.Group>
      <div className="flex flex-col xl:flex-row">
        <div className="relative">
          <UserAccount userAccount={USER_ACCOUNT} />
          <Tab.List className="flex xl:flex-col justify-between xl:items-start text-neutral-blue-300 bg-neutral-blue-400 pb-6 pt-12 px-9 -mt-6 rounded-xl">
            {timeFrameTypes().map(timeFrameType =>
              <Tab className="capitalize">{timeFrameType}</Tab>
            )
            }
          </Tab.List>
        </div>
        <Tab.Panels className="mt-6">
          { timeFrameTypes().map(timeFrameType =>
            <Tab.Panel className="space-y-6">
              {props.timeTracks.map(timeTrack => {
                return (
                  <div>
                    <h3>{timeTrack.title}</h3>
                    <h3>{timeTrack.timeframes[timeFrameType].current}</h3>
                    <h3>{timeTrack.timeframes[timeFrameType].previous}</h3>
                  </div>
                )
              })}
            </Tab.Panel>
          )}
        </Tab.Panels>
      </div>
    </Tab.Group>
  )
}

function TimeTrackingApp(props) {
  return (
    <div className="App">
      <div className="px-6 py-20 bg-neutral-blue-500">
        <TrackingTabs timeTracks={props.timeTracks} />
      </div>
    </div>
  );
}

export default TimeTrackingApp;
