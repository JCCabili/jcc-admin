import { Fragment } from "react";
import List from "./list";
import PortalLayout from "../../../component/portal-layout";

const Index = (props) => {
  const {currentUser} = props;
  if (!currentUser) {
    return <Fragment/>
  }

  return (
    <PortalLayout>
      <List/>
    </PortalLayout>
  )
}

Index.auth = true
export default Index;