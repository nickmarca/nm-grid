/** @jsx jsx */

import {Children} from 'react';
import {jsx, css} from '@emotion/core';
import GridRow from './GridRow';
import useMedia from "../hooks/useMedia";

const containerCss = css`
    display: flex;
    flex-direction: column;
    padding: 10px 0;
    background: red;
`;

function split(items, maxRowItems) {
    const reducer = (finalArray, currentItem) => {
        const lastRow = finalArray[finalArray.length - 1];
        if (!(lastRow.length === maxRowItems)) {
            const lastRowUpdated = lastRow.concat([currentItem]);
            return finalArray.map(row => row === lastRow ? lastRowUpdated : row);
        } else {
            return finalArray.concat([[currentItem]]);
        }
    };

    return items.reduce(reducer, [[]]);
}

function Grid({width, items, children}) {
    const xs = useMedia("(min-width: 576px)");
    const md = useMedia("(min-width: 768px)");
    const lg = useMedia("(min-width: 992px)");

    const maxRowItems = lg ? 7 : md ? 5 : xs ? 3 : 1;
    const rows = split(Children.map(children, child => child), maxRowItems);

    return (
        <div css={[containerCss, {width}]}>
            {
                rows.map((rowItems, i) => <GridRow key={i + '-row'} itemWidth={width / maxRowItems} items={rowItems} />)
            }
        </div>
    )
}

export default Grid;