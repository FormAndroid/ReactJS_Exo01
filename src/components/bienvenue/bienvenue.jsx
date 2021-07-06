import PropTypes from 'prop-types';

import style from './bienvenue.module.css';

const Bienvenue = function (props) {
    const {nom, age} = props;

    return (
        <div className={style.demo}>
            <h1 className={style.title}>Bienvenue {nom} sur l’application React!</h1>
            <p>Vous avez {age} ans!</p>
        </div>
    );
}

Bienvenue.defaultProps = {
    age: 18
};

Bienvenue.propTypes = {
    nom: PropTypes.string.isRequired,
    age: PropTypes.number
}

export default Bienvenue;