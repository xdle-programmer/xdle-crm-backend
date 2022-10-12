import React from 'react';

type AppProps = { string: string };

export const App = ({string}: AppProps) => {

    return (
        <div>
            <h1>String 4: {string}</h1>

            <input/>
        </div>
    )
};

// import React, {useEffect} from 'react';
//
// function App() {
//
//     console.log(12312313)
//
//     return (
//         <div>
//             wqwerweaefqwfqdqd
//         </div>
//     );
// }
//
// export default App;
