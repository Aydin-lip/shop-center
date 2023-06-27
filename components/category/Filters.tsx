import { useState } from 'react';
// Mui
import { SubTitle2, Body2, BasicTextField, Body1, IOSSwitch } from '@/mui/customize'
import { Slider, InputAdornment, FormControl, FormControlLabel, Checkbox, Button } from '@mui/material';

const Filters = () => {
  // States
  const [value, setValue] = useState<number[]>([20, 37]);
  const [displayValue, setDisplayValue] = useState<number>(7)
  const [showMore, setShowMore] = useState<boolean>(false)
  const [listBrand, setListBrand] = useState({ // All brands and actived
    'H&M': true, adidas: false, Defacto: true, Fendi: true,
    Prada: false, Nike: false, MANGO: true,
    'H&M2': true, adidas2: false, Defacto2: true, Fendi2: true,
    Prada2: false, Nike2: false, MANGO2: true,
    'H&M3': true, adidas3: false, Defacto3: true, Fendi3: true,
    Prada3: false, Nike3: false, MANGO3: true,
  });
  const [listSleeve, setListSleeve] = useState({ // Sleeve
    Sleeveless: true, 'Short Sleeve': false, 'Long Sleeve': true, 'Half Sleeve': false,
  });
  const [listSize, setListSize] = useState({ // Sizes
    FreeSize: true, XS: false, S: false, M: true, L: false, XL: false,
  });

  // Function change price value min and max
  const handleChange = (event: Event, newValue: number | number[]) => setValue(newValue as number[]);

  const changeCheckbox = (event: React.ChangeEvent<HTMLInputElement>, type: string) =>
    type === 'brand' ?
      setListBrand({ ...listBrand, [event.target.name]: event.target.checked, }) :
      type === 'size' ?
        setListSize({ ...listSize, [event.target.name]: event.target.checked, }) :
        type === 'sleeve' &&
        setListSleeve({ ...listSleeve, [event.target.name]: event.target.checked, });

  return (
    <>
      <div className='flex justify-end items-center text-[#57aad9] ml-auto font-semibold md:hidden pr-4' onClick={() => setShowMore(!showMore)}>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
          </svg>
        </span>
        <span className=''>Filters & Sort</span>
      </div>
      <div className={`border border-dark-100 border-solid rounded w-[99.5%] md:w-[22%] min-w-[220px] overflow-hidden transition-all duration-1000 ${showMore ? 'max-[768px]:h-0 max-[768px]:hidden' : 'max-[768px]:h-auto'}`}>
        <div className='px-4 py-2.5'>
          <SubTitle2 className='text-light-200 border-0 border-b border-b-dark-100 border-solid pb-3 font-poppins them-category-filter-title'>Filters (Not yet launched)</SubTitle2>
          <div className='flex flex-col justify-start items-center border-0 border-b border-b-dark-100 border-solid py-3'>
            <SubTitle2 className="w-full them-category-filter">Price</SubTitle2>
            <div className="flex flex-row items-center justify-between w-full pt-3 md:py-3">
              {value.map(item =>
                <Body2 key={item} className="py-0.5 rounded-sm px-2 bg-light-400 text-light-100 them-category-filter-price">{item}$</Body2>
              )}
            </div>
            <Slider
              className="w-4/5 max-[768px]:p-0"
              getAriaLabel={() => 'Temperature range'}
              value={value}
              onChange={handleChange}
              size="small"
            />
          </div>
          <div className="border-0 pb-2 border-b border-b-dark-100 border-solid">
            <div className="flex flex-row items-center justify-start py-4">
              <SubTitle2 className="text-light-200 w-1/4 them-category-filter">Brand</SubTitle2>
              <BasicTextField
                placeholder="Search brands..."
                size="small"
                className="w-3/4 rounded text-xs"
                color="secondary"
                sx={{
                  '& .css-1qw6wlz-MuiInputBase-root-MuiOutlinedInput-root': { height: 37 },
                  '& .css-1ua80n0-MuiInputBase-input-MuiOutlinedInput-input': { color: '#7F7F7F' }
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.58342 18.125C4.87508 18.125 1.04175 14.2917 1.04175 9.58334C1.04175 4.87501 4.87508 1.04167 9.58342 1.04167C14.2917 1.04167 18.1251 4.87501 18.1251 9.58334C18.1251 14.2917 14.2917 18.125 9.58342 18.125ZM9.58342 2.29167C5.55841 2.29167 2.29175 5.56667 2.29175 9.58334C2.29175 13.6 5.55841 16.875 9.58342 16.875C13.6084 16.875 16.8751 13.6 16.8751 9.58334C16.8751 5.56667 13.6084 2.29167 9.58342 2.29167Z" fill="#A7A7A7" />
                        <path d="M18.3333 18.9583C18.175 18.9583 18.0166 18.9 17.8916 18.775L16.225 17.1083C15.9833 16.8667 15.9833 16.4667 16.225 16.225C16.4666 15.9833 16.8666 15.9833 17.1083 16.225L18.775 17.8917C19.0166 18.1333 19.0166 18.5333 18.775 18.775C18.65 18.9 18.4916 18.9583 18.3333 18.9583Z" fill="#A7A7A7" />
                      </svg>
                    </InputAdornment>
                  )
                }}
              />
            </div>
            <div className="flex flex-col justify-center items-start">
              <FormControl component="fieldset" variant="standard" className='flex-wrap flex-row md:flex-col gap-x-4'>
                {Object.keys(listBrand).splice(0, displayValue).map((item, idx) =>
                  <FormControlLabel
                    key={idx}
                    className='them-category-filter'
                    control={
                      <Checkbox
                        checked={Object.values(listBrand).splice(0, displayValue)[idx]}
                        onChange={event => changeCheckbox(event, 'brand')}
                        name={item}
                      />
                    }
                    label={item}
                  />
                )}
                <Button
                  onClick={() => displayValue === 7 ? setDisplayValue(Object.values(listBrand).length) : setDisplayValue(7)}
                  variant="text"
                >
                  {displayValue === 7 ? `+ ${Object.values(listBrand).length - displayValue} more` : 'Show Less'}
                </Button>
              </FormControl>
            </div>
          </div>
          <div className="flex items-center justify-between flex-row border-0 border-b border-b-dark-100 border-solid py-2">
            <Body1 className='them-category-filter'>Just On Sale</Body1>
            <IOSSwitch sx={{ m: 1 }} defaultChecked />
          </div>
          <div className="pb-3 flex flex-col justify-center items-start border-0 border-b border-b-dark-100 border-solid">
            <Body1 className="py-4 them-category-filter">Sleeve</Body1>
            <FormControl component="fieldset" variant="standard" className='flex-wrap flex-row md:flex-col gap-x-4'>
              {Object.keys(listSleeve).map((item, idx) =>
                <FormControlLabel
                  key={idx}
                  className='them-category-filter'
                  control={
                    <Checkbox
                      checked={Object.values(listSleeve)[idx]}
                      onChange={event => changeCheckbox(event, 'Sleeve')}
                      name={item}
                    />
                  }
                  label={item}
                />
              )}
            </FormControl>
          </div>
          <div className="pb-3 flex flex-col justify-center items-start">
            <Body1 className="py-4 them-category-filter">Sleeve</Body1>
            <FormControl component="fieldset" variant="standard" className='flex-wrap flex-row md:flex-col gap-x-4'>
              {Object.keys(listSize).map((item, idx) =>
                <FormControlLabel
                  key={idx}
                  className='them-category-filter'
                  control={
                    <Checkbox
                      checked={Object.values(listSize)[idx]}
                      onChange={event => changeCheckbox(event, 'size')}
                      name={item}
                    />
                  }
                  label={item}
                />
              )}
            </FormControl>
          </div>
        </div>
      </div>
    </>
  )
}

export default Filters