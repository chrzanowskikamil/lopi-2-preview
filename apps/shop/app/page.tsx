import styles from './page.module.scss';
import { Common } from '@lopi-2/common';

import NavBar from './components/NavBar/NavBar';
import SignInForm from './components/Auth/SignInForm/SignInForm';
import SignUpForm from './components/Auth/SignUpForm/SignUpForm';
import Footer from './components/Footer/Footer';

const Index = async () => {
  return (
    <>
      <NavBar />
      <div className={styles.page}>
        <span>Hello World Shop: LOPI-2</span>
        <Common />
        <SignInForm />
        <SignUpForm />
      </div>
      <Footer />
    </>
  );
};
export default Index;
