import './App.css'
import CounterStateExample from './components/CounterStateExample'
import CounterProvider from './contexts/CounterContext'
import ContextContextExample from './components/CounterContextExample'
import { Provider } from 'react-redux'
// import store from './store'
import store from './redux-toolkit/index'
import CounterReduxExample from './components/CounterReduxExample'
import Counter from './components/CounterBatchUpdate'
import FetchUsersRedux from './components/FetchUsersRedux'
import MemoDemo from './components/MemoDemo'
import CounterToolkit from './components/CounterToolkit'

function App() {

  return (
    <>
      {/* <CounterStateExample /> 1st way */}
      
      {/* <CounterProvider>
        <ContextContextExample />
      </CounterProvider> */}

       <Provider store={store}>
        {/* <CounterReduxExample /> */}
        <CounterToolkit />
        {/* <FetchUsersRedux /> */}
        {/* <CounterTOO */}
      </Provider> 



      {/* <MemoDemo /> */}

      {/* <Counter /> */}
      


    </>
  )
}

export default App;
