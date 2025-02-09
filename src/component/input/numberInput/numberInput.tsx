import './numberInput.css';
interface DateInputProps {
  defaultValue?: number;
  onChanged: (value: number) => void;
  placeholder?: string;
}
export default function NumberInput(props: DateInputProps) {
  return (
    <div className="number-input-container">
      <input
        type="number"
        placeholder={props.placeholder}
        value={props.defaultValue}
        onChange={(e) => {
          const stringValue = e.target.value;
          props.onChanged(+stringValue);
        }}
        className="number-input"
      />
    </div>
  );
}
