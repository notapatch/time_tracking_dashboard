import { Tab } from '@headlessui/react'
import ellipsis from './assets/images/icon-ellipsis.svg'
import exercise from './assets/images/icon-exercise.svg'
import play from './assets/images/icon-play.svg'
import selfCare from './assets/images/icon-self-care.svg'
import social from './assets/images/icon-social.svg'
import study from './assets/images/icon-study.svg'
import work from './assets/images/icon-work.svg'

function Account(props) {
  return (
    <div className="bg-report grid grid-cols-user-report xl:grid-cols-1 rounded-xl p-9 relative z-10">
      <div>
        <img className="relative z-30 inline-block h-16 w-16 rounded-full ring-2 ring-white"
             src={require(`./assets/images/image-${props.account.username}.png`).default}
             alt="user portrait'"
        />
      </div>
      <div className="ml-5 text-left xl:ml-0 xl:mt-11">
        <h3 className="text-sm font-normal text-neutral-blue-200">Report for</h3>
        <h2 className="text-2xl xl:text-4xl xl:mb-10 font-light text-white">{props.account.name}</h2>
      </div>
    </div>
  )
}

function TimeFrameRow(props) {
  const icons = { exercise, play, "self-care": selfCare, social, study, work };

  function fileFormat(fileName) {
    return fileName.split(" ").join("-").toLowerCase();
  }

  return (
    <div className={`bg-${fileFormat(props.timeTrack.title)} rounded-xl relative overflow-hidden`}>
      <img src={icons[fileFormat(props.timeTrack.title)]} className="absolute -top-2.5 right-0" />
      <div className="bg-neutral-blue-400 hover:bg-neutral-blue-350 mt-10 xl:h-52 py-7 px-6 relative z-10 text-white grid grid-cols-2 items-center rounded-xl">
        <p className="text-lg font-medium">{props.timeTrack.title}</p>
        <div className="justify-self-end"><img src={ellipsis} alt="ellipsis" /></div>

        <p className="text-3xl font-light">{`${props.timeTrack.timeframes[props.timeFrameType].current}hrs`}</p>
        <p className="justify-self-end">{`Last week - ${props.timeTrack.timeframes[props.timeFrameType].previous}hrs`}</p>
      </div>
    </div>
  )
}

function TrackingTabs(props) {
  function timeFrameTypes() {
    return Object.keys(props.report.timeTracks[0].timeframes);
  }

  return (
    <Tab.Group>
      <div className="flex flex-col xl:flex-row">
        <div className="relative bg-neutral-blue-400 rounded-xl">
          <Account account={props.report.account} />
          <Tab.List className="flex xl:flex-col justify-between xl:space-y-5 xl:items-start text-neutral-blue-300 pb-6 pt-12 px-9 -mt-6 rounded-xl">
            {timeFrameTypes().map(timeFrameType =>
              <Tab className="capitalize">{timeFrameType}</Tab>
            )
            }
          </Tab.List>
        </div>
        <Tab.Panels className="mt-6 xl:mt-0">
          { timeFrameTypes().map(timeFrameType =>
           <Tab.Panel className="space-y-6 xl:ml-8 xl:space-y-0 xl:grid grid-cols-3 xl:gap-8">
             {props.report.timeTracks.map(timeTrack => {
               return (
                <TimeFrameRow timeTrack={timeTrack} timeFrameType={timeFrameType} />
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
        <TrackingTabs report={props.report} />
      </div>
    </div>
  );
}

export default TimeTrackingApp;
