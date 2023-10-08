import 'scss/main.scss'
import RouteComponent from "components/layouts/RouteComponent";
import AdminRoutes from "configs/routes/admin.route";
import UserRoutes from "configs/routes/user.route";
import { Suspense } from "react";
import { Route, Routes } from "react-router";
import Container from 'components/layouts/container';
import Header from 'components/layouts/headers/header';
import Footer from 'components/layouts/footer';

function App() {

  const isAdmin = true

  return (
    <>
      <Container>
        <Header />
      </Container>
      <div className='main'>
        <Container>
          <Suspense fallback={<></>}>
            <Routes>
              {
                isAdmin ?
                  AdminRoutes.map(route => {
                    return <Route path={route.path} key={route.key} element={<RouteComponent component={route.component} />} />
                  })
                  : UserRoutes.map(route => {
                    return <Route path={route.path} key={route.key} element={<RouteComponent component={route.component} />} />
                  })
              }
              <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
          </Suspense >
        </Container>
      </div>
      <Container>
        <Footer />
      </Container>
    </>
  );
}

export default App;
