import React, { useState } from 'react';
import '../../sweepstakes.scss';
import Translations from '../../modules/translations';
import timer from "../../modules/timer";
import { validateEmail, subscribeBluecoreRegistration, submitsToSmsBump } from '../../modules/Utils';
import $ from 'jquery';
import { ReactComponent as Logo } from '../../assets/ce-logo-white.svg';

const smsbumpIds = {
    us: { id: '137103', code: '1', letter: 'US' },
    ca: { id: '137104', code: '1', letter: 'CA' },
    au: { id: '137109', code: '61', letter: 'AU' },
    uk: { id: '137106', code: '44', letter: 'UK' },
    my: { id: '137115', code: '60', letter: 'MY' },
    int: { id: '137108', code: '65', letter: 'INT' },
    eu: { id: '137107', code: '49', letter: 'FR' },
    de: { id: '137112', code: '33', letter: 'DE' },
    fr: { id: '137114', code: '49', letter: 'FR' },
};

const Sweepstakes = () => {
    let params = (new URL(document.location)).searchParams;
	let lang = params.get("utm_store") || 'us';
    const activeLang = (['us', 'ca', 'au', 'uk', 'int', 'my', 'eu', 'de', 'fr'].indexOf(lang) !== -1) ? lang : 'us';
    const t =  Translations[activeLang];
    console.log('store active:', activeLang);

    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState(null);
    const [letterCode, setLetterCode] = useState(smsbumpIds[activeLang].letter);
    const [numberCode, setNumberCode] = useState(smsbumpIds[activeLang].code);
    const [smsBumpId, setSmsBumpId] = useState(smsbumpIds[activeLang].id);
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isValidPhone, setIsValidPhone] = useState(false);
    const [country, setCountry] = useState('');
    const [phoneSubmitted, setPhoneSubmitted] = useState(false);
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const onEmailChange = (e) => {
        setIsValidEmail(validateEmail(e.target.value));
        setEmail(e.target.value);
    };

    const onCodeChange = (e) => {
        const phoneCode = $(e.target).find(`option[value='${e.target.value}']`).data('code');
        setNumberCode(phoneCode);
        setLetterCode(e.target.value);
        
    };

    const onPhoneChange = (e) => {
        setPhone(e.target.value);
        setIsValidPhone(true);
        console.log('phonecode', e.target.value);
    };

    const submitForm = (e) => {
        e.preventDefault();
        let emailSubmitted, phoneSubmitted = false;
        if (isValidEmail || isValidPhone) {
            if (isValidEmail) {
                subscribeBluecoreRegistration(email, phone, country, 'blackfriday').done((response) => {
                    console.log('email/phone submitted', response);
                    setEmailSubmitted(true);
                });
            }

            if (isValidPhone) {
                submitsToSmsBump(phone, smsBumpId, letterCode).done((response) => {
                    console.log('phone submitted', response);
                    setPhoneSubmitted(true);
                })
            }
        }
    }

    timer(activeLang);

    $.get('https://api.cocoandeve.com/geo', function(resp) {
        setCountry(resp.country_name);
    })

    return (
        <div className='sweepstakes'>
            <div class="announcement-bar announcement-bar__timer w-100 py-1">
                <a href="https://www.cocoandeve.com/collections/all" class="text-decoration-none">
                    <div class="container text-center text-white d-flex align-items-center justify-content-between justify-content-lg-center">
                        <span class="announcement-bar__timer__title d-block d-lg-inline me-lg-4 h2 mb-0 font-weight-normal">{t.sweepstakes.timerLabel}</span>
                        <ul class="list-inline mb-0 font-weight-bold d-none">
                            <li id="timerDays" class="list-inline-item position-relative me-2 h2 mb-0 font-weight-normal"></li>
                            <li id="timerHrs" class="list-inline-item position-relative me-2 h2 mb-0 font-weight-normal"></li>
                            <li id="timerMin" class="list-inline-item position-relative me-2 h2 mb-0 font-weight-normal"></li>
                            <li id="timerSec" class="list-inline-item position-relative me-0 h2 mb-0 font-weight-normal"></li>
                        </ul>
                    </div>
                </a>
            </div>
            <header className="container text-center sweepstakes__logo">
                <nav className='navbar navbar-expand-lg p-1'>
                    <a className='navbar-brand mx-auto text-secondary p-0' href='https://www.cocoandeve.com'>
                    <span className='visually-hidden-focusable'>Coco &amp; Eve</span>
                    <Logo />
                    </a>
                </nav>
            </header>
            <div className='sweepstakes__wrapper d-flex align-items-center'>
                <div id="waitlist-page" class="container px-0" data-page-type="Sweepstakes" data-form-id="#sweepstakes__form" data-email-form="#sweepstakes__email">
                    <div class="row m-0 align-items-center justify-content-end">
                        <div class="px-g col-lg-5 order-lg-1 my-lg-4 mt-n5">
                            {emailSubmitted || phoneSubmitted ? (
                                <div class="sweepstakes__thank-you px-4 py-3 bg-white text-center rounded">
                                    <h2 class="h1 text-secondary">{t.sweepstakes.ty_heading}</h2>
                                    <p>{t.sweepstakes.ty_subHeading}</p>
                                    <a href="https://www.cocoandeve.com" class="btn btn-lg btn-primary btn-block">Shop Coco &amp; Eve</a>
                                </div>
                            ) : (
                                <form id="sweepstakes__form" class="sweepstakes__form px-4 py-3 bg-white text-center rounded"  onSubmit={submitForm}>
                                    <h1 class="text-secondary">{t.sweepstakes.heading}</h1>
                                    <p>{t.sweepstakes.subHeading}</p>
                                    
                                    <input type="email" className="form-control bg-light-gray border-0" placeholder={t.sweepstakes.emailPh} onChange={onEmailChange}/>
                                    
                                    <div class="mt-1 input-group form-group font-size-sm justify-content-center mb-1">- or -</div>
                                    <div class="input-group form-group mb-2">
                                        { activeLang === 'us' && (
                                            <label for="sweepstakes__country" class="input-group-addon form-control">
                                                <span class="position-absolute sweepstakes__country-label align-items-center">+{numberCode} <svg role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.6 22.6" class="svg"><path d="M1.9 5.4l9.4 9.4 9.4-9.4 1.9 1.9-11.3 11.3L0 7.3l1.9-1.9z"></path></svg></span>
                                                <select id="sweepstakes__country" class="custom-select" onChange={onCodeChange}>
                                                    <option value="" disabled="">Select Country</option>
                                                    <option value="US" data-code="1" selected={letterCode === 'us'}>United States</option>
                                                </select>
                                            </label>
                                        )}
                                        { activeLang === 'ca' && (
                                            <label for="sweepstakes__country" class="input-group-addon form-control">
                                                <span class="position-absolute sweepstakes__country-label align-items-center">+{numberCode} <svg role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.6 22.6" class="svg"><path d="M1.9 5.4l9.4 9.4 9.4-9.4 1.9 1.9-11.3 11.3L0 7.3l1.9-1.9z"></path></svg></span>
                                                <select id="sweepstakes__country" class="custom-select" onChange={onCodeChange}>
                                                    <option value="" disabled="">Select Country</option>
                                                    <option value="CA" data-code="1">Canada</option>
                                                </select>
                                            </label>
                                        )}
                                        { (activeLang === 'de' || activeLang === 'fr' || activeLang === 'eu') && (
                                            <label for="sweepstakes__country" class="input-group-addon form-control">
                                                <span class="position-absolute sweepstakes__country-label align-items-center">+{numberCode} <svg role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.6 22.6" class="svg"><path d="M1.9 5.4l9.4 9.4 9.4-9.4 1.9 1.9-11.3 11.3L0 7.3l1.9-1.9z"></path></svg></span>
                                                <select id="sweepstakes__country" class="custom-select" onChange={onCodeChange}>
                                                    <option value="AT" data-code="43">Austria</option>
                                                    <option value="BE" data-code="32">Belgium</option>
                                                    <option value="BG" data-code="359">Bulgaria</option>
                                                    <option value="HR" data-code="385">Croatia</option>
                                                    <option value="CZ" data-code="420">Czechia</option>
                                                    <option value="DK" data-code="45">Denmark</option>
                                                    <option value="EE" data-code="372">Estonia</option>
                                                    <option value="FI" data-code="358">Finland</option>
                                                    <option value="FR" data-code="33" selected={activeLang === 'fr' || activeLang === 'eu'}>France</option>
                                                    <option value="DE" data-code="49" selected={activeLang === 'de'}>Germany</option>
                                                    <option value="GR" data-code="30">Greece</option>
                                                    <option value="HU" data-code="36">Hungary</option>
                                                    <option value="IE" data-code="353">Ireland</option>
                                                    <option value="IT" data-code="39">Italy</option>
                                                    <option value="LV" data-code="371">Latvia</option>
                                                    <option value="LU" data-code="352">Luxembourg</option>
                                                    <option value="MT" data-code="356">Malta</option>
                                                    <option value="MC" data-code="377">Monaco</option>
                                                    <option value="NL" data-code="31">Netherlands</option>
                                                    <option value="PL" data-code="48">Poland</option>
                                                    <option value="PT" data-code="351">Portugal</option>
                                                    <option value="SK" data-code="421">Slovakia</option>
                                                    <option value="SI" data-code="386">Slovenia</option>
                                                    <option value="ES" data-code="34">Spain</option>
                                                    <option value="SE" data-code="46">Sweden</option>
                                                </select>
                                            </label>
                                        )}
                                        { activeLang === 'au' && (
                                            <label for="sweepstakes__country" class="input-group-addon form-control">
                                                <span class="position-absolute sweepstakes__country-label align-items-center">+{numberCode} <svg role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.6 22.6" class="svg"><path d="M1.9 5.4l9.4 9.4 9.4-9.4 1.9 1.9-11.3 11.3L0 7.3l1.9-1.9z"></path></svg></span>
                                                <select id="sweepstakes__country" class="custom-select" onChange={onCodeChange}>
                                                    <option value="AU" data-code="61" selected>Australia</option>
                                                    <option value="NZ" data-code="64">New Zealand</option>
                                                </select>
                                            </label>
                                        )}
                                        { activeLang === 'uk' && (
                                            <label for="sweepstakes__country" class="input-group-addon form-control">
                                                <span class="position-absolute sweepstakes__country-label align-items-center">+{numberCode} <svg role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.6 22.6" class="svg"><path d="M1.9 5.4l9.4 9.4 9.4-9.4 1.9 1.9-11.3 11.3L0 7.3l1.9-1.9z"></path></svg></span>
                                                <select id="sweepstakes__country" class="custom-select" onChange={onCodeChange}>
                                                    <option value="NO" data-code="47">Norway</option>
                                                    <option value="CH" data-code="41">Switzerland</option>
                                                    <option value="AE" data-code="971">United Arab Emirates&nbsp;&nbsp;</option>
                                                    <option value="GB" data-code="44" selected>United Kingdom</option>
                                                </select>
                                            </label>
                                        )}
                                        { (activeLang === 'int' || activeLang === 'my') && (
                                            <label for="sweepstakes__country" class="input-group-addon form-control">
                                                <span class="position-absolute sweepstakes__country-label align-items-center">+{numberCode} <svg role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.6 22.6" class="svg"><path d="M1.9 5.4l9.4 9.4 9.4-9.4 1.9 1.9-11.3 11.3L0 7.3l1.9-1.9z"></path></svg></span>
                                                <select id="sweepstakes__country" class="custom-select" onChange={onCodeChange}>
                                                    <option value="HK" data-code="852">Hong Kong SAR&nbsp;&nbsp;</option>
                                                    <option value="MO" data-code="853">Macao SAR</option>
                                                    <option value="MY" data-code="60" selected={activeLang === 'my'}>Malaysia</option>
                                                    <option value="PH" data-code="63">Philippines</option>
                                                    <option value="SG" data-code="65" selected={activeLang === 'int'}>Singapore</option>
                                                </select>
                                            </label>
                                        )}
                                        <input id="sweepstakes__phone" class="sweepstakes__phone form-control bg-light-gray border-0" type="phone" placeholder={t.sweepstakes.phonePh} onChange={onPhoneChange} />
                                        <div class="d-none input-error phone-error font-size-xs text-primary mb-2">Please enter a valid phone number</div>
                                    </div>

                                    <div class="d-none input-error toc-error font-size-xs text-primary mb-2">You have not agreed to the Privacy Policy &amp; ToS</div>
                                    <p class="font-size-xs" dangerouslySetInnerHTML={{ __html: t.sweepstakes.toc }}></p>
                                    
                                    <div class="form-group">
                                        <button id="sweepstakes__submit" type="submit" class="btn btn-lg btn-primary btn-block text-white">{t.sweepstakes.submit}</button>
                                    </div>
                                </form>
                            )}
                            <p class="font-size-xs text-gray-600 my-2 mb-lg-0 text-white" dangerouslySetInnerHTML={{ __html: t.sweepstakes.ty_note }}></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Sweepstakes