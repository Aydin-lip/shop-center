import { IDescription } from '@/models/products';
import { SubTitle2, Heading6 } from '@/mui/customize';

// List and data items
const listDetails = ['Casual Style', 'Heart Pattern', 'Logn Sleeve', '100% Polyester', 'Product code: HS0976', 'Fabric'];
const dataItem = ['casualStyle', 'heartPattern', 'lognSleeve', 'polyester', 'productCode', 'fabric'];

const Description = ({data}: {data: IDescription}) => {
  return (
    <div className="flex flex-col justify-start px-2 py-6 md:py-11">
      <SubTitle2 className="text-light-100">
        {data.text}
      </SubTitle2>
      <div className="flex flex-col flex-wrap justify-start items-start h-64 gap-6 md:gap-11 mt-14 mb-16 w-fit">
        {dataItem.map((item, idx) =>
          data.items[item] ? 
          <div className="flex flex-row items-center" key={idx}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22.25C6.34614 22.25 1.75 17.6539 1.75 12C1.75 6.34614 6.34614 1.75 12 1.75C17.6539 1.75 22.25 6.34614 22.25 12C22.25 17.6539 17.6539 22.25 12 22.25ZM12 2.25C6.62386 2.25 2.25 6.62386 2.25 12C2.25 17.3761 6.62386 21.75 12 21.75C17.3761 21.75 21.75 17.3761 21.75 12C21.75 6.62386 17.3761 2.25 12 2.25Z" fill="#8EAAF2" stroke="#8EAAF2" />
              <path d="M10.5799 15.58C10.3799 15.58 10.1899 15.5 10.0499 15.36L7.21994 12.53C6.92994 12.24 6.92994 11.76 7.21994 11.47C7.50994 11.18 7.98994 11.18 8.27994 11.47L10.5799 13.77L15.7199 8.62998C16.0099 8.33998 16.4899 8.33998 16.7799 8.62998C17.0699 8.91998 17.0699 9.39998 16.7799 9.68998L11.1099 15.36C10.9699 15.5 10.7799 15.58 10.5799 15.58Z" fill="#8EAAF2" />
            </svg>
            <Heading6 className="ml-2.5 font-poppins text-lg them-detail-color">{idx === 4 ? `Product Code: ${data.items.productCode}` : listDetails[idx]}</Heading6>
          </div>
          : ''
        )}
      </div>
    </div>
  )
}

export default Description;