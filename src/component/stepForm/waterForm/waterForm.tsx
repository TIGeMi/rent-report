import NumberInput from '../../input/numberInput/numberInput';
import { FormContainer } from '../formContainer';
import { FormProps } from '../types';

interface WaterFormValue {
  oldValue?: number;
  newValue?: number;
}

export function WaterForm(props: FormProps<WaterFormValue>) {
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
        <span className="field-title">Số nước cuối: </span>
        <NumberInput
          placeholder="m³"
          onChanged={(value) => {
            const newFormValue = { ...props.values, newValue: value };
            props.onChanged(newFormValue);
          }}
          defaultValue={props.values?.newValue}
        />
        <span className="field-title">Số nước đầu: </span>
        <NumberInput
          placeholder="m³"
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
