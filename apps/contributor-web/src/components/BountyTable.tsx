// BountyTable.jsx
import React from 'react';

export type TBountyData = {
  id: number;
  username: string;
  amount: number;
  createdAt: Date;
  status: 'PAID' | 'NOTPAID';
};

export interface BountyTableProps {
  data: TBountyData[];
}

export const BountyTable = ({ data }: BountyTableProps) => {
  if (data.length === 0) {
    return (
      <p className="text-center my-5 text-lg text-gray-500">
        No bounties received yet.
      </p>
    );
  }

  return (
    <div className="mt-5">
      <div
        className="overflow-x-auto bg-white rounded-lg shadow overflow-y-auto relative"
        style={{ maxHeight: '60vh' }}
      >
        <table className="border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped relative">
          <thead>
            <tr className="text-left">
              <th className="py-2 px-3 border-b border-gray-200 bg-gray-50">
                ID
              </th>
              <th className="py-2 px-3 border-b border-gray-200 bg-gray-50">
                Username
              </th>
              <th className="py-2 px-3 border-b border-gray-200 bg-gray-50">
                Amount
              </th>
              <th className="py-2 px-3 border-b border-gray-200 bg-gray-50">
                Rewarded On
              </th>
              <th className="py-2 px-3 border-b border-gray-200 bg-gray-50">
                Claimed
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-1 px-3 border-b border-gray-200">
                  {index + 1}
                </td>
                <td className="py-1 px-3 border-b border-gray-200">
                  {item.username}
                </td>
                <td className="py-1 px-3 border-b border-gray-200">
                  ${item.amount.toFixed(2)}
                </td>
                <td className="py-1 px-3 border-b border-gray-200">
                  {new Date(item.createdAt).toLocaleDateString()}
                </td>
                <td className="py-1 px-3 border-b border-gray-200">
                  {item.status === 'PAID' ? 'Yes' : 'No'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
