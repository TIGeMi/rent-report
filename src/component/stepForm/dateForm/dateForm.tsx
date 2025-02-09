import { useState } from 'react';
import { DateInput } from '../../input/dateInput/dateInput';
import { FormContainer } from '../formContainer';
import { FormProps } from '../types';

export function DateForm(props: FormProps<Date>) {
  const [isValid, setIsValid] = useState(true);
  return (
    <FormContainer
      isValid={isValid}
      onOk={props.onOk}
      onBack={props.onBack}
      onRestart={props.onRestart}
    >
      <div className="individual-form">
        <span className="field-title">Ngày thông báo tiền trọ </span>
        <DateInput
          defaultValue={props.values}
          onChanged={(value) => {
            setIsValid(!!value);
            props.onChanged(value);
          }}
        />
      </div>
    </FormContainer>
  );
}
