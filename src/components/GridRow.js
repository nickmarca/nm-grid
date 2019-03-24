/** @jsx jsx */

import {jsx, css} from '@emotion/core';
import GridItem from './GridItem';

const containerCss = css`
    display: flex;
    flex-direction: row;
    background: #ccc;
    margin-top: 2px;
    &:first-of-type {
       margin-top: 0;
    }
`;

function GridRow({items, itemWidth}) {
    return (
        <div css={containerCss}>
            {
                items.map((item, i) => <GridItem {...item} width={itemWidth} key={i + ''} />)
            }
        </div>
    );
}

export default GridRow;