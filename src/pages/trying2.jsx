import React from "react";
import { default as ReactSelect } from "react-select";
import { components, } from "react-select";
import { useState } from "react";





const options = [
    { value: 'mango', label: 'Mango ' },
    { value: 'pawpaw', label: 'Pawpaw ' },
    { value: 'pineapple', label: 'Pineapple ' },
    { value: 'orange', label: 'Orange ' },
    { value: 'banana', label: 'Banana ' },
    { value: 'plantain', label: 'Plantain ' },
    { value: 'avocado', label: 'Avocado ' },
    { value: 'cashew', label: 'Cashew ' },
    { value: 'guava', label: 'Guava ' },
    { value: 'coconut', label: 'Coconut ' },
    { value: 'soursop', label: 'Soursop' },
    { value: 'tangerine', label: 'Tangerine ' },
    { value: 'strawberries', label: 'Strawberries' },
    { value: 'blueberries', label: 'Blueberries' },
    { value: 'blackberries', label: 'Blackberries' },
    { value: 'raspberries', label: 'Raspberries' },
    { value: 'watermelon', label: 'Watermelon ' },
    { value: 'arican-star-apple', label: 'African Star Apple (Agbalumo/Udara) ' },
    { value: 'apple', label: 'Apple (Imported) ' },
    { value: 'pumpkin-leaves', label: 'Pumpkin Leaves (Ugu)' },
    { value: 'spinach', label: 'Spinach (Efo Tete)' },
    { value: 'bitterleaf', label: 'Bitter Leaf ' },
    { value: 'waterleaf', label: 'Waterleaf ' },
    { value: 'okra', label: 'Okra ' },
    { value: 'garden-egg', label: 'Garden Egg ' },
    { value: 'tomato', label: 'Tomato ' },
    { value: 'fluted-pumpkin', label: 'Fluted Pumpkin (Ugu)' },
    { value: 'cocoyam-leaves', label: 'Cocoyam Leaves ' },
    { value: 'scent-leaf', label: 'Scent Leaf ' },
    { value: 'onion', label: 'Onion ' },
    { value: 'cabbage', label: 'Cabbage ' },
    { value: 'carrot', label: 'Carrot ' },
    { value: 'sweet-potato', label: 'Sweet Potato ' },
    { value: 'beefsteak-tomatoes', label: 'Beefsteak tomatoes' },
    { value: 'roma-tomatoes', label: 'Roma tomatoes' },
    { value: 'regular-tomatoes', label: 'Regular tomatoes' },
    { value: 'cherry-tomatoes', label: 'Cherry tomatoes' },
    { value: 'potatoes-anamo', label: 'Potatoes - Anamo' },
    { value: 'sweet-potatoes', label: 'Sweet Potatoes - Doya' },
    { value: 'carrots', label: 'Carrots - Karoti' },
    { value: 'onions', label: 'Onions - Alubosa' },
    { value: 'cucumbers', label: 'Cucumbers - Gambari' },
    { value: 'red-bell-peppers', label: 'Red Bell Peppers - Tatase' },
    { value: 'yellow-bell-peppers', label: 'Yellow Bell Peppers' },
    { value: 'green-bell-peppers', label: 'Green Bell Peppers' },
    { value: 'red-habanero-peppers', label: 'Red Habanero Peppers - Ata rodo' },
    { value: 'yellow-habanero-peppers', label: 'Yellow Habanero Peppers' },
    { value: 'green-habanero-peppers', label: 'Green Habanero Peppers' },
    { value: 'orange-habanero-peppers', label: 'Orange Habanero Peppers' },
    { value: 'broccoli', label: 'Broccoli' },
    { value: 'cabbage', label: 'Cabbage - Ewedu Oyibo' },
    { value: 'okra', label: 'Okra - Ila' },
    { value: 'beetroots', label: 'Beetroots - Ata Dudu' }
]

