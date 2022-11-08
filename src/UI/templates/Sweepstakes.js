import React, { useState } from 'react';
import '../../sweepstakes.scss';
import Translations from '../../modules/translations';
import timer from "../../modules/timer";
import { validateEmail, validatePhone, subscribeBluecoreRegistration, submitsToSmsBump } from '../../modules/Utils';
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
        setIsValidPhone(validatePhone(e.target.value));
        console.log('phonecode', e.target.value, validatePhone(e.target.value));
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
            <div className='sweepstakes__wrapper d-flex align-items-lg-center'>
                <div id="waitlist-page" class="container px-0" data-page-type="Sweepstakes" data-form-id="#sweepstakes__form" data-email-form="#sweepstakes__email">
                    <div class="row m-0 align-items-center justify-content-end">
                        <div class="px-g col-lg-5 order-lg-1 my-lg-4 mt-n5">
                            {emailSubmitted || phoneSubmitted ? (
                                <>
                                <div class="sweepstakes__thank-you px-2 px-lg-4 py-3 bg-white text-center rounded"> 
                                    <h2 class="h1 ">{t.sweepstakes.ty_heading}</h2>
                                    <p>{t.sweepstakes.ty_subHeading}</p>
                                </div>
                                <p class="font-size-xs text-gray-600 my-2 mb-lg-0 text-white" dangerouslySetInnerHTML={{ __html: t.sweepstakes.ty_note }}></p>
                                </>
                            ) : (
                                <form class="sweepstakes__form px-2 px-lg-4 py-3 bg-white text-center rounded"  onSubmit={submitForm} id="sweepstakes-popup__form" reg-source="sweepstakes-popup" data-page="sweeptakes">
                                    <h1 class="">{t.sweepstakes.heading}</h1>
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
                                        <button disabled={!isValidEmail && !isValidPhone} id="sweepstakes__submit" type="submit" class={activeLang === 'fr' || activeLang === 'de' ? 'btn btn-lg btn-primary btn-block text-white px-2':'btn btn-lg btn-primary btn-block text-white'}>{t.sweepstakes.submit}</button>
                                    </div>
                                </form>
                            )}
                            <div className='social-icon d-flex justify-content-center mt-4'>
                                <a class="mx-1" href="https://www.facebook.com/cocoandeve" target="_blank">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.3047 0H2.69532C1.20645 0 0 1.20645 0 2.69532V17.3047C0 18.7936 1.20645 20 2.69532 20H9.90023L9.91251 12.8526H8.05602C7.81504 12.8526 7.61857 12.6577 7.6178 12.4167L7.60936 10.1128C7.60783 9.8703 7.80429 9.67307 8.04681 9.67307H9.90023V7.44667C9.90023 4.86417 11.4781 3.45741 13.7828 3.45741H15.6738C15.9156 3.45741 16.1113 3.65311 16.1113 3.89563V5.83807C16.1113 6.07982 15.9156 6.27552 15.6738 6.27629H14.5134C13.2602 6.27629 13.0176 6.87184 13.0176 7.74598V9.67307H15.7713C16.0338 9.67307 16.2372 9.90254 16.2064 10.1627L15.9332 12.4666C15.9071 12.6869 15.7199 12.8526 15.4981 12.8526H13.0299L13.0176 20H17.3047C18.7928 20 20 18.7936 20 17.3047V2.69532C20 1.20645 18.7928 0 17.3047 0" fill="white"/></svg>
                                </a>
                                <a class="mx-1" href="https://www.instagram.com/cocoandeve/" target="_blank">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.877 19.9395C4.9104 19.8954 4.1616 19.7523 3.4497 19.4751C2.7513 19.2042 2.205 18.8478 1.6785 18.3213C1.152 17.7957 0.7965 17.2494 0.5247 16.5501C0.2475 15.8364 0.1044 15.0876 0.0603 14.1228C0.0117 13.0518 0 12.6972 0 9.9999C0 7.3026 0.0117 6.948 0.0603 5.877C0.1044 4.914 0.2475 4.1652 0.5247 3.4497C0.7956 2.7513 1.152 2.205 1.6785 1.6785C2.205 1.152 2.7513 0.7956 3.4497 0.5247C4.1652 0.2475 4.914 0.1044 5.877 0.0603C6.948 0.0117 7.3026 0 9.9999 0C12.6972 0 13.0518 0.0117 14.1228 0.0603C15.0876 0.1044 15.8364 0.2475 16.5501 0.5247C17.2494 0.7965 17.7957 1.152 18.3213 1.6785C18.8478 2.205 19.2042 2.7513 19.4751 3.4497C19.7523 4.1616 19.8954 4.9104 19.9395 5.877C19.9881 6.948 19.9998 7.3026 19.9998 9.9999C19.9998 12.6972 19.9881 13.0518 19.9395 14.1228C19.8954 15.0903 19.7523 15.8391 19.4751 16.5501C19.2033 17.2494 18.8478 17.7957 18.3213 18.3213C17.7957 18.8478 17.2494 19.2033 16.5501 19.4751C15.8391 19.7523 15.0903 19.8954 14.1228 19.9395C13.0518 19.9881 12.6972 19.9998 9.9999 19.9998C7.3026 19.9998 6.948 19.9881 5.877 19.9395ZM5.9589 1.8603C4.9851 1.9044 4.455 2.0673 4.1022 2.2041C3.6351 2.3859 3.3021 2.6028 2.952 2.9529C2.6028 3.3021 2.3859 3.6351 2.2041 4.1022C2.0673 4.455 1.9044 4.9851 1.8603 5.9589C1.8117 7.0065 1.8018 7.3215 1.8018 9.9999C1.8018 12.6783 1.8117 12.9933 1.8603 14.0409C1.9044 15.0165 2.0673 15.5457 2.2041 15.8976C2.3859 16.3638 2.6019 16.6968 2.952 17.0478C3.3012 17.397 3.6342 17.6139 4.1022 17.7957C4.455 17.9325 4.9851 18.0954 5.9589 18.1395C7.0065 18.1881 7.3215 18.198 9.9999 18.198C12.6783 18.198 12.9933 18.1881 14.0409 18.1395C15.0165 18.0954 15.5457 17.9325 15.8976 17.7957C16.3656 17.6139 16.6986 17.397 17.0478 17.0478C17.3979 16.6968 17.6139 16.3638 17.7957 15.8976C17.9325 15.5457 18.0954 15.0165 18.1395 14.0409C18.1881 12.9933 18.198 12.6783 18.198 9.9999C18.198 7.3215 18.1881 7.0065 18.1395 5.9589C18.0954 4.9851 17.9325 4.455 17.7957 4.1022C17.6139 3.636 17.3979 3.303 17.0478 2.952C16.6968 2.6019 16.3638 2.3859 15.8976 2.2041C15.5457 2.0673 15.0165 1.9044 14.0409 1.8603C12.9933 1.8117 12.6783 1.8018 9.9999 1.8018C7.3215 1.8018 7.0065 1.8117 5.9589 1.8603ZM4.8645 9.9999C4.8645 7.1685 7.1685 4.8645 9.9999 4.8645C12.8313 4.8645 15.1344 7.1685 15.1344 9.9999C15.1344 12.8313 12.8313 15.1344 9.9999 15.1344C7.1685 15.1344 4.8645 12.8313 4.8645 9.9999ZM6.6663 9.9999C6.6663 11.8377 8.1621 13.3326 9.9999 13.3326C11.8377 13.3326 13.3326 11.8377 13.3326 9.9999C13.3326 8.1621 11.8377 6.6663 9.9999 6.6663C8.1621 6.6663 6.6663 8.1621 6.6663 9.9999ZM14.1381 4.662C14.1381 3.9996 14.6754 3.4623 15.3378 3.4623C16.0011 3.4623 16.5384 3.9996 16.5384 4.662C16.5384 5.3244 16.0011 5.8617 15.3378 5.8617C14.6754 5.8617 14.1381 5.3244 14.1381 4.662Z" fill="white"/></svg>
                                </a>
                                <a className='mx-1' href="https://www.tiktok.com/@coco_and_eve" target="_blank">
                                    <svg width="71" height="20" viewBox="0 0 71 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.4382 5.54052V8.21257C17.4382 8.21257 16.2249 8.16297 15.3263 7.92457C14.0722 7.59113 13.2661 7.08015 13.2661 7.08015C13.2661 7.08015 12.7093 6.71504 12.6643 6.68961V13.7338C12.6643 14.126 12.5613 15.1055 12.2475 15.9224C11.8378 16.9914 11.2055 17.6929 11.0892 17.8359C11.0892 17.8359 10.3202 18.7845 8.96357 19.423C7.74112 19.999 6.66747 19.9844 6.34612 19.999C6.34612 19.999 4.49056 20.0757 2.82006 18.9429L2.81173 18.937C2.63546 18.7588 2.46945 18.5706 2.3145 18.3735C1.78142 17.695 1.45466 16.8935 1.37255 16.6647C1.3723 16.6637 1.3723 16.6627 1.37255 16.6618C1.24001 16.2637 0.962425 15.3093 1.00035 14.3844C1.06746 12.7523 1.61762 11.7511 1.76308 11.4998C2.14849 10.8157 2.64969 10.2037 3.24436 9.69093C3.76882 9.24805 4.36356 8.89588 5.00405 8.64895C5.40343 8.48299 5.81958 8.36071 6.24526 8.28426C6.55661 8.2286 6.87182 8.19724 7.18804 8.19048V10.8942C7.18804 10.8942 5.81513 10.4382 4.71605 11.2443C3.9479 11.8395 3.54028 12.4201 3.42024 13.4566C3.41524 14.2202 3.60238 15.2997 4.62894 16.0203C4.74842 16.0995 4.86595 16.1698 4.98154 16.2312C5.16102 16.4736 5.37913 16.6848 5.62716 16.8564C6.62996 17.5187 7.47021 17.565 8.54469 17.1348C9.26199 16.851 9.79924 16.2029 10.0539 15.4843C10.211 15.0359 10.2089 14.5841 10.2089 14.1177V0.839111H12.7097C12.8131 1.45221 13.099 2.32497 13.855 3.1894C14.1583 3.51579 14.4999 3.80435 14.8724 4.04882C14.9825 4.16761 15.5451 4.75445 16.2674 5.11539C16.64 5.30164 17.0329 5.44429 17.4382 5.54052Z" fill="white"/>
                                        <path d="M0.377319 15.834V15.8365L0.439004 16.012C0.432336 15.9915 0.408995 15.9294 0.377319 15.834Z" fill="#69C9D0"/>
                                        <path d="M5.00409 8.64878C4.3636 8.89571 3.76885 9.24788 3.24439 9.69076C2.64968 10.2047 2.14875 10.818 1.76395 11.5034C1.61849 11.7535 1.06832 12.7558 1.00122 14.388C0.963293 15.3129 1.24088 16.2673 1.37342 16.6654C1.37317 16.6663 1.37317 16.6673 1.37342 16.6683C1.45677 16.895 1.78229 17.6965 2.31536 18.3771C2.47032 18.5742 2.63633 18.7623 2.8126 18.9406C2.24751 18.5498 1.74354 18.0773 1.31715 17.5385C0.788657 16.8662 0.462726 16.0727 0.377701 15.8384L0.375616 15.8334V15.8301C0.243077 15.4333 -0.0353396 14.478 0.003422 13.5519C0.0705254 11.9198 0.62069 10.9186 0.766151 10.6673C1.15084 9.98186 1.65178 9.36851 2.24659 8.85468C2.77094 8.41164 3.36572 8.05946 4.00629 7.8127C4.40566 7.64674 4.82182 7.52446 5.24749 7.44801C5.8889 7.33582 6.54404 7.32611 7.18849 7.41925V8.19031C6.87235 8.19611 6.55714 8.22649 6.24571 8.28117C5.81978 8.35854 5.40348 8.48179 5.00409 8.64878Z" fill="#69C9D0"/>
                                        <path d="M12.7093 0.839001H10.2086V14.1184C10.2086 14.5848 10.2106 15.0353 10.0535 15.4851C9.80094 16.2028 9.26369 16.8509 8.54765 17.1385C7.47274 17.5703 6.63249 17.5223 5.63011 16.8601C5.38209 16.6885 5.16397 16.4772 4.9845 16.2349C5.8385 16.6904 6.6029 16.6825 7.54985 16.3024C8.26173 16.0127 8.80356 15.3646 9.05363 14.6465C9.21118 14.198 9.2091 13.7462 9.2091 13.2802V0H12.6622C12.6622 0 12.623 0.330515 12.7093 0.839001ZM17.4382 4.80186V5.54041C17.0328 5.44421 16.6398 5.30156 16.267 5.11528C15.5447 4.75434 14.9821 4.1675 14.872 4.04871C14.9996 4.13256 15.1321 4.20869 15.2688 4.2767C16.147 4.71516 17.0098 4.84645 17.4382 4.80186Z" fill="#69C9D0"/>
                                        <path d="M54.3888 11.7268C54.3888 11.9167 54.4168 12.1057 54.4722 12.2874C54.4753 12.3002 54.4792 12.3129 54.4839 12.3253C54.6173 12.7551 54.8847 13.131 55.2471 13.3979C55.6095 13.6648 56.0477 13.8088 56.4978 13.8087V15.9426C55.4596 15.9426 54.7156 15.9789 53.584 15.3095C52.292 14.546 51.5659 13.1497 51.5659 11.6997C51.5659 10.2051 52.3778 8.70671 53.7545 7.98525C54.7523 7.46176 55.5117 7.45801 56.4978 7.45801V9.59073C55.9385 9.59084 55.4022 9.81307 55.0067 10.2086C54.6112 10.604 54.389 11.1404 54.3888 11.6997V11.7268Z" fill="#69C9D0"/>
                                        <path d="M58.623 11.7268C58.6233 11.9168 58.5952 12.1057 58.5396 12.2874C58.5367 12.3003 58.5328 12.313 58.528 12.3253C58.3947 12.7552 58.1273 13.1312 57.7649 13.3981C57.4025 13.665 56.9641 13.8089 56.514 13.8087V15.9426C57.5527 15.9426 58.2962 15.9789 59.4278 15.3095C60.7199 14.546 61.4464 13.1497 61.4464 11.6997C61.4464 10.2051 60.634 8.70671 59.2578 7.98525C58.26 7.46176 57.5002 7.45801 56.514 7.45801V9.59073C57.0734 9.59073 57.6099 9.81291 58.0055 10.2084C58.401 10.6039 58.6233 11.1403 58.6234 11.6997L58.623 11.7268Z" fill="#EE1D52"/>
                                        <path d="M23.8523 5.52295H31.6634L30.9415 7.67234H28.8992V15.8973H26.3831V7.67234H23.8523V5.52295ZM44.5543 5.52295V7.67234H47.0851V15.8973H49.5996V7.67234H51.6419L52.3654 5.52295H44.5543ZM33.3626 7.97243C33.6033 7.97243 33.8385 7.90108 34.0386 7.7674C34.2386 7.63371 34.3946 7.4437 34.4866 7.2214C34.5787 6.99909 34.6028 6.75447 34.5559 6.51847C34.5089 6.28247 34.3931 6.06569 34.2229 5.89554C34.0528 5.7254 33.836 5.60952 33.6 5.56258C33.364 5.51564 33.1194 5.53973 32.8971 5.63181C32.6748 5.7239 32.4847 5.87983 32.3511 6.0799C32.2174 6.27998 32.146 6.51519 32.146 6.75582C32.146 7.07848 32.2742 7.38794 32.5024 7.6161C32.7305 7.84425 33.04 7.97243 33.3626 7.97243ZM32.1439 15.8973H34.6101V8.83227H32.1439V15.8973ZM43.4807 7.91158H40.5973L38.112 10.3994V5.53087H35.6625L35.6542 15.8973H38.1282V13.1961L38.8989 12.4988L41.2996 15.8973H43.9441L40.4664 10.9271L43.4807 7.91158ZM67.1353 10.9271L70.1507 7.91158H67.2674L64.782 10.3994V5.53087H62.3321L62.3242 15.8973H64.7983V13.1961L65.5706 12.4988L67.9718 15.8973H70.6138L67.1353 10.9271ZM60.7959 11.6998C60.7959 14.0426 58.8711 15.9419 56.4967 15.9419C54.1222 15.9419 52.1979 14.0426 52.1979 11.6998C52.1979 9.35701 54.1226 7.4577 56.4967 7.4577C58.8707 7.4577 60.7967 9.35743 60.7967 11.6998H60.7959ZM58.6056 11.6998C58.6056 11.2827 58.4819 10.8749 58.2502 10.5281C58.0185 10.1813 57.6891 9.91099 57.3037 9.75137C56.9184 9.59175 56.4943 9.54998 56.0852 9.63136C55.6761 9.71273 55.3003 9.91359 55.0054 10.2085C54.7104 10.5035 54.5096 10.8793 54.4282 11.2884C54.3468 11.6975 54.3886 12.1215 54.5482 12.5069C54.7078 12.8922 54.9782 13.2216 55.325 13.4533C55.6718 13.6851 56.0795 13.8088 56.4967 13.8088C56.7737 13.8089 57.048 13.7545 57.304 13.6486C57.56 13.5427 57.7926 13.3873 57.9886 13.1915C58.1845 12.9956 58.3399 12.7631 58.4459 12.5071C58.552 12.2512 58.6065 11.9768 58.6064 11.6998H58.6056Z" fill="white"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Sweepstakes