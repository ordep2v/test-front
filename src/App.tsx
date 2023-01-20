import {  useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Container from './shared-components/ui/container';
import Footer from './shared-components/ui/footer';
import PageBox from './shared-components/ui/page-box';
import Header from './shared-components/ui/header';
import Login from './modules/login';
import Main from './modules/main';
import { useSelector } from 'react-redux';
import { RootState } from './config/store';

const App: React.FC = () => {
  const [deviceWidth, setDeviceWidth] = useState<number>(0);

  const userSignin = useSelector<RootState | any>(state => state.userSignin);
  const { userInfo }: any = userSignin;

  useEffect(() => {
    if (!userInfo && !window.location.href.includes('/login')) {
      window.location.href = 'http://localhost:3000/login';
    }
    if (userInfo && window.location.href.includes('/login')) {
      window.location.href = 'http://localhost:3000/';
    }

    return () => setDeviceWidth(window.innerWidth);
  }, [deviceWidth, userInfo]);

  return (
    <>
        {userInfo ? (
          <>
            <Header />
            <Container>
              <PageBox>
                <Routes>
                <Route path="/" element={<Main />} />
                </Routes>
              </PageBox>
            </Container>
            <Footer />
          </>
        ) : (
          <Routes>
            <Route path="*" element={<Navigate to="login" />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        )}
    </>
  );
};

export default App;
