import Areachart from "./Areachart";
import { Barchart } from "./Barchart";
import { LineCharts } from "./LineCharts";
import PieChartComponent from "./Pichart";

function App() {

  return (
    <>
      <div className="chart-heading">
        <h1 style={{ color: 'gray' }}>
          Create charts using {' '}
          <strong style={{ color: 'black' }}>Recharts.</strong>
        </h1>
      </div>
      <Barchart />
      <LineCharts />
      <PieChartComponent />
      <Areachart />
    </>
  );
}
export default App;