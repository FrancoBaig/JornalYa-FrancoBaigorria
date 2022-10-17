import PropTypes from 'prop-types';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Logo from '../../components/Logo/Logo';
import './login.css';

function LogIn({
  handleSubmit,
  setUserName,
  setPassword,
  error,
  handleToggleVisibility,
  inputType,
}) {
  const PasswordIcon = inputType === 'password' ? FaEye : FaEyeSlash;
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
          onChange={({ target }) => setUserName(target.value)}
          required
        />
        <div className="form__input__password">
          <input
            className="form__input"
            type={inputType}
            placeholder="Ingresá tu contraseña"
            required
            onChange={({ target }) => setPassword(target.value)}
          />
          <span className="form__input__visibility-icon">
            <PasswordIcon onClick={handleToggleVisibility} />
          </span>
        </div>
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
  setUserName: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  handleToggleVisibility: PropTypes.func.isRequired,
  inputType: PropTypes.string.isRequired,
};

LogIn.defaultProps = {
  error: '',
};

export default LogIn;
