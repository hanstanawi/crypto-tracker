import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const SparklineChart = ({ data }) => {
  console.log(data);
  return (
    <Sparklines data={data} width={120} height={80} margin={2}>
      <SparklinesLine color='green' />
    </Sparklines>
  );
};

export default SparklineChart;
