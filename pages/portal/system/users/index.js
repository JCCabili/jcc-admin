import { Fragment } from "react";
import PortalLayout from "../../../component/portal-layout";

const Index = (props) => {
  const {currentUser} = props;
  if (!currentUser) {
    return <Fragment/>
  }

  return <PortalLayout>
  <div id="about">
    <p className="pt-10 w-full">Users</p>
  </div>
</PortalLayout>
}
Index.auth = true
export default Index;