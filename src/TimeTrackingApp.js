import TrackingTabs from "./components/TrackingTabs"

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
