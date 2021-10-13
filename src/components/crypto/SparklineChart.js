import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const SparklineChart = ({ data, isIncreasing }) => {
  return (
    <Sparklines data={data} width={120} height={80} margin={2}>
      <SparklinesLine color={isIncreasing ? 'green' : 'red'} />
    </Sparklines>
  );
};

export default SparklineChart;
