import React from 'react';
import {WorkData} from '../../../data/work';
import Separator from '../../common/separator';
import WorkCard from './work-card';
import './work.css';

function Work() {
    return (
    <div>
        <Separator />
        <label className='section-title '>Work</label>
        <div className='work-list'>
            {WorkData.map((item) => {
                return (
                     <WorkCard key={item.id.toString()} item={item} />
                )
            })}
        </div>
    </div>
  );
}

export default Work;
