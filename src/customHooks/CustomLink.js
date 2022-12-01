import Nav from 'react-bootstrap/Nav';
import { useResolvedPath, useMatch } from 'react-router-dom';

const CustomLink = ({to, children, ...props})=>{
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
      
      <Nav.Link className={ isActive ? 'active': ""}  href={to} {...props}>

        {children}
      </Nav.Link>
    )
  };

export default CustomLink;