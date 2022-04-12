import { Fragment, MouseEventHandler } from 'react';
import './Paper.css';
import { Dynamic, Static } from '../api';

interface Props {
    paperType?: string
    caption?: string
    cover?: Dynamic | Static
    onClick?: MouseEventHandler<HTMLDivElement>
}

const randInt = (max: number) => {
    return Math.floor(Math.random() * max);
}

export const Paper = (props: Props) => {
    const classNames = ["paper-box1", "paper-box2"];
    const paperType = props.paperType || classNames[randInt(classNames.length)];
    return (
        <div
            className={paperType}
            onClick={props.onClick}
        >
            {(props.caption)
             ? <div className="paper-caption">{props.caption}</div>
             : <Fragment></Fragment>}
            {(props.cover)
             ? <img className="bg-img" src={
                (props.cover.kind==="dynamic")
                ? props.cover.cover
                : props.cover.url
            }/>
             : <Fragment></Fragment>}
        </div>
    )
}