import styles from './page.module.scss';
import { Common } from '@lopi-2/common';

import SignInForm from './components/Auth/SignInForm/SignInForm';
import SignUpForm from './components/Auth/SignUpForm/SignUpForm';

const Index = async () => {
  return (
    <>
      <div className={styles.page}>
        <span>Hello World Shop: LOPI-2</span>
        <Common />

        <SignInForm />
        <SignUpForm />
      </div>
    </>
  );
};
export default Index;
