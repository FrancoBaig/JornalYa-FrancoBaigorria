import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LogIn from './LogIn';
import useAxiosFunction from '../../hooks/useAxiosFunction';
import axios from '../../apis/login';

function LogInContainer() {
  const [response, error, loading, axiosFetch] = useAxiosFunction();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    axiosFetch({
      axiosInstance: axios,
      method: 'POST',
      url: '/login',
      body: {
        userName,
        password,
      },
    });

    setUserName('');
    setPassword('');
  };

  useEffect(() => {
    if (response.length === 0) return;
    sessionStorage.setItem('token', response.token);
    navigate('/home');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

  return (
    <LogIn
      handleSubmit={handleSubmit}
      error={error}
      userName={userName}
      setUserName={setUserName}
      password={password}
      setPassword={setPassword}
    />
  );
}

export default LogInContainer;
