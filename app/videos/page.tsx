import React from 'react';
import VideoModule from '../../components/VideoModule';

type Props = {};

export default function VideoPage({}: Props) {
  return (
    <div>
        <div className="flex flex-col justify-center my-8">
            <VideoModule title="Ude Dil Levitating - UW Kahaani" src="kxFhZwQ3eu0" />
            <VideoModule title="VEX Worlds Reveal - 917M" src="lWE1iFQBnmM" />
            <VideoModule title="PSA 2020 ILC Winner - HOSA" src="iL9gJoI2TR4" />
        </div>
    </div>
    
  );
}
