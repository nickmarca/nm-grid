/** @jsx jsx */

import {jsx, css} from '@emotion/core';

const containerCss = css`
    color: #ccc;
    border-left: 2px solid transparent;
    &:first-of-type {
      border-left: 0;
    }
`;

function GridItem({width, item}) {
    return (
        <div css={[containerCss, {width, height: 1.2 * width}]}>
            {item}
        </div>
    );
}

export default GridItem;