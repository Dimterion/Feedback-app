import { Link } from "react-router-dom";
import Card from "../components/shared/Card";

function ErrorPage() {
  return (
    <Card>
      <div className="about">
        <h1>This Page Does Not Exist</h1>
        <p>
          <Link to="/">Back To Home</Link>
        </p>
      </div>
    </Card>
  );
}

export default ErrorPage;
