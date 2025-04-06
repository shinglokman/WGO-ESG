"use client"
import PageBanner from "@/components/PageBanner";
import EnvensLayouts from "@/layouts/EnvensLayouts";
import { useEffect, useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const page = () => {

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [otherOption, setOtherOption] = useState('');
  const [form, setForm] = useState({
    'entry.272234028': '',
    'entry.353530242': '',
    'entry.1891090765': '',
    'entry.1408648040': '',
    'entry.1426208417': '',
    'entry.1784453667': '',
    'entry.1694484754': '',
    'entry.856495849': '',
    'entry.1096684556': '',
    'entry.1383365476': '',
    'entry.1350208563': '',
  })

  const options = [
    { label: "WGO's Social Media (e.g., Facebook, LinkedIn, Instagram)", value: 'entry.1128947227' },
    { label: 'Online Advertisements (e.g., banners, pop-ups)', value: 'entry.1128947227' },
    { label: 'Street Displays (e.g., digital billboards, posters)', value: 'entry.1128947227' },
    { label: 'Sharing from friends or colleagues', value: 'entry.1128947227' },
    { label: 'News or media coverage', value: 'entry.1128947227' },
    { label: 'Email newsletter', value: 'entry.1128947227' },
    { label: 'Others', value: 'other' },
  ];

  const handleSelectChange = (event) => {
    const value = event.target.value;

    if (value === 'other') {
      if (selectedOptions.includes(value)) {
        setSelectedOptions(prev => prev.filter(option => option !== value));
        setOtherOption(''); // Clear the other input if unchecked
      } else {
        setSelectedOptions(prev => [...prev, value]);
      }
    } else {
      setSelectedOptions((prev) => 
        prev.includes(value) 
          ? prev.filter((option) => option !== value) 
          : [...prev, value]
      );
      console.log(selectedOptions)
    }
  };

  const handleOtherChange = (event) => {
    setOtherOption(event.target.value);
  };


  useEffect(() => {
    console.log('Form data updated:', form);
    // Check if all fields are filled
    const allFieldsFilled = Object.values(form).every((value) => value.trim() !== '');
    setIsButtonDisabled(!allFieldsFilled);
  }, [form]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log('Form data updated:', name, ': ', value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registration Successful!');
    // You can also send the data to an API or perform other actions here
  };

/*
  const [seniority, setSeniority] = useState('');
  useEffect(() => {setSeniority(seniority)}, [seniority])
  const ChangeSen = (event) => {
    setSeniority(event.target.value);
  };

  const [country, setCountry] = useState('');
  useEffect(() => {setCountry(country)}, [country])
  const ChangeCount = (event) => {
    setCountry(event.target.value);
  };

  const [dis, setDis] = useState('');
  useEffect(() => {setDis(dis)}, [dis])
  const ChangeDis = (event) => {
    setDis(event.target.value);
  };

  const [org, setOrg] = useState('');
  useEffect(() => {setOrg(org)}, [org])
  const ChangeOrg = (event) => {
    setOrg(event.target.value);
  };
  */

  return (
    <EnvensLayouts>
      <PageBanner pageName={"Registration"} />
      {/*Quick Contact Start*/}
      <section className="quick-contact">
        <div className="container">
          <div className="row">
            {/*Quick Contact Single Start*/}
            <div className="col-xl-6 col-lg-6">
            <a href="#registration-form">
              <div className="quick-contact__single">
                <h4 className="quick-contact__title">Visitor Pass</h4>
                <br/>
                <p className="quick-contact__text">
                  A Visitor Pass gives you access to both days of the event, all content forums including main stage and all areas of the exhibition hall
                </p>
                <div className="quick-contact__contact-list">
                  <p>
                  Hall 5G, Hong Kong Convention and Exhibition Centre (HKCEC), Wan Chai <br/> <br/><span style={{fontSize:'150%'}}>Free of Charge </span> 
                  </p>
                </div>
                <div className="quick-contact__icon">
                  <span className="icon-pin" />
                </div>
              </div>
              </a>
            </div>
            {/*Quick Contact Single End*/}
            {/*Quick Contact Single Start*/}
            <div className="col-xl-6 col-lg-6">
              <div className="quick-contact__single">
                <h4 className="quick-contact__title">Sponsor Enquiry</h4>
                <br/>
                <p className="quick-contact__text">
                  If your organisation is interested in sponsoring our event, please reach out to our team via phone / email:
                </p><br/>
                <div className="quick-contact__contact-list">
                  <p>
                    <a>
                      Phone: +852 6081 5461
                    </a>
                  </p>
                  <p>
                    <a href="mailto:nickauyong@thewgo.org">
                      Email: nickauyong@thewgo.org{" "}
                    </a>
                  </p>
                </div>
                <div className="quick-contact__icon">
                  <span className="icon-email" />
                </div>
              </div>
            </div>
            {/*Quick Contact Single End*/}
          </div>
        </div>
      </section>
      {/*Quick Contact End*/}
      {/*Contact Two Start*/}
      <section className="contact-two" id="registration-form">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="contact-two__right">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                    <p className="section-title__tagline section-title__tagline--two">
                      <span>//</span>
                      Contact With Us
                    </p>
                  </div>
                  <h2 className="section-title__title">
                  <span>Visitor</span> Registration for ESG Xchange 2025
                  </h2>
                  <p className="section-title__tagline section-title__tagline--two">
                  <br/>Welcome to the online registration form for ESG Xchange 2025: ESG for Climate Actions International Summit! <br/><br/>
ESG Xchange 2025 is the most anticipated global ESG event in Hong Kong. This two-day event connects bringing together high-level stakeholders from the United Nations, governments, international leaders, innovators, funders, policymakers and corporates to drive transformative action in sustainability. <br/><br/>
ENTRY IS FREE: Free entry is available for all participants, whether you are from private &amp; public sector corporates, investors, funders, NGOs, policymakers, not-for-profits, and start-ups and innovators, or anyone looking to explore the global latest trend of Sustainability.
                  </p>
                </div>
                <div className="contact-two__form-box">
                  <form
                    className="contact-form-validated contact-two__form"
                    action="https://docs.google.com/forms/d/e/1FAIpQLSdKWygX3RC-P_zrdp5j6r5KE9oSC0cDNfZJWK4Kn5Qo9zaOFg/formResponse"
                    noValidate="novalidate"
                  >
                    <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="contact-two__input-box">
                          <input
                            type="text"
                            name="entry.272234028"
                            placeholder="First Name *"
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="contact-two__input-box">
                          <input
                            type="text"
                            name="entry.353530242"
                            placeholder="Last Name *"
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="contact-two__input-box">
                          <input
                            type="text"
                            name="entry.1891090765"
                            placeholder="Business Email *"
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="contact-two__input-box">
                          <input
                            type="text"
                            name="entry.1408648040"
                            placeholder="Company Name *"
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="contact-two__input-box">
                          <input
                            type="text"
                            name="entry.1426208417"
                            placeholder="Job Title *"
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="col-xl-6 col-lg-6">
                        <div className="contact-two__input-box">
                          <div className="select-box">
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label" style={{color: '#fff', paddingLeft: '20px'}}>Seniority Level *</InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              // value={seniority}
                              value={form['entry.1784453667']}
                              label="Seniority Level"
                              // onChange={ChangeSen}
                              onChange={handleChange}
                              name="entry.1784453667"
                              labelStyle={{ color: '#ff0000' }}
                              sx={{
                                color: "white", 
                                height: '60px',
                                borderRadius: '15px', 
                                fontWeight: '500',
                                fontSize: '16px',
                                backgroundColor: '#ffffff33',
                                '.MuiOutlinedInput-notchedOutline': {
                                  borderColor: 'transparent',
                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                  borderColor: 'transparent',
                                },
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                  borderColor: 'transparent',
                                },
                                '.MuiSvgIcon-root ': {
                                  fill: "white !important",
                                }
                              }}
                            >
                              <MenuItem value="C-level">C-level</MenuItem>
                              <MenuItem value="MD/ GM/ Director">MD/ GM/ Director</MenuItem>
                              <MenuItem value="Business Owner/ Partner">Business Owner/ Partner</MenuItem>
                              <MenuItem value="Consultant">Consultant</MenuItem>
                              <MenuItem value="Head of Department">Head of Department</MenuItem>
                              <MenuItem value="Senior Management">Senior Management</MenuItem>
                              <MenuItem value="Middle Management">Middle Management</MenuItem>
                              <MenuItem value="Non-Manegerial">Non-Manegerial</MenuItem>
                            </Select>
                            </FormControl>
                          </div>
                        </div>
                      </div>

                      <div className="col-xl-6 col-lg-6">
                        <div className="contact-two__input-box">
                          <div className="select-box">
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label" style={{color: '#fff', paddingLeft: '20px'}}>Country *</InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              // value={country}
                              value={form["entry.1694484754"]}
                              label="Country"
                              // onChange={ChangeCount}
                              onChange={handleChange}
                              name="entry.1694484754"
                              labelStyle={{ color: '#ff0000' }}
                              sx={{
                                color: "white", 
                                height: '60px',
                                borderRadius: '15px', 
                                fontWeight: '500',
                                fontSize: '16px',
                                backgroundColor: '#ffffff33',
                                '.MuiOutlinedInput-notchedOutline': {
                                  borderColor: 'transparent',
                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                  borderColor: 'transparent',
                                },
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                  borderColor: 'transparent',
                                },
                                '.MuiSvgIcon-root ': {
                                  fill: "white !important",
                                }
                              }}
                            >
                              <MenuItem value="Afghanistan">Afghanistan</MenuItem>
                              <MenuItem value="Albania">Albania</MenuItem>
                              <MenuItem value="Algeria">Algeria</MenuItem>
                              <MenuItem value="Andorra">Andorra</MenuItem>
                              <MenuItem value="Angola">Angola</MenuItem>
                              <MenuItem value="Antigua and Barbuda">Antigua and Barbuda</MenuItem>
                              <MenuItem value="Argentina">Argentina</MenuItem>
                              <MenuItem value="Armenia">Armenia</MenuItem>
                              <MenuItem value="Australia">Australia</MenuItem>
                              <MenuItem value="Austria">Austria</MenuItem>
                              <MenuItem value="Azerbaijan">Azerbaijan</MenuItem>
                              <MenuItem value="Bahamas">Bahamas</MenuItem>
                              <MenuItem value="Bahrain">Bahrain</MenuItem>
                              <MenuItem value="Bangladesh">Bangladesh</MenuItem>
                              <MenuItem value="Barbados">Barbados</MenuItem>
                              <MenuItem value="Belarus">Belarus</MenuItem>
                              <MenuItem value="Belgium">Belgium</MenuItem>
                              <MenuItem value="Belize">Belize</MenuItem>
                              <MenuItem value="Benin">Benin</MenuItem>
                              <MenuItem value="Bhutan">Bhutan</MenuItem>
                              <MenuItem value="Bolivia">Bolivia</MenuItem>
                              <MenuItem value="Bosnia and Herzegovina">Bosnia and Herzegovina</MenuItem>
                              <MenuItem value="Botswana">Botswana</MenuItem>
                              <MenuItem value="Brazil">Brazil</MenuItem>
                              <MenuItem value="Brunei">Brunei</MenuItem>
                              <MenuItem value="Bulgaria">Bulgaria</MenuItem>
                              <MenuItem value="Burkina Faso">Burkina Faso</MenuItem>
                              <MenuItem value="Burundi">Burundi</MenuItem>
                              <MenuItem value="Cabo Verde">Cabo Verde</MenuItem>
                              <MenuItem value="Cambodia">Cambodia</MenuItem>
                              <MenuItem value="Cameroon">Cameroon</MenuItem>
                              <MenuItem value="Canada">Canada</MenuItem>
                              <MenuItem value="Central African Republic">Central African Republic</MenuItem>
                              <MenuItem value="Chad">Chad</MenuItem>
                              <MenuItem value="Chile">Chile</MenuItem>
                              <MenuItem value="China">China</MenuItem>
                              <MenuItem value="Colombia">Colombia</MenuItem>
                              <MenuItem value="Comoros">Comoros</MenuItem>
                              <MenuItem value="Congo, Democratic Republic of the">Congo, Democratic Republic of the</MenuItem>
                              <MenuItem value="Congo, Republic of the">Congo, Republic of the</MenuItem>
                              <MenuItem value="Costa Rica">Costa Rica</MenuItem>
                              <MenuItem value="Croatia">Croatia</MenuItem>
                              <MenuItem value="Cuba">Cuba</MenuItem>
                              <MenuItem value="Cyprus">Cyprus</MenuItem>
                              <MenuItem value="Czech Republic">Czech Republic</MenuItem>
                              <MenuItem value="Denmark">Denmark</MenuItem>
                              <MenuItem value="Djibouti">Djibouti</MenuItem>
                              <MenuItem value="Dominica">Dominica</MenuItem>
                              <MenuItem value="Dominican Republic">Dominican Republic</MenuItem>
                              <MenuItem value="Ecuador">Ecuador</MenuItem>
                              <MenuItem value="Egypt">Egypt</MenuItem>
                              <MenuItem value="El Salvador">El Salvador</MenuItem>
                              <MenuItem value="Equatorial Guinea">Equatorial Guinea</MenuItem>
                              <MenuItem value="Eritrea">Eritrea</MenuItem>
                              <MenuItem value="Estonia">Estonia</MenuItem>
                              <MenuItem value="Eswatini">Eswatini</MenuItem>
                              <MenuItem value="Ethiopia">Ethiopia</MenuItem>
                              <MenuItem value="Fiji">Fiji</MenuItem>
                              <MenuItem value="Finland">Finland</MenuItem>
                              <MenuItem value="France">France</MenuItem>
                              <MenuItem value="Gabon">Gabon</MenuItem>
                              <MenuItem value="Gambia">Gambia</MenuItem>
                              <MenuItem value="Georgia">Georgia</MenuItem>
                              <MenuItem value="Germany">Germany</MenuItem>
                              <MenuItem value="Ghana">Ghana</MenuItem>
                              <MenuItem value="Greece">Greece</MenuItem>
                              <MenuItem value="Grenada">Grenada</MenuItem>
                              <MenuItem value="Guatemala">Guatemala</MenuItem>
                              <MenuItem value="Guinea">Guinea</MenuItem>
                              <MenuItem value="Guinea-Bissau">Guinea-Bissau</MenuItem>
                              <MenuItem value="Guyana">Guyana</MenuItem>
                              <MenuItem value="Haiti">Haiti</MenuItem>
                              <MenuItem value="Honduras">Honduras</MenuItem>
                              <MenuItem value="Hong Kong">Hong Kong</MenuItem>
                              <MenuItem value="Hungary">Hungary</MenuItem>
                              <MenuItem value="Iceland">Iceland</MenuItem>
                              <MenuItem value="India">India</MenuItem>
                              <MenuItem value="Indonesia">Indonesia</MenuItem>
                              <MenuItem value="Iran">Iran</MenuItem>
                              <MenuItem value="Iraq">Iraq</MenuItem>
                              <MenuItem value="Ireland">Ireland</MenuItem>
                              <MenuItem value="Israel">Israel</MenuItem>
                              <MenuItem value="Italy">Italy</MenuItem>
                              <MenuItem value="Jamaica">Jamaica</MenuItem>
                              <MenuItem value="Japan">Japan</MenuItem>
                              <MenuItem value="Jordan">Jordan</MenuItem>
                              <MenuItem value="Kazakhstan">Kazakhstan</MenuItem>
                              <MenuItem value="Kenya">Kenya</MenuItem>
                              <MenuItem value="Kiribati">Kiribati</MenuItem>
                              <MenuItem value="Korea, North">Korea, North</MenuItem>
                              <MenuItem value="Korea, South">Korea, South</MenuItem>
                              <MenuItem value="Kuwait">Kuwait</MenuItem>
                              <MenuItem value="Kyrgyzstan">Kyrgyzstan</MenuItem>
                              <MenuItem value="Laos">Laos</MenuItem>
                              <MenuItem value="Latvia">Latvia</MenuItem>
                              <MenuItem value="Lebanon">Lebanon</MenuItem>
                              <MenuItem value="Lesotho">Lesotho</MenuItem>
                              <MenuItem value="Liberia">Liberia</MenuItem>
                              <MenuItem value="Libya">Libya</MenuItem>
                              <MenuItem value="Liechtenstein">Liechtenstein</MenuItem>
                              <MenuItem value="Lithuania">Lithuania</MenuItem>
                              <MenuItem value="Luxembourg">Luxembourg</MenuItem>
                              <MenuItem value="Macao">Macao</MenuItem>
                              <MenuItem value="Madagascar">Madagascar</MenuItem>
                              <MenuItem value="Malawi">Malawi</MenuItem>
                              <MenuItem value="Malaysia">Malaysia</MenuItem>
                              <MenuItem value="Maldives">Maldives</MenuItem>
                              <MenuItem value="Mali">Mali</MenuItem>
                              <MenuItem value="Malta">Malta</MenuItem>
                              <MenuItem value="Marshall Islands">Marshall Islands</MenuItem>
                              <MenuItem value="Mauritania">Mauritania</MenuItem>
                              <MenuItem value="Mauritius">Mauritius</MenuItem>
                              <MenuItem value="Mexico">Mexico</MenuItem>
                              <MenuItem value="Micronesia">Micronesia</MenuItem>
                              <MenuItem value="Moldova">Moldova</MenuItem>
                              <MenuItem value="Monaco">Monaco</MenuItem>
                              <MenuItem value="Mongolia">Mongolia</MenuItem>
                              <MenuItem value="Montenegro">Montenegro</MenuItem>
                              <MenuItem value="Morocco">Morocco</MenuItem>
                              <MenuItem value="Mozambique">Mozambique</MenuItem>
                              <MenuItem value="Myanmar">Myanmar</MenuItem>
                              <MenuItem value="Namibia">Namibia</MenuItem>
                              <MenuItem value="Nauru">Nauru</MenuItem>
                              <MenuItem value="Nepal">Nepal</MenuItem>
                              <MenuItem value="Netherlands">Netherlands</MenuItem>
                              <MenuItem value="New Zealand">New Zealand</MenuItem>
                              <MenuItem value="Nicaragua">Nicaragua</MenuItem>
                              <MenuItem value="Niger">Niger</MenuItem>
                              <MenuItem value="Nigeria">Nigeria</MenuItem>
                              <MenuItem value="North Macedonia">North Macedonia</MenuItem>
                              <MenuItem value="Norway">Norway</MenuItem>
                              <MenuItem value="Oman">Oman</MenuItem>
                              <MenuItem value="Pakistan">Pakistan</MenuItem>
                              <MenuItem value="Palau">Palau</MenuItem>
                              <MenuItem value="Palestine, State of">Palestine, State of</MenuItem>
                              <MenuItem value="Panama">Panama</MenuItem>
                              <MenuItem value="Papua New Guinea">Papua New Guinea</MenuItem>
                              <MenuItem value="Paraguay">Paraguay</MenuItem>
                              <MenuItem value="Peru">Peru</MenuItem>
                              <MenuItem value="Philippines">Philippines</MenuItem>
                              <MenuItem value="Poland">Poland</MenuItem>
                              <MenuItem value="Portugal">Portugal</MenuItem>
                              <MenuItem value="Qatar">Qatar</MenuItem>
                              <MenuItem value="Romania">Romania</MenuItem>
                              <MenuItem value="Russia">Russia</MenuItem>
                              <MenuItem value="Rwanda">Rwanda</MenuItem>
                              <MenuItem value="Saint Kitts and Nevis">Saint Kitts and Nevis</MenuItem>
                              <MenuItem value="Saint Lucia">Saint Lucia</MenuItem>
                              <MenuItem value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</MenuItem>
                              <MenuItem value="Samoa">Samoa</MenuItem>
                              <MenuItem value="San Marino">San Marino</MenuItem>
                              <MenuItem value="Sao Tome and Principe">Sao Tome and Principe</MenuItem>
                              <MenuItem value="Saudi Arabia">Saudi Arabia</MenuItem>
                              <MenuItem value="Senegal">Senegal</MenuItem>
                              <MenuItem value="Serbia">Serbia</MenuItem>
                              <MenuItem value="Seychelles">Seychelles</MenuItem>
                              <MenuItem value="Sierra Leone">Sierra Leone</MenuItem>
                              <MenuItem value="Singapore">Singapore</MenuItem>
                              <MenuItem value="Slovakia">Slovakia</MenuItem>
                              <MenuItem value="Slovenia">Slovenia</MenuItem>
                              <MenuItem value="Solomon Islands">Solomon Islands</MenuItem>
                              <MenuItem value="Somalia">Somalia</MenuItem>
                              <MenuItem value="South Africa">South Africa</MenuItem>
                              <MenuItem value="South Sudan">South Sudan</MenuItem>
                              <MenuItem value="Spain">Spain</MenuItem>
                              <MenuItem value="Sri Lanka">Sri Lanka</MenuItem>
                              <MenuItem value="Sudan">Sudan</MenuItem>
                              <MenuItem value="Suriname">Suriname</MenuItem>
                              <MenuItem value="Sweden">Sweden</MenuItem>
                              <MenuItem value="Switzerland">Switzerland</MenuItem>
                              <MenuItem value="Syria">Syria</MenuItem>
                              <MenuItem value="Taiwan">Taiwan</MenuItem>
                              <MenuItem value="Tajikistan">Tajikistan</MenuItem>
                              <MenuItem value="Tanzania">Tanzania</MenuItem>
                              <MenuItem value="Thailand">Thailand</MenuItem>
                              <MenuItem value="Togo">Togo</MenuItem>
                              <MenuItem value="Tonga">Tonga</MenuItem>
                              <MenuItem value="Trinidad and Tobago">Trinidad and Tobago</MenuItem>
                              <MenuItem value="Tunisia">Tunisia</MenuItem>
                              <MenuItem value="Turkey">Turkey</MenuItem>
                              <MenuItem value="Turkmenistan">Turkmenistan</MenuItem>
                              <MenuItem value="Tuvalu">Tuvalu</MenuItem>
                              <MenuItem value="Uganda">Uganda</MenuItem>
                              <MenuItem value="Ukraine">Ukraine</MenuItem>
                              <MenuItem value="United Arab Emirates">United Arab Emirates</MenuItem>
                              <MenuItem value="United Kingdom">United Kingdom</MenuItem>
                              <MenuItem value="United States">United States</MenuItem>
                              <MenuItem value="Uruguay">Uruguay</MenuItem>
                              <MenuItem value="Uzbekistan">Uzbekistan</MenuItem>
                              <MenuItem value="Vanuatu">Vanuatu</MenuItem>
                              <MenuItem value="Vatican City">Vatican City</MenuItem>
                              <MenuItem value="Venezuela">Venezuela</MenuItem>
                              <MenuItem value="Vietnam">Vietnam</MenuItem>
                              <MenuItem value="Yemen">Yemen</MenuItem>
                              <MenuItem value="Zambia">Zambia</MenuItem>
                              <MenuItem value="Zimbabwe">Zimbabwe</MenuItem>
                            </Select>
                            </FormControl>
                          </div>
                        </div>
                      </div>


                      <div className="col-xl-6 col-lg-6">
                        <div className="contact-two__input-box">
                          <input
                            type="text"
                            name="entry.856495849"
                            placeholder="Phone Number *"
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      
                      {/*<p className="section-title__tagline section-title__tagline--two"> <br/> Which sessions are you interested in? <br/><br/></p>
                      <div className="col-xl-6 col-lg-6"><FormControlLabel control={<Checkbox style={{color: '#fff'}}/>} label="Session 1 " name="entry.1350208563"/></div>
                      <div className="col-xl-6 col-lg-6"><FormControlLabel control={<Checkbox style={{color: '#fff'}}/>} label="Session 2 " name="entry.1350208563"/></div>
                      <div className="col-xl-6 col-lg-6"><FormControlLabel control={<Checkbox style={{color: '#fff'}}/>} label="Session 3 " name="entry.1350208563"/></div>
                      <div className="col-xl-6 col-lg-6"><FormControlLabel control={<Checkbox style={{color: '#fff'}}/>} label="Session 4 " name="entry.1350208563"/></div>
                      <div className="col-xl-6 col-lg-6"><FormControlLabel control={<Checkbox style={{color: '#fff'}}/>} label="Session 5 " name="entry.1350208563"/></div>
                      <div className="col-xl-6 col-lg-6"><FormControlLabel control={<Checkbox style={{color: '#fff'}}/>} label="Session 6 " name="entry.1350208563"/></div>
                      <div className="col-xl-6 col-lg-6"><FormControlLabel control={<Checkbox style={{color: '#fff'}}/>} label="Session 7 " name="entry.1350208563"/></div>
                      <div className="col-xl-6 col-lg-6"><FormControlLabel control={<Checkbox style={{color: '#fff'}}/>} label="Session 8 " name="entry.1350208563"/></div>
                      <div className="col-xl-6 col-lg-6"><FormControlLabel control={<Checkbox style={{color: '#fff'}}/>} label="Session 9 " name="entry.1350208563"/></div>
                      <div className="col-xl-6 col-lg-6"><FormControlLabel control={<Checkbox style={{color: '#fff'}}/>} label="Session 10 " name="entry.1350208563"/></div>
                      */}
                      <p className="section-title__tagline section-title__tagline--two"> <br/> To help us measure our carbon footprint, please let us know: <br/><br/></p>
                      <div className="col-xl-6 col-lg-6">
                        What mode of transport will you use to travel the greatest distance in your journey to the event?
                        <div className="contact-two__input-box">
                          <div className="select-box">
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label" style={{color: '#fff', paddingLeft: '20px'}}>Mode of Transport *</InputLabel>
                            <Select
                              required
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              // value={dis}
                              value={form['entry.1096684556']}
                              label="Mode of Transport"
                              // onChange={ChangeDis}
                              onChange={handleChange}
                              name="entry.1096684556"
                              labelStyle={{ color: '#ff0000' }}
                              sx={{
                                color: "white", 
                                height: '60px',
                                borderRadius: '15px', 
                                fontWeight: '500',
                                fontSize: '16px',
                                backgroundColor: '#ffffff33',
                                '.MuiOutlinedInput-notchedOutline': {
                                  borderColor: 'transparent',
                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                  borderColor: 'transparent',
                                },
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                  borderColor: 'transparent',
                                },
                                '.MuiSvgIcon-root ': {
                                  fill: "white !important",
                                }
                              }}
                            >
                              <MenuItem value="MTR">MTR</MenuItem>
                              <MenuItem value="Taxi">Taxi</MenuItem>
                              <MenuItem value="Car">Car</MenuItem>
                              <MenuItem value="Bus">Bus</MenuItem>
                              <MenuItem value="Plane">Plane</MenuItem>
                              <MenuItem value="Electric Scooter/Bike">Electric Scooter/Bike</MenuItem>
                              <MenuItem value="By foot">By foot</MenuItem>
                            </Select>
                            </FormControl>
                          </div>
                        </div>
                      </div>
                        
                        
                      <div className="col-xl-6 col-lg-6">
                      <br/>What is your organisation type?
                        <div className="contact-two__input-box">
                          <div className="select-box">
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label" style={{color: '#fff', paddingLeft: '20px'}}>Organisation Type *</InputLabel>
                            <Select
                              required
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              // value={org}
                              value={form['entry.1383365476']}
                              label="Organisation Type"
                              // onChange={ChangeOrg}
                              onChange={handleChange}
                              name="entry.1383365476"
                              labelStyle={{ color: '#ff0000' }}
                              sx={{
                                color: "white", 
                                height: '60px',
                                borderRadius: '15px', 
                                fontWeight: '500',
                                fontSize: '16px',
                                backgroundColor: '#ffffff33',
                                '.MuiOutlinedInput-notchedOutline': {
                                  borderColor: 'transparent',
                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                  borderColor: 'transparent',
                                },
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                  borderColor: 'transparent',
                                },
                                '.MuiSvgIcon-root ': {
                                  fill: "white !important",
                                }
                              }}
                            >
                              <MenuItem value="Association / Member Organisation">Association / Member Organisation</MenuItem>
                              <MenuItem value="Charity / NGO / Nonprofit / Think Tank / Foundation">Charity / NGO / Nonprofit / Think Tank / Foundation</MenuItem>
                              <MenuItem value="Education / University - Academic/Employee">Education / University - Academic/Employee</MenuItem>
                              <MenuItem value="Education / University - Student">Education / University - Student</MenuItem>
                              <MenuItem value="Funder - Lender / Insurer / Investor">Funder - Lender / Insurer / Investor</MenuItem>
                              <MenuItem value="Government / Policy">Government / Policy</MenuItem>
                              <MenuItem value="Innovator - SME">Innovator - SME</MenuItem>
                              <MenuItem value="Innovator - Start-Up">Innovator - Start-Up</MenuItem>
                              <MenuItem value="Media">Media</MenuItem>
                              <MenuItem value="Private Sector - Corporate">Private Sector - Corporate</MenuItem>
                              <MenuItem value="Private Sector - SME / Private Business">Private Sector - SME / Private Business</MenuItem>
                              <MenuItem value="Public Sector">Public Sector</MenuItem>
                              <MenuItem value="Others">Others</MenuItem>
                            </Select>
                            </FormControl>
                          </div>
                        </div>
                      </div>
                      
                      {/* 
                      <p className="section-title__tagline section-title__tagline--two"> <br/> How did you hear about our event? (Please select all that apply) *<br/><br/></p>
                      <div className="col-xl-6 col-lg-6"><FormControlLabel control={<Checkbox style={{color: '#fff'}}/>} label="WGO's Social Media (e.g., Facebook, LinkedIn, Instagram)" name="entry.1128947227"/></div>
                      <div className="col-xl-6 col-lg-6"><FormControlLabel control={<Checkbox style={{color: '#fff'}}/>} label="Online Advertisements (e.g., banners, pop-ups)" name="entry.1128947227"/></div>
                      <div className="col-xl-6 col-lg-6"><FormControlLabel control={<Checkbox style={{color: '#fff'}}/>} label="Street Displays (e.g., digital billboards, posters)" name="entry.1128947227"/></div>
                      <div className="col-xl-6 col-lg-6"><FormControlLabel control={<Checkbox style={{color: '#fff'}}/>} label="Sharing from friends or colleagues" name="entry.1128947227"/></div>
                      <div className="col-xl-6 col-lg-6"><FormControlLabel control={<Checkbox style={{color: '#fff'}}/>} label="News or media coverage" name="entry.1128947227"/></div>
                      <div className="col-xl-6 col-lg-6"><FormControlLabel control={<Checkbox style={{color: '#fff'}}/>} label="Email newsletter" name="entry.1128947227"/></div>
                      <div className="col-xl-6 col-lg-6"><FormControlLabel control={<Checkbox style={{color: '#fff'}}/>} label="Other (please specify)" name="entry.1128947227"/></div>
                      */}
                      <p className="section-title__tagline section-title__tagline--two"> <br/> How did you hear about our event? (Please select all that apply) *<br/><br/></p>

                      {options.map((option) => (
                        <div className="col-xl-6 col-lg-6">
                          <FormControlLabel 
                            key={option.value} 
                            control={<Checkbox style={{color: '#fff'}} value={option.value} checked={selectedOptions.includes(option.value)} onChange={handleSelectChange}/>} 
                            label={option.label} 
                            name={option.value} 
                            />
                        </div>
                      ))}
                      {selectedOptions.includes('other') && (
                        <div className="col-xl-12 col-lg-12">
                          <div className="contact-two__input-box">
                            <input
                              type="text"
                              name="entry.1128947227"
                              placeholder="Please Specify *"
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                      )}

                      
                      <p>
                      <br/>
                        1. By registering for this event, we will process your information in accordance with our
