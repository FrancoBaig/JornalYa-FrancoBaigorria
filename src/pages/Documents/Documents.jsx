import PropTypes from 'prop-types';
import './documents.css';
import formatDate from '../../helper/formatDate';

function Table({ data }) {
  return (
    <div className="outer-wrapper">
      <div className="table-wrapper">
        <table>
          <thead>
            <th>Colaborador</th>
            <th>Cuil</th>
            <th>Nombre Documento</th>
            <th>Periodo</th>
            <th>Fecha Creación</th>
            <th>Fecha Asignación</th>
            <th>Acciones</th>
          </thead>
          <tbody>
            {data.map((el) => (
              <tr key={el.id}>
                <td>{el.attributes.ownerFullName}</td>
                <td>{el.attributes.ownerCuil}</td>
                <td>{el.attributes.name}</td>
                <td>{el.attributes.period}</td>
                <td>{formatDate(el.attributes.creationDate)}</td>
                <td>{formatDate(el.attributes.assignmentDate)}</td>
                <td>lupa</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Documents({ data }) {
  return <Table data={data} />;
}

Documents.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      attributes: {
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
      },
    })
  ).isRequired,
};

Table.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      attributes: {
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
      },
    })
  ).isRequired,
};

export default Documents;
