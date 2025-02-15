import React from 'react';
import * as d3 from "d3";
import { isNotVoid } from '$utils';

interface ILinePlot {
  data: number[];
  width?: number;
  height?: number;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
}

const LinePlot: React.FC<ILinePlot> = (props) => {
  const {
    data,
    width = 640,
    height = 400,
    marginTop = 20,
    marginRight = 20,
    marginBottom = 20,
    marginLeft = 20
  } = props;

  
  const yAsix = [Math.min(...data), Math.max(...data)];

  const x = d3.scaleLinear([0, data.length - 1], [marginLeft, width - marginRight]);
  const y = d3.scaleLinear(yAsix, [height - marginBottom, marginTop]);
  const line = d3.line((d, i) => x(i), y);
  return (
    <svg width={width} height={height}>
      <path fill="none" stroke="currentColor" strokeWidth="1.5" d={line(data)?.toString()} />
      <g fill="white" stroke="currentColor" strokeWidth="1.5">
        {data.map((d, i) => (<circle key={i} cx={x(i)} cy={y(d)} r="15" />))}
      </g>
    </svg>
  );
}

const Home: React.FC = () => {
  return <LinePlot data={[1,2,3,4,5]} />
}

export default Home;