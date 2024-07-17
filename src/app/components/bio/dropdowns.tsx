'use client';
import React, { useRef, useState, ReactElement } from 'react';
import { GoPlusCircle } from 'react-icons/go';
import { CiCircleMinus } from 'react-icons/ci';

interface Cell {
  content: string;
  width?: string;
  hidden?: boolean;
}

interface Row {
  map: (arg0: (cell: Cell, idx: number) => JSX.Element) => ReactElement[];
}

interface TableData {
  key: string;
  title: string;
  rows: Row[];
}

interface DropdownTableProps {
  colors: string[];
  title: string;
  rows: Row[];
  toggleVisibility: () => void;
  isVisible: boolean;
}

function DropdownTable({
  colors,
  title,
  rows,
  toggleVisibility,
  isVisible,
}: DropdownTableProps): JSX.Element {
  const headerColor = colors[2];
  const headerTextColor = colors[3];
  const secondaryColor = colors[1];
  const secondaryTextColor = colors[3];

  return (
    <div className="w-full justify-start overflow-hidden rounded-md ">
      <div tabIndex={0} className="cursor-pointer">
        <div
          className={`sticky top-0 z-10 mt-1 flex items-center justify-between rounded-md bg-opacity-100 px-2 font-bold`}
          style={{
            backgroundColor: isVisible ? headerColor : secondaryColor,
            color: isVisible ? headerTextColor : secondaryTextColor,
          }}
          onClick={toggleVisibility}
        >
          <div className="font-thin hover:font-normal">{title}</div>
          <button
            className="sticky right-0 top-0 z-10 flex h-6 w-4 items-center justify-center rounded-full"
            aria-label={isVisible ? 'Collapse' : 'Expand'}
          >
            {isVisible ? <CiCircleMinus /> : <GoPlusCircle />}
          </button>
        </div>
        {isVisible && (
          <table
            className="border-1 w-full table-fixed text-left text-xs"
            style={{ borderColor: secondaryColor }}
          >
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={index}
                  style={{
                    borderColor: headerColor,
                  }}
                  className={`h-6 w-full rounded-md border-t border-blue-200 bg-black bg-opacity-20`}
                >
                  {row.map((cell, idx) => (
                    <th
                      key={idx}
                      className={`w-${cell.width} px-1 font-thin ${cell.hidden ? `hidden md:table-cell` : ``}`}
                    >
                      {cell.content}
                    </th>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
interface StoryDropdownsProps {
  colors: string[];
}

export default function StoryDropdowns({
  colors,
}: StoryDropdownsProps): JSX.Element {
  const toggleVisibility = (key: string): void => {
    if (activeTable === key) {
      setActiveTable(null);
    } else {
      setActiveTable(key);
    }
  };

  const [activeTable, setActiveTable] = useState<string | null>(null);

  const tables = [
    {
      key: 'jobHistory',
      title: 'My job history',
      rows: [
        [
          {
            content: 'Snr Mgr, Exposure Measurement Team',
            width: '6/12',
          },
          { content: 'Macquarie Bank', width: '2/12' },
          { content: 'New York', width: '2/12', hidden: true },
          { content: "'22-'24", width: '2/12' },
        ],
        [
          {
            content: 'Snr Mgr, Op Risk & Governance',
            width: '6/12',
          },
          { content: 'Macquarie Bank', width: '3/12' },
          { content: 'London', width: '2/12', hidden: true },
          { content: "'20-'22", width: '1/12' },
        ],
        [
          { content: 'Snr Mgr, Risk Appetite', width: '6/12' },
          { content: 'ANZ Bank', width: '3/12' },
          { content: 'Hong Kong', width: '2/12', hidden: true },
          { content: "'19-'20", width: '1/12' },
        ],
        [
          { content: 'Manager, Risk Chief of Staff', width: '6/12' },
          { content: 'ANZ Bank', width: '3/12' },
          { content: 'Hong Kong', width: '2/12', hidden: true },
          { content: "'17-'19", width: '1/12' },
        ],
        [
          { content: 'Credit Analyst', width: '6/12' },
          { content: 'ANZ Bank', width: '3/12' },
          { content: 'Hong Kong', width: '2/12', hidden: true },
          { content: "'16-'17", width: '1/12' },
        ],
        [
          { content: 'Risk Graduate', width: '6/12' },
          { content: 'ANZ Bank', width: '3/12' },
          { content: 'Melbourne', width: '2/12', hidden: true },
          { content: "'14-'16", width: '1/12' },
        ],
      ],
    },
    {
      key: 'education',
      title: 'My education',
      rows: [
        [
          { content: 'Full Stack Coding Bootcamp', width: '6/12' },
          { content: 'Columbia University', width: '3/12' },
          { content: "'23", width: '2/12', hidden: true },
        ],
        [
          { content: 'CFA Level II', width: '6/12' },
          { content: 'CFA Institute', width: '3/12' },
          { content: "'20", width: '2/12', hidden: true },
        ],
        [
          { content: 'FRM (Financial Risk Manager)', width: '6/12' },
          {
            content: 'GARP',
            width: '3/12',
          },
          { content: "'18", width: '2/12', hidden: true },
        ],
        [
          {
            content: 'Bachelor of Commerce (Actuarial Statistics)',
            width: '6/12',
          },
          { content: 'Monash University', width: '3/12' },
          { content: "'12", width: '2/12', hidden: true },
        ],
        [
          { content: 'Bachelor of Engineering (Civil)', width: '6/12' },
          { content: 'Monash University', width: '3/12' },
          { content: "'12", width: '2/12', hidden: true },
        ],
      ],
    },
    {
      key: 'interests',
      title: 'My interests',
      rows: [
        [{ content: 'Coding, obviously' }],
        [{ content: 'Being a good father to my little girl' }],
        [{ content: 'Running (12 marathons & counting...)' }],
        [{ content: 'Travel' }],
        [{ content: 'Hiking & Nature' }],
      ],
    },
  ];
  return (
    <div className="h-fill flex flex-col justify-between overflow-hidden">
      <div>
        {tables.map((table) => (
          <DropdownTable
            colors={colors}
            key={table.key}
            title={table.title}
            rows={table.rows}
            isVisible={activeTable === table.key}
            toggleVisibility={() => toggleVisibility(table.key)}
          />
        ))}
      </div>
    </div>
  );
}
