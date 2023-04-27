import Nav from 'react-bootstrap/Nav';
import "./sidenav.css";

function Sidebar() {
  return (
    <Nav defaultActiveKey="/" className="flex-column sidenav">
      <h1>MeekFi</h1>
      <Nav.Link href="/">Bar Chart</Nav.Link>
      <Nav.Link eventKey="link-1" href="/line-chart">Line Chart</Nav.Link>
      <Nav.Link eventKey="link-2" href="/pie-chart">Pie Chart</Nav.Link>
    </Nav>
  );
}

export default Sidebar;