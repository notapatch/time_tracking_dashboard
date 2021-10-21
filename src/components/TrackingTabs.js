import {Tab} from "@headlessui/react";
import AccountCard from "./AccountCard";
import TimeFrameCard from "./TimeFrameCard";
import { classNames } from "../utils/ClassNames";

function TrackingTabs(props) {
  function timeFrameTypes() {
    return Object.keys(props.report.timeTracks[0].timeframes);
  }

  return (
    <Tab.Group defaultIndex={1}>
      <div className="flex flex-col xl:flex-row">
        <div className="relative bg-neutral-blue-400 rounded-xl">
          <AccountCard account={props.report.account} />
          <Tab.List className="flex xl:flex-col justify-between xl:space-y-5 xl:items-start text-lg text-neutral-blue-300 pb-6 pt-12 px-9 -mt-6 rounded-xl">
            {timeFrameTypes().map(timeFrameType =>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "capitalize ",
                    selected ? "text-white" : ""
                  )
                }
              >{timeFrameType}</Tab>
            )
            }
          </Tab.List>
        </div>
        <Tab.Panels className="mt-6 xl:mt-0">
          { timeFrameTypes().map(timeFrameType =>
            <Tab.Panel className="space-y-6 xl:ml-8 xl:space-y-0 xl:grid grid-cols-3 xl:gap-8">
              {props.report.timeTracks.map(timeTrack => {
                return (
                  <TimeFrameCard timeTrack={timeTrack} timeFrameType={timeFrameType} />
                )
              })}
            </Tab.Panel>
          )}
        </Tab.Panels>
      </div>
    </Tab.Group>
  )
}

export default TrackingTabs;