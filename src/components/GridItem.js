/** @jsx jsx */

import {jsx, css} from '@emotion/core';

const containerCss = css`
    color: #ccc;
    background-size: contain;
    border-left: 2px solid #fff;
    &:first-of-type {
      border-left: 0;
    }
`;

function GridItem({width, backgroundUrl}) {
    const backgroundCss = css({backgroundImage: `url('${backgroundUrl}')`});
    console.log('width', width);

    return (
        <div css={[containerCss, {width, height: 1.2 * width}, backgroundCss]}/>
    );
}

export default GridItem;