import { FormController } from './types';
import './formContainer.css';

export interface FormContainerProps extends FormController {
  children: React.ReactNode;
  isValid?: boolean;
}

export function FormContainer(props: FormContainerProps) {
  const { children, onOk, onBack, onRestart, isValid, onSave } = props;
  return (
    <div className="form-container">
      <div className="form-element">{children}</div>
      <div className="controller">
        {onRestart && (
          <button className="control-button restart-button" onClick={onRestart}>
            Thực hiện lại
          </button>
        )}
        {onBack && (
          <button className="control-button back-button" onClick={onBack}>
            Quay lại
          </button>
        )}
        {isValid && onOk && (
          <button className="control-button ok-button" onClick={onOk}>
            Tiếp tục
          </button>
        )}
        {onSave && (
          <button className="control-button export-button" onClick={onSave}>
            Lưu
          </button>
        )}
      </div>
    </div>
  );
}
