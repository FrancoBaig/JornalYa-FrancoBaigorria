import PropTypes from 'prop-types';
import './documents.css';
import { FaArrowLeft, FaSearch } from 'react-icons/fa';
import formatDate from '../../helper/formatDate';

function TablePanel() {
  return (
    <div className="documents__panel">
      <div className="panel__back">
        <FaArrowLeft fontSize="1.8rem" color="#4450b1" />
        <p className="panel__text">Mi Panel</p>
        <span className="panel__text">/</span>
        <p className="panel__text panel__text--bold">Firmar Documentos</p>
      </div>
      <form className="panel__form">
        <input type="text" placeholder="Nombre" />
        <button type="submit" className="btn btn--primary">
          Buscar
        </button>
      </form>
    </div>
  );
}
function Documents({ data, loading, error }) {
  return (
    <div className="documents-wrapper">
      {loading && <h2>loading...</h2>}
      {!loading && error && (
        <h2>hubo un error, por favor, inténtalo más tarde</h2>
      )}
      {!loading && !error && data && (
        <div className="outer-wrapper">
          <TablePanel />
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Colaborador</th>
                  <th>Cuil</th>
                  <th>Nombre Documento</th>
                  <th>Periodo</th>
                  <th>Fecha Creación</th>
                  <th>Fecha Asignación</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((el) => (
                  <tr key={el.id}>
                    <td>{el.attributes.ownerFullName}</td>
                    <td>{el.attributes.ownerCuil}</td>
                    <td>{el.attributes.name}</td>
                    <td>{el.attributes.period}</td>
                    <td>{formatDate(el.attributes.creationDate)}</td>
                    <td>{formatDate(el.attributes.assignmentDate)}</td>
                    <td>
                      <FaSearch size="1.3rem" color="#828282" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

Documents.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      attributes: PropTypes.shape({
        assignmentDate: PropTypes.string,
        creationDate: PropTypes.string,
        currentStep: PropTypes.number,
        description: PropTypes.string,
        documentState: PropTypes.string,
        externalReference: PropTypes.bool,
        name: PropTypes.string,
        ownerCuil: PropTypes.string,
        ownerFullName: PropTypes.string,
        processId: PropTypes.string,
        roleId: PropTypes.string,
        totalSteps: PropTypes.number,
        visibleInView: PropTypes.bool,
        period: PropTypes.string,
      }),
    })
  ),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

Documents.defaultProps = {
  data: undefined,
  error: '',
};

export default Documents;
