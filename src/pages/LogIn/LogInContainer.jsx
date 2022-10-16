import LogIn from './LogIn';

function LogInContainer() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('login');
  };

  return <LogIn handleSubmit={handleSubmit} />;
}

export default LogInContainer;
