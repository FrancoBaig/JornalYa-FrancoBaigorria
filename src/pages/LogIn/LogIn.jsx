import PropTypes from 'prop-types';
import Logo from '../../components/Logo/Logo';
import './login.css';

function LogIn({ handleSubmit }) {
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
          required
        />
        <input
          className="form__input"
          type="password"
          placeholder="Ingresá tu contraseña"
          required
        />
        <button className="form__button" type="submit">
          Ingresar
        </button>
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
};

export default LogIn;
