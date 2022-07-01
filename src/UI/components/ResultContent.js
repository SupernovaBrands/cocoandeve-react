import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Translations from '../../modules/translations';

const ResultContent = (props) => {
    const { lang, viewMyResult } = props;
    const t = Translations[lang];

    return (
        <div className="col-12 col-lg-6 mt-4 pt-0 pt-lg-4 text-center">
            <p className="h1">{t.result.title}</p>
            <div className="col-12 col-lg-8 ms-auto me-auto mt-2">
                <span className='h1 px-4 py-1 text-primary rounded p-2 bg-light-gray d-inline-block'>{t.result.code}</span>
                <p className='mt-2'>{t.result.note}</p>
                <button className="mt-2 btn btn-lg btn-primary w-100" onClick={viewMyResult}>{t.btn.view}</button>
            </div>
        </div>
    )
};

ResultContent.propTypes = {
    lang: PropTypes.string.isRequired,
    viewMyResult: PropTypes.func.isRequired,
};

export default ResultContent;