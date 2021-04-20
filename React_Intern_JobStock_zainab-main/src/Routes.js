import {Route,Switch} from "react-router-dom"
import React from "react"
import Home from "./pages/Home";
import Blog from "./pages/Blog"
import Freelancing from "./pages/Freelancing"
import FreelancerDetail from "./pages/DetailedFreelancer";
import CreateJob from "./pages/CreateJob";
import Payment from "./pages/Payment";
import Pricing from "./pages/Pricing";
import ClientProfile from "./pages/ClientProfile";
import ResumeDetail from './pages/ResumeDetail'
import CompanyDetail from './pages/CompanyDetail'

const Routes = () => {
  return(
    <Switch >
      <Route exact path="/" render={props => <Home {...props} />}/>
      <Route exact path="/blog" render={props => <Blog {...props} />}/>
      <Route exact path="/createJob" render={props => <CreateJob {...props} />}/>
      <Route exact path="/Freelancing" render={props => <Freelancing {...props} />}/>
      <Route exact path="/FreelancerDetail" render={props => <FreelancerDetail {...props} />}/>
      <Route exact path="/Pricing" render={props => <Pricing {...props} />}/>
      <Route exact path="/Client" render={props => <Home {...props} />}/>
      <Route exact path="/Payment" render={props => <Payment {...props} />}/>
      <Route exact path="/clientProfile" render={props => <ClientProfile {...props} />}/>
      <Route exact path="/resumeDetail" render={props => <ResumeDetail {...props} />}/>
      <Route exact path="/companyDetail" render={props => <CompanyDetail {...props} />}/>


    </Switch>
  )
}
export default Routes