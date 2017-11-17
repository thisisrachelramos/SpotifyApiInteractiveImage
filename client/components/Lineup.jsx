import React from 'react';
import SoundUrl from '../containers/SoundUrl';

// Parent component that can render other components
// in the case we want to show things other than the lineup
export default function Lineup() {
  return (
    <div>
      <SoundUrl />
    </div>
  );
}
