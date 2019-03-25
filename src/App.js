/** @jsx jsx */

import {jsx, css} from '@emotion/core';
import Grid from "./components/Grid";
import useWindowWidth from "./hooks/useWindowWidth";
import gridItems from './data/gridItems';


const itemCss = css`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  height: 100%;
  background-color: green;
`;

function Item({message}) {
  return (
    <div css={itemCss}>
      {message || 'No Message'}
    </div>
  )
}

function App() {
    const width = useWindowWidth();

    return (
        <div>
            <Grid width={width} items={gridItems.items} gridItemComponent={Item}>
              <Item/>
              <Item/>
              <Item/>
              <Item/>
              <Item/>
              <Item/>
              <Item/>
              <Item message="good morning" />
              <Item message="how are you" />
              <Item message="good evening" />
              <Item message="good afternoon" />

              <Item/>
              <Item/>
              <Item/>
              <Item/>
              <Item message="good morning" />
              <Item message="how are you" />
              <Item message="good evening" />
              <Item message="good afternoon" />
            </Grid>
        </div>
    )
}

export default App;