const options2 = [
    { value: 'twice-a-week', label: 'Twice a week' },
    { value: 'once-a-month', label: 'Once a month' },
    { value: 'others', label: 'Others' },
]

const options3 = [
    { value: 'local-market', label: 'Local market' },
    { value: 'wholesalers', label: 'Wholesalers' },
    { value: 'direct-sales', label: 'Direct sales' },
]

const options4 = [
    { value: 'organic-certification', label: 'Organic Certification' },
    { value: 'farm-tours-or-educational-programs', label: 'Farm Tours or Educational Programs' },
    { value: 'direct-to-consumer-sales', label: 'Direct-to-Consumer sales' },
    { value: 'value-added-products', label: 'Value-Added Products' },
    { value: 'packaging-service', label: 'Packaging Service' },
    { value: 'pesticide-free-produce', label: 'Pesticide-Free Produce' },
]

const options5 = [
    { value: 'linkedin', label: 'LinkedIn' },
    { value: 'facebook', label: 'Facebook' },
    { value: 'instagram', label: 'Instagram' },
    { value: 'friends', label: 'Friends' }
   
]


const Option = (props) => {
    return (
        <div>
            <components.Option {...props}>
                <input
                    type="checkbox"
                    checked={props.isSelected}
                    onChange={() => null}
                />{" "}
                <label>{props.label}</label>
            </components.Option>
        </div>
    );
};


