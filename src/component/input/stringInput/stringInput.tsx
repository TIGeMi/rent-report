import './stringInput.css';

interface StringInputProps {
  defaultValue?: string;
  onChanged: (value: string) => void;
  placeholder?: string;
}

export default function StringInput(props: StringInputProps) {
  return (
    <div className="string-input-container">
      <input
        type="text"
        value={props.defaultValue}
        onChange={(e) => {
          const newValue = e.target.value;
          props.onChanged(newValue);
        }}
        className="string-input"
        placeholder={props.placeholder}
      />
    </div>
  );
}
