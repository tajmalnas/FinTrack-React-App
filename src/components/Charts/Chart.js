import React from 'react';
import './Chart.css';

const Chart = (props) => {
  const { expenseList } = props;

  const calculateMonthlySum = () => {
    const sumsByMonth = {};
    expenseList.forEach((expense) => {
      const { amount, date } = expense;
      const month = getMonthFromDate(date);

      if (sumsByMonth[month]) {
        sumsByMonth[month] += amount;
      } else {
        sumsByMonth[month] = amount;
      }
    });

    return sumsByMonth;
  };

  const getMonthFromDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.toLocaleString('default', { month: 'long' });
    return month;
  };

  const monthlySum = calculateMonthlySum();

  return (
    <>
    <h3>Expense Chart By Month</h3>
    <div className="chart">
      {Object.entries(monthlySum).map(([month, sum]) => (
        <div className="bar" key={month} style={{ height: `${sum}px` }}>
          <div className="month">{month.slice(0,3)}</div>
          <div className="label">{sum}</div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Chart;
