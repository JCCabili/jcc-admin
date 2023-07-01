
import { ApolloProvider } from "@apollo/client"
import Banner from "./component/banner"
// import About from './component/about'
// import Work from "./component/work"
// import Experience from './component/experience'
// import Contact from './component/contact'
import Footer from "./component/footer"
import Layout from './component/layout'
import { client } from "../utils/graphql"


export default function Home() {
  return (
    
      <Layout>
        <Banner/>
        <Footer/>
      </Layout>
      
  )
}
