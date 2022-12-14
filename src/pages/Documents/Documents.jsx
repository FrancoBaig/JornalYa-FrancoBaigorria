import PropTypes from 'prop-types';
import './documents.css';
import Table from '../../components/Table/DocumentsTable';
import Loader from '../../components/Loader/Loader';

function Documents({ data, loading, error, handleFilter, handleTableAction }) {
  return (
    <div className="documents-wrapper">
      {loading && <Loader />}
      {!loading && error && (
        <h2>hubo un error, por favor, inténtalo más tarde</h2>
      )}
      {!loading && !error && data && (
        <Table
          data={data}
          handleFilter={handleFilter}
          handleTableAction={handleTableAction}
        />
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
