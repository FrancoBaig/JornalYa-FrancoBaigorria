import PropTypes from 'prop-types';
import './documents.css';
import Table from '../../components/Table/DocumentsTable';

function Documents({ data, loading, error, handleFilter }) {
  return (
    <div className="documents-wrapper">
      {loading && <h2>loading...</h2>}
      {!loading && error && (
        <h2>hubo un error, por favor, inténtalo más tarde</h2>
      )}
      {!loading && !error && data && (
        <Table data={data} handleFilter={handleFilter} />
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
  handleFilter: PropTypes.func.isRequired,
};

Documents.defaultProps = {
  data: undefined,
  error: '',
};

export default Documents;
