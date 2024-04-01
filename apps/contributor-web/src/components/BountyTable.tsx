'use client';
import React from 'react';

export type TBountyData = {
  id: number;
  username: string;
  amount: number;
  createdAt: Date;
};

export interface BountyTableProps {
  data: TBountyData[];
}

export const BountyTable = ({ data }: BountyTableProps) => {
  return (
    <div>
      <table
        className=" border border-black m-5"
        cellSpacing={5}
        cellPadding={20}
      >
        <thead>
          <tr className="border border-black">
            <th>ID</th>
            <th>Username</th>
            <th>Amount</th>
            <th>Rewarded On</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, key) => {
            return (
              <tr
                key={'bounty_table_row_' + key}
                className="border border-black"
              >
                <td>{key + 1}</td>
                <td>{item.username}</td>
                <td>$ {item.amount}</td>
                <td>{new Date(item.createdAt).toString()}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {data.length === 0 && <p>No bounties received yet.</p>}
    </div>
  );
};
