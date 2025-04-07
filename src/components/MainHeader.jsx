
import PropTypes from 'prop-types';

MainHeader.propTypes = {
  className: PropTypes.string,
};

export default function MainHeader({className}) {
  const classNames = `p-6 rounded-full w-max gap-6 flex items-center h-[3rem] shadow-lg shadow-blue-500 bg-(--primary-color-text) ${className ? className : ""}`;
  return (
    <>
      <div className={classNames}>
        <h1 className="text-2xl drop-shadow-md w-max h-max">Luan Masson</h1>
      </div>
    </>
  );
}
