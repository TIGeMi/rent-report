import NumberInput from '../../input/numberInput/numberInput';
import { FormContainer } from '../formContainer';
import { FormProps } from '../types';

interface RoomFormValue {
  roomAmount?: number;
  others?: number;
}

export function RoomForm(props: FormProps<RoomFormValue>) {
  return (
    <FormContainer
      isValid={!!props.values?.roomAmount}
      onOk={props.onOk}
      onBack={props.onBack}
      onRestart={props.onRestart}
    >
      <div className="individual-form">
        <span className="field-title">Tiền phòng: </span>
        <NumberInput
          placeholder="vnd"
          onChanged={(value) => {
            const newFormValue = { ...props.values, roomAmount: value };
            props.onChanged(newFormValue);
          }}
          defaultValue={props.values?.roomAmount}
        />
        <span className="field-title">Thu khác: </span>
        <NumberInput
          placeholder="vnd"
          onChanged={(value) => {
            const newFormValue = { ...props.values, others: value };
            props.onChanged(newFormValue);
          }}
          defaultValue={props.values?.others}
        />
      </div>
    </FormContainer>
  );
}