privacy policy and as such we will send you event specific updates, as well as
information on related events and solutions from ESG Xchange.
                      </p>
                      <p>
                        2. I understand that allowing my badge to be scanned within a sponsored feature area
of the event or by an exhibitor or sponsor directly, I will be providing that exhibitor
or sponsor with my contact data (as disclosed when registering). I consent to this
personal data being transferred and accept that this exhibitor or sponsor may
contact me about their products or services in which I expressed an interest. I accept
that I will be subject to their communications and privacy policy and can opt-out
with them directly.
                      </p>
                      <p>
                        3. I also understand and agree that my personal data may be held and used by the
organiser of this event, and any third-party hosting provider acting on their behalf, to
stage the event and to analyse visitor tra­ffic with a view to improving the event
experience for participants. <br/><br/>
                      </p>
                      {/*<div className="col-xl-12">
                        <div className="contact-page__input-box text-message-box">
                          <textarea
                            name="message"
                            placeholder="Write Message"
                            defaultValue={""}
                          />
                      </div>*/}
                        <FormControlLabel required control={<Checkbox style={{color: '#fff'}}/>} label="I agree to the Terms and Conditions" name="entry.1350208563" onChange={handleChange}/>
                        <div className="contact-two__btn-box">
                          <button
                            type="submit"
                            className="thm-btn contact-two__btn"
                            disabled={isButtonDisabled}
                          >
                            Register
                          </button>
                          { isButtonDisabled ? <div style={{padding: '1%'}}> (Complete all fields to submit) </div> : <p></p>}
                        </div>
                      </div>
                  </form>
                  <div className="result" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Contact Two End*/}
    </EnvensLayouts>
  );
};
export default page;
