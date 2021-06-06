
import NavBarHead from './components/NavBarHead'
import NavBarSide from './components/NavBarSide'
import {TableUser} from "./components/Table";


export default () => {
  return (
    <div className="container-scroller">
      <NavBarHead></NavBarHead>
      <div className="container-fluid page-body-wrapper">
        <NavBarSide></NavBarSide>
       <TableUser></TableUser>
      </div>
    </div>
  )
}
