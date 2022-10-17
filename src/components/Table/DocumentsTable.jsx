import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaArrowLeft, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import formatDate from '../../helper/formatDate';
import './table.css';

function TablePanel({ handleFilter }) {
  const [filter, setFilter] = useState('');
  const navigate = useNavigate();
  return (
    <div className="documents__panel">
      <div className="panel__back">
        <FaArrowLeft
          className="btn-icon"
          fontSize="1.8rem"
          color="#4450b1"
          onClick={() => navigate('/home')}
        />
        <p className="panel__text">Mi Panel</p>
        <span className="panel__text">/</span>
        <p className="panel__text panel__text--bold">Firmar Documentos</p>
      </div>
      <form className="panel__form" onSubmit={(e) => handleFilter(e, filter)}>
        <input
          type="text"
          placeholder="Nombre"
          value={filter}
          onChange={({ target }) => setFilter(target.value)}
        />
        <button type="submit" className="btn btn--primary">
          Buscar
        </button>
      </form>
    </div>
  );
}

function DocumentsTable({ data, handleFilter, handleTableAction }) {
  return (
    <div className="outer-wrapper">
      <TablePanel handleFilter={handleFilter} />
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
                  <FaSearch
                    size="1.3rem"
                    color="#828282"
                    className="btn-icon"
                    onClick={() =>
                      handleTableAction(el.id, el.attributes.ownerFullName)
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

DocumentsTable.propTypes = {
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
  handleFilter: PropTypes.func.isRequired,
  handleTableAction: PropTypes.func.isRequired,
};

DocumentsTable.defaultProps = {
  data: undefined,
};

TablePanel.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default DocumentsTable;
