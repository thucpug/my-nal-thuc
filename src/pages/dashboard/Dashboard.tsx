
import NavBarHead from './components/NavBarHead'
import NavBarSide from './components/NavBarSide'
import {TableUser} from "./components/Table";
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "../../redux/reducers";
import {useEffect} from "react";
import {userActions} from "../../redux/actions";


export default () => {
    const dispatch = useDispatch();
    const user = useSelector((state: RootReducerType) => state.authentication.user);
    const users = useSelector((state: RootReducerType) => {
        return state.users;
    });
    // @ts-ignore
    useEffect(() => {
        dispatch(userActions.getAll());
    }, []);
    console.log(users)
  return (
    <div className="container-scroller">
      <NavBarHead></NavBarHead>
      <div className="container-fluid page-body-wrapper">
        <NavBarSide></NavBarSide>
       <TableUser data={users}></TableUser>
      </div>
    </div>
  )
}
