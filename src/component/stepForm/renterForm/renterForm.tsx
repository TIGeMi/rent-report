import NumberInput from '../../input/numberInput/numberInput';
import StringInput from '../../input/stringInput/stringInput';
import { FormContainer } from '../formContainer';
import { FormProps } from '../types';

interface RenterFormValue {
  name?: string;
  roomNumber?: number;
}

export function RenterForm(props: FormProps<RenterFormValue>) {
  return (
    <FormContainer
      isValid={!!props.values?.name && props.values.name.trim().length > 0}
      onOk={props.onOk}
      onBack={props.onBack}
      onRestart={props.onRestart}
    >
      <div className="step-form-date-form">
        <span className="field-title">Tên người trọ: </span>
        <StringInput
          placeholder="Tên..."
          onChanged={(value) => {
            const newFormValue = { ...props.values, name: value };
            props.onChanged(newFormValue);
          }}
          defaultValue={props.values?.name}
        />
        <span className="field-title">Phòng số: </span>
        <NumberInput
          placeholder="0"
          onChanged={(value) => {
            const newFormValue = { ...props.values, roomNumber: value };
            props.onChanged(newFormValue);
          }}
          defaultValue={props.values?.roomNumber}
        />
      </div>
    </FormContainer>
  );
}
