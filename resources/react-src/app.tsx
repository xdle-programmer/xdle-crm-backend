import * as React from "react";

type AppProps = { string: number };

export const App = ({string}: AppProps) => {

    console.log(5)

    return (
        <div>
            <h1>String 132213: {string}</h1>

            <input/>
        </div>
    )
}
