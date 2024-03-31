import './App.css';

import UserProfile from './components/UserProfile';

const USER_DATA = {
  id: 'gfhjk56rjkh6578',
  name: 'say my name',
  avatarURL:
    'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg',
};

function App() {
  return (
    <>
      <UserProfile userData={USER_DATA} />
    </>
  );
}

export default App;
