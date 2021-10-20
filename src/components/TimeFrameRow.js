import ellipsis from "../assets/images/icon-ellipsis.svg";

function TimeFrameRow(props) {
  function fileFormat(fileName) {
    return fileName.split(" ").join("-").toLowerCase();
  }

  return (
    <div>
      <div className={`bg-${fileFormat(props.timeTrack.title)} bg-img-${fileFormat(props.timeTrack.title)}  bg-no-repeat bg-right-above-top rounded-xl h-20`}>
      </div>
      <div className="bg-neutral-blue-400 hover:bg-neutral-blue-350 -mt-10 xl:h-52 py-7 px-6 text-white grid grid-cols-2 items-center rounded-xl">
        <p className="text-lg font-medium">{props.timeTrack.title}</p>
        <div className="justify-self-end"><img src={ellipsis} alt="ellipsis" /></div>

        <p className="text-5xl font-light">{`${props.timeTrack.timeframes[props.timeFrameType].current}hrs`}</p>
        <p className="text-sm justify-self-end xl:justify-self-start xl:col-span-2">{`Last week - ${props.timeTrack.timeframes[props.timeFrameType].previous}hrs`}</p>
      </div>
    </div>
  )
}

export default TimeFrameRow;