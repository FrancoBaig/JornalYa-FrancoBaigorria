import PropTypes from 'prop-types';
import Logo from '../../components/Logo/Logo';
import './login.css';

function LogIn({
  handleSubmit,
  userName,
  setUserName,
  password,
  setPassword,
  error,
}) {
  return (
    <div className="container--log-in">
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <Logo className="form__image" />
        <p className="form__text">
          ¡Hola! Ingresa los datos de tu cuenta para continuar
        </p>
        <p className="form__text">Usuario</p>
        <input
          className="form__input"
          type="text"
          placeholder="Ingresá tu usuario"
          value={userName}
          onChange={({ target }) => setUserName(target.value)}
          required
        />
        <input
          className="form__input"
          type="password"
          placeholder="Ingresá tu contraseña"
          required
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <button className="form__button" type="submit">
          Ingresar
        </button>
        {error && (
          <p className="form__text form__text--error">
            Contraseña y/o usuario inválido
          </p>
        )}
        <p className="form__text form__text--forget-password">
          Olvidé mi contraseña
        </p>
        <div className="form__options">
          <p className="form__options__item">Información comercial</p>
          <p className="form__options__item">¿Necesitás ayuda?</p>
        </div>
      </form>
    </div>
  );
}

LogIn.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.string,
  userName: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setUserName: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
};

LogIn.defaultProps = {
  error: '',
};

export default LogIn;
