import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
// import Uploader from "../data/Uploader";

const StyledSidebar = styled.aside`
  /* background-color: var(); */
  padding: 3px 2px;
  /* border-right: 1px solid var(--color-grey-100); */
  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
{/* <Uploader /> */}
