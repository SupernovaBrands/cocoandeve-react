import PropTypes from 'prop-types';
import { toTitleCase, getCookie } from '../../modules/Utils';
import { SurveyContext } from './QuestionBox';
import { useContext, useState } from 'react';

const CountrySelect = (props) => {
    const ctx = useContext(SurveyContext);
    const {
        answers,
        placeholder,
    } = props;

    const defaultSelected = getCookie('answeredQuestion') ? JSON.parse(getCookie('answeredQuestion'))[ctx.currentQuestion] : null;
    const [countryCode, setCountryCode] = useState(defaultSelected);

    const getCountryCode = async () => {
        const geoLocation = await fetch('https://api.cocoandeve.com/geo').then((resp) => {
            return Promise.resolve(resp.json());
        });
        if (!countryCode) {
            setCountryCode(geoLocation.country_code2);
            ctx.answerAction(geoLocation.country_code2);
        }
    }

    const selectItem = (e) => {
        const selected = answers.find((item) => item.code === e.target.value);
        if (selected) {
            setCountryCode(selected.code);
            ctx.answerAction(selected.code);    
        }
    };

    getCountryCode();

    return (
        <select className="form-select form-select-lg" value={countryCode ? countryCode : ''} onChange={selectItem}>
            <option>{placeholder}</option>
            {
                answers.map((item, index) => {
                    return (<option key={index} value={item.code}>{toTitleCase(item.name)}</option>);
                })
            }
        </select>
    )
};

CountrySelect.propTypes = {
    answers: PropTypes.array.isRequired,
    placeholder: PropTypes.string,
};

export default CountrySelect;
