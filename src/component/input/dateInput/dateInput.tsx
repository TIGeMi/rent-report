interface DateInputProps {
  defaultValue?: Date;
  onChanged: (value: Date) => void;
}
import { useRef } from 'react';
import 'react-calendar/dist/Calendar.css';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import './dateInput.css';

export function DateInput(props: DateInputProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="date-input-container" ref={containerRef}>
      <DatePicker
        className={'date-input'}
        onChange={(value) => {
          props.onChanged(value as Date);
        }}
        format="dd-MM-yyyy"
        locale="vi"
        value={props.defaultValue}
        dayPlaceholder="Ngày"
        monthPlaceholder="tháng"
        yearPlaceholder="năm"
        portalContainer={containerRef.current}
      />
    </div>
  );
}
