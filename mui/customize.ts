import { styled } from '@mui/material/styles';
import { Typography, Switch, Button, TextField, Checkbox } from '@mui/material';

const Display1 = styled(Typography)({ color: '#131212', fontSize: 64, fontWeight: 700, fontFamily: "Inter" });

const Display2 = styled(Typography)({ color: '#131212', fontSize: 56, fontWeight: 700, fontFamily: "Inter" });

const Heading1 = styled(Typography)({ color: '#131212', fontSize: 48, fontWeight: 700, fontFamily: "Inter" });

const Heading2 = styled(Typography)({ color: '#131212', fontSize: 40, fontWeight: 700, fontFamily: "Inter" });

const Heading3 = styled(Typography)({ color: '#131212', fontSize: 32, fontWeight: 700, fontFamily: "Inter" });

const Heading4 = styled(Typography)({ color: '#131212', fontSize: 28, fontWeight: 700, fontFamily: "Inter" });

const Heading5 = styled(Typography)({ color: '#131212', fontSize: 24, fontWeight: 700, fontFamily: "Inter" });

const Heading6 = styled(Typography)({ color: '#131212', fontSize: 20, fontWeight: 500, fontFamily: "Inter" });

const SubTitle1 = styled(Typography)({ color: '#131212', fontSize: 18, fontWeight: 500, fontFamily: "Inter" });

const SubTitle2 = styled(Typography)({ color: '#131212', fontSize: 16, fontWeight: 500, fontFamily: "Inter" });

const Body1 = styled(Typography)({ color: '#131212', fontSize: 16, fontWeight: 500, fontFamily: "Inter" });

const Body2 = styled(Typography)({ color: '#131212', fontSize: 14, fontWeight: 400, fontFamily: "Inter" });

const Button1 = styled(Typography)({ color: '#131212', fontSize: 16, fontWeight: 500, fontFamily: "Inter" });

const Button2 = styled(Typography)({ color: '#131212', fontSize: 14, fontWeight: 400, fontFamily: "Inter" });

const Caption = styled(Typography)({ color: '#131212', fontSize: 12, fontWeight: 400, fontFamily: "Inter" });

const IOSSwitch = styled(Switch)(({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: 0.7,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    opacity: 1,
    backgroundColor: '#7F7F7F',
  },
}));

const BasicButton = styled(Button)({ textTransform: 'capitalize', fontSize: 16, fontWeight: 500, fontFamily: 'Inter' })

const ButtonWithIcon = styled(Button)({
  textTransform: 'capitalize', fontSize: 16, fontWeight: 500, fontFamily: 'Inter', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'
})

const BasicTextField = styled(TextField)({ '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline': { borderWidth: '1px !important' } })

const CheckBoxFilter = styled(Checkbox)({
  '& .css-ahj2mt-MuiTypography-root': { fontFamily: "Inter", fontWeight: 400, fontSize: 12 }
})

export {
  Display1, Display2, Heading1, Heading2, Heading3, Heading4, Heading5, Heading6, SubTitle1, SubTitle2,
  Body1, Body2, Button1, Button2, Caption, IOSSwitch, BasicButton, BasicTextField, ButtonWithIcon
};