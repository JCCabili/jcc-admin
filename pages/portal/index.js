/* This example requires Tailwind CSS v2.0+ */
import Router, { useRouter } from 'next/router';
import { Fragment, useState } from 'react'
import { getCurrentUser } from '../../logic/user';
import PortalLayout from '../component/portal-layout';


export default function Portal(props) {
  const {currentUser} = props;

  if (!currentUser) {
    return <Fragment/>
  }

  return (
    <PortalLayout>
      <div id="about">
        <p className="pt-10 w-full">Hello {currentUser.firstName}</p>
      </div>
    </PortalLayout>
    
  )
}
Portal.auth = true