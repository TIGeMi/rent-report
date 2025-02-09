import { useState } from 'react';
import { DateForm } from './dateForm/dateForm';
import './stepForm.css';
import { RenterForm } from './renterForm/renterForm';
import { ElectricityForm } from './electricityForm/electricityForm';
import { RoomForm } from './roomForm/roomForm';
import { Report } from './report/report';
import { WaterForm } from './waterForm/waterForm';

enum ReportFormStep {
  ReportDate = 'ReportDate',
  Renter = 'Renter',
  Electricity = 'Electricity',
  Water = 'Water',
  RoomAndOthers = 'Room',
  Finish = 'Finish',
}

export interface ReportFormValues {
  reportDate?: Date;
  renter?: {
    name?: string;
    roomNumber?: number;
  };
  electricity?: {
    oldValue?: number;
    newValue?: number;
  };
  water?: {
    oldValue?: number;
    newValue?: number;
  };
  room?: {
    roomAmount?: number;
    others?: number;
  };
}

export function StepForm() {
  const [currentStep, setCurrentStep] = useState<ReportFormStep>(
    ReportFormStep.ReportDate
  );
  const [formValues, setFormValues] = useState<ReportFormValues>({
    reportDate: new Date(),
  });

  const getCurrentForm = () => {
    switch (currentStep) {
      case ReportFormStep.ReportDate:
        return (
          <DateForm
            onOk={() => setCurrentStep(ReportFormStep.Renter)}
            onChanged={(value) => {
              setFormValues({ ...formValues, reportDate: value });
            }}
            values={formValues.reportDate}
          />
        );
      case ReportFormStep.Renter:
        return (
          <RenterForm
            onOk={() => setCurrentStep(ReportFormStep.Electricity)}
            onBack={() => setCurrentStep(ReportFormStep.ReportDate)}
            onChanged={(value) => {
              setFormValues({ ...formValues, renter: value });
            }}
            values={formValues.renter}
          />
        );
      case ReportFormStep.Electricity:
        return (
          <ElectricityForm
            onOk={() => setCurrentStep(ReportFormStep.Water)}
            onBack={() => setCurrentStep(ReportFormStep.Renter)}
            onChanged={(value) => {
              setFormValues({ ...formValues, electricity: value });
            }}
            values={formValues.electricity}
          />
        );
      case ReportFormStep.Water:
        return (
          <WaterForm
            onOk={() => setCurrentStep(ReportFormStep.RoomAndOthers)}
            onBack={() => setCurrentStep(ReportFormStep.Electricity)}
            onChanged={(value) => {
              setFormValues({ ...formValues, water: value });
            }}
            values={formValues.water}
          />
        );
      case ReportFormStep.RoomAndOthers:
        return (
          <RoomForm
            onOk={() => setCurrentStep(ReportFormStep.Finish)}
            onBack={() => setCurrentStep(ReportFormStep.Water)}
            onChanged={(value) => {
              setFormValues({ ...formValues, room: value });
            }}
            values={formValues.room}
          />
        );
      case ReportFormStep.Finish:
        return (
          <Report
            input={formValues}
            onBack={() => setCurrentStep(ReportFormStep.RoomAndOthers)}
            onRestart={() => {
              setCurrentStep(ReportFormStep.ReportDate);
              setFormValues({});
            }}
          />
        );

      default:
        break;
    }
  };

  return <div className="step-form-container">{getCurrentForm()}</div>;
}
