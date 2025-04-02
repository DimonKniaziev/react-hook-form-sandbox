import { BrowserRouter as Router, Link } from "react-router-dom"
import { Step1 } from "./step1"
import { Step2 } from "./step2"
import { Result } from "./result"



export const MultiPageFormPage: React.FC = () => {
  return (
    <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/single-forms">Single Forms</Link>
            </li>
            <li>
              <Link to="/multi-page-form">Multi Page Form</Link>
            </li>
          </ul>
        </nav>
    </div>
)  
}