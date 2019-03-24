/** @jsx jsx */

import {jsx} from '@emotion/core';
import Grid from "./components/Grid";
import useWindowWidth from "./hooks/useWindowWidth";
import gridItems from './data/gridItems';

function App() {
    const width = useWindowWidth();

    return (
        <div>
            <Grid width={width} items={gridItems.items} />
        </div>
    )
}

export default App;