export default function Example({ handleChange, handleOptionText }) {

    const [selectedOptions, setSelectedOptions] = useState({
        typesofproduce: [],
        supplyfrequency: null,
        distributionchannels: null,
        additionalofferings: [],
        referralsource: [],
    });
    const [otherText, setOtherText] = useState('');

    const handleSelectChange = (name) => (selectedOption) => {
        setSelectedOptions((fields) => ({
            ...fields,
            [name]: selectedOption,
        }));
        handleChange({ ...selectedOptions, [name]: selectedOption });
    };

    // const handleSelectChange = (selected) => {
    //     handleChange({ typesofproduce: selected }); // Adjust based on your requirements
    // };

    
    const handleTextChange = (e) => { 
       
        handleOptionText(e, setOtherText);
    }


    // const [selectedOptions2, setSelectedOptions2] = useState([]);
    // const [otherText, setOtherText] = useState('');

    // const handleSelectChange2 = (selectedOptions2) => {
    //     setSelectedOptions2(selectedOptions2);
    //     if (selectedOptions2.value !== 'others') {
    //         setOtherText(''); // Clear the text input if another option is selected
    //     } 
    //     handleChange(selectedOptions2);
    // };
    // const handleTextChange = (e) => { 
       
    //     handleChange2(e, setOtherText);
    // }

    // const [selectedOptions3, setSelectedOptions3] = useState([]);

    // const handleSelectChange3 = (selectedOptions3) => {
    //     setSelectedOptions3(selectedOptions3);
    //     handleChange(selectedOptions3)
    // };

    // const [selectedOptions4, setSelectedOptions4] = useState([]);

    // const handleSelectChange4 = (selectedOptions4) => {
    //     setSelectedOptions4(selectedOptions4);
    //     handleChange(selectedOptions4)
    // };

    return (

        <>

            <label className='font-bold' htmlFor='produce1'>
                Types of Produce  </label><br></br>
            <ReactSelect className='hover:border-[#424b50] bg-[#dcd6ec99]'
                name="produce1"
                options={options}
                isMulti={true}
                closeMenuOnSelect={false}
                hideSelectedOptions={false}
                components={{
                    Option
                }}
                placeholder=" What types of fruits and vegetables do you grow on your farm?"
                onChange={handleSelectChange('typesofproduce')}
                allowSelectAll={true}
                value={selectedOptions.typesofproduce}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 7,
                    colors: {
                        ...theme.colors,
                        primary25: 'lightgreen',
                        danger: 'black',
                        primary: 'lightgrey',
                    },
                })}
                required />

            <p className='text-[0.7rem]'>Indicate in the input field above if you don't see your category here</p><br />

            <label className='font-bold' htmlFor='produce2'>
                Supply Frequency  </label><br></br>
            <ReactSelect className='hover:border-[#424b50] bg-[#dcd6ec99]'
                name="produce2"
                options={options2}
                isMulti={false}
                closeMenuOnSelect={true}
                hideSelectedOptions={false}

                placeholder="How often do you supply fruits and vegetables to buyers/businesses?"
                onChange={(selectedOption) => {
                    handleSelectChange('supplyfrequency')(selectedOption);
                    if (selectedOption?.value !== 'others') {
                        setOtherText(''); // Clear the text input if another option is selected
                    }
                }}
                allowSelectAll={true}
                value={selectedOptions.supplyfrequency}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 7,
                    colors: {
                        ...theme.colors,
                        primary25: 'lightgreen',
                        danger: 'black',
                        primary: 'lightgrey',
                    },
                })}
                required /> <br />

            {selectedOptions.supplyfrequency?.value === 'others' && (
                <div>
                    <p className='text-[0.7rem]'>Indicate here if you don't see your category above</p>
                    <label className='font-bold' htmlFor="other">Please specify:</label>
                    <input className='bg-[#dcd6ec99] mt-3 mb-6 border-b-[#a7abad] hover:border-t-[#a7abad] hover:border-b-black focus:outline-none focus:border-t-white focus:border-b-black focus:bg-white cursor-pointer border-solid border-[1px] rounded-md px-5 py-1 md:py-2 w-full'
                        type="text"
                        id="other"
                        name="other"
                        value={otherText.other}
                        onChange={handleTextChange}
                    /> 
                </div> 
            )} 



            <label className='font-bold' htmlFor='produce3'>
                Distribution Channels  </label><br></br>
            <ReactSelect className='hover:border-[#424b50] bg-[#dcd6ec99]'
                name="produce3"
                options={options3}
                isMulti={false}
                closeMenuOnSelect={true}
                hideSelectedOptions={false}

                placeholder="How do you currently distribute your produce?"
                onChange={handleSelectChange('distributionchannels')}
                allowSelectAll={true}
                value={selectedOptions.distributionchannels}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 7,
                    colors: {
                        ...theme.colors,
                        primary25: 'lightgreen',
                        danger: 'black',
                        primary: 'lightgrey',
                    },
                })}
                required /> <br />


            <label className='font-bold' htmlFor='produce4'>
                Additional Offerings  </label><br></br>
            <ReactSelect className='hover:border-[#424b50] bg-[#dcd6ec99]'
                name="produce4"
                options={options4}
                isMulti={true}
                closeMenuOnSelect={false}
                hideSelectedOptions={false}
                components={{
                    Option
                }}
                placeholder="Do you offer any additional services or products related to your farm?"
                onChange={handleSelectChange('additionalofferings')}
                allowSelectAll={true}
                value={selectedOptions.additionalofferings}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 7,
                    colors: {
                        ...theme.colors,
                        primary25: 'lightgreen',
                        danger: 'black',
                        primary: 'lightgrey',
                    },
                })}
                required /> <br />

<label className='font-bold' htmlFor='produce5'>
               Referral Source  </label><br></br>
            <ReactSelect className='hover:border-[#424b50] bg-[#dcd6ec99]'
                name="produce5"
                options={options5}
                isMulti={true}
                closeMenuOnSelect={false}
                hideSelectedOptions={false}
                components={{
                    Option
                }}
                placeholder="How did you hear about us?"
                onChange={handleSelectChange('referralsource')}
                allowSelectAll={true}
                value={selectedOptions. referralsource}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 7,
                    colors: {
                        ...theme.colors,
                        primary25: 'lightgreen',
                        danger: 'black',
                        primary: 'lightgrey',
                    },
                })}
                required /> <br />
        </>
    );
}



