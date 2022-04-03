import Header from "../Header";
import PageRouter from "../Router";

type LayoutProps = {
  children: any;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <PageRouter />
      {children}
    </>
  );
};

export default Layout;
