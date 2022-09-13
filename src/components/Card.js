import React from 'react';
import Scroll from './Scroll';

const Card = ({source, par}) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5' style = {{marginBottom: 150, borderRadius: 50, height:500, width: 300, marginRight: 50, background: '#ffcccc'}}>
      <img alt='comments' src={source} style = {{borderRadius: 30, height:210, width: 250, marginBottom: 30}} />
      <div>
        <Scroll>
            <p1 style = {{fontSize: 20,   fontFamily: 'Open Sans'}}>{par}</p1>
        </Scroll>
      </div>
    </div>
  );
}

export default Card;