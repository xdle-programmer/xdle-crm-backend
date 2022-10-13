import React from 'react';

type AppProps = { string: number };

export const App = ({string}: AppProps) => {

    return (
        <div>
            <h1>String 132213: {string}</h1>

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
