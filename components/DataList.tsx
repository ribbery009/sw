import React, { FC } from 'react';

type Props = {
  data: Object
};

const DataList :FC<Props> = ( {data}) => {
  return (
    <ul className=" mb-2 space-y-2">
      {Object.entries(data).map(([key, value]) => (
        <li key={key} className="flex justify-between">
          <span className="font-bold capitalize text-yellow-400">{key}</span>
          <span className='text-black font-bold'>{Array.isArray(value) ? `${value.length} db` : value}</span>
        </li>
      ))}
    </ul>
  );
};

export default DataList;