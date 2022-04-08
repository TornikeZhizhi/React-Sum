
import React, {Component, createContext} from "react";


const HeaderSwitchContext = React.createContext({

    isDark:false,
})


export default HeaderSwitchContext;


// export const SwitcherTheme = createContext();

// class HeaderSwitchContext extends Component {

//     state = { 
//         isDarkMode:false,
//     }

//     render(){
//         return(
//             <SwitcherTheme.Provider value={{isDarkMode:this.state.isDarkMode}}>
//                 {this.props.children}
//             </SwitcherTheme.Provider>
//             )
//     }
// }
// export default HeaderSwitchContext;