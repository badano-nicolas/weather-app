import React from 'react';
import PropTypes from 'prop-types';

const Header = ({headerName}) => {
    console.log(headerName)


    return (
        <div className='max-w-[800px] w-full mx-auto text-center flex flex-col'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>El tiempo en {headerName}</h1>
        </div>
    )

}

Header.propTypes = {
    message: PropTypes.string
};

Header.defaultProps = {
    message: 'An error occurred',
};

export default Header