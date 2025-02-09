export interface FormProps<TValue> extends FormController {
  onChanged: (value: TValue) => void;
  values?: TValue;
}

export interface FormController {
  onSave?: () => void;
  onOk?: () => void;
  onBack?: () => void;
  onRestart?: () => void;
}