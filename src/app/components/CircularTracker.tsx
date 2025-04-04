'use client';

import React from 'react';
import {
    CircularProgressbarWithChildren,
    buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface StatBlockProps {
  value: number;
  label: string;
  valueStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  className?: string;
}

const StatBlock: React.FC<StatBlockProps> = ({ value, label, valueStyle, labelStyle }) => (
  <div style={{ textAlign: 'center' }} >
    <div style={{  fontWeight: 500, ...valueStyle }}>{value}</div>
    <div style={{ color: '#666', ...labelStyle }}>{label}</div>
  </div>
);

export default function CircularTracker() {
    const consumed = 656;
    const target = 1220;
    const remaining = target - consumed;
    const percentage = (consumed / target) * 100;

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
            <div style={{ flex: 1 }}>
              <StatBlock value={remaining} label="Remaining" valueStyle={{ fontSize: '0.7em' }} labelStyle={{fontSize : '0.5em'}}/>
            </div>
            <div style={{ flex: 2, height: 150 }} className={"pt-4"}>
                <CircularProgressbarWithChildren
                    value={percentage}
                    strokeWidth={5}
                    styles={buildStyles({
                        pathColor: '#4f86f7',
                        trailColor: '#eee',
                        strokeLinecap: 'round',
                    })}
                >
                    <StatBlock value={consumed} label="Consumed" valueStyle={{fontSize:"0.7em"}} labelStyle={{fontSize:"0.5em"}} />
                </CircularProgressbarWithChildren>
            </div>
            <div style={{ flex: 1 }}>
              <StatBlock value={target} label="Target" valueStyle={{fontSize:"0.7em"}} labelStyle={{fontSize:"0.5em"}} />
            </div>
        </div>
    );
}
