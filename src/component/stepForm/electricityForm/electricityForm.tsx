import NumberInput from '../../input/numberInput/numberInput';
import { FormContainer } from '../formContainer';
import { FormProps } from '../types';

interface ElectricityFormValue {
  oldValue?: number;
  newValue?: number;
}

export function ElectricityForm(props: FormProps<ElectricityFormValue>) {
  return (
    <FormContainer
      isValid={
        props.values &&
        props.values.newValue !== undefined &&
        props.values.oldValue !== undefined &&
        props.values.newValue - props.values.oldValue >= 0
      }
      onOk={props.onOk}
      onBack={props.onBack}
      onRestart={props.onRestart}
    >
      <div className="step-form-electricity-form">
        <span className="field-title">Số điện cuối: </span>
        <NumberInput
          placeholder="KWh"
          onChanged={(value) => {
            const newFormValue = { ...props.values, newValue: value };
            props.onChanged(newFormValue);
          }}
          defaultValue={props.values?.newValue}
        />
        <span className="field-title">Số điện đầu: </span>
        <NumberInput
          placeholder="KWh"
          onChanged={(value) => {
            const newFormValue = { ...props.values, oldValue: value };
            props.onChanged(newFormValue);
          }}
          defaultValue={props.values?.oldValue}
        />
      </div>
    </FormContainer>
  );
}
