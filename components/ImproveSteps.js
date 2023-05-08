import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import PersonIcon from '@mui/icons-material/Person';
import BadgeIcon from '@mui/icons-material/Badge';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import BaseInfo from './BaseInfo';
import AddressInfo from './AddressInfo';
import CareerInfo from './CareerInfo';
import IncomeInfo from './IncomeInfo';

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '6px',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    color: '#FFD936',
    backgroundColor: 'black',
    // backgroundImage:
    //   'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    color: '#FFD936',
    backgroundColor: 'black'
    // backgroundImage:
    //   'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <PersonIcon />,
    2: <LocationOnIcon />,
    3: <BadgeIcon />,
    4: <CurrencyBitcoinIcon />,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

const steps = ['个人信息', '住址', '职业信息', '经济收入'];

export default function CustomizedSteppers(props) {
  const [step, setStep] = useState(props.step);

  const handleNext = () => setStep(step + 1);

  return (
    <>
      <Stack className='mx-auto w-full sm:w-2/3' sx={{ mb: 6 }} spacing={4}>
        <Stepper alternativeLabel activeStep={step} connector={<ColorlibConnector />}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Stack>

      { !step && <BaseInfo next={handleNext} />}
      { step === 1 && <AddressInfo next={handleNext} />}
      { step === 2 && <CareerInfo next={handleNext} />}
      { step === 3 && <IncomeInfo />}

    </>
  );
}