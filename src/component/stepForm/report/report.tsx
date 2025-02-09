import { FormContainer } from '../formContainer';
import { ReportFormValues } from '../stepForm';
import domtoimage from 'dom-to-image';
import './report.css';

interface ReportProps {
  onBack: () => void;
  onRestart: () => void;
  input: ReportFormValues;
}

const PRICE_PER_KWH = 3000;
const PRICE_PER_M3 = 11000;

export function Report(props: ReportProps) {
  const {
    input: { renter, electricity, reportDate, room, water },
  } = props;

  const calculateElectricityAmount = () => {
    if (
      electricity?.newValue === undefined ||
      electricity?.oldValue === undefined
    ) {
      throw new Error('Cannot calculate electricity amount');
    }
    return electricity.newValue - electricity.oldValue;
  };

  const calculateElectricityMoney = () => {
    return calculateElectricityAmount() * PRICE_PER_KWH;
  };

  const calculateWaterAmount = () => {
    if (water?.newValue === undefined || water?.oldValue === undefined) {
      throw new Error('Cannot calculate water amount');
    }
    return water.newValue - water.oldValue;
  };
  const calculateWaterMoney = () => {
    return calculateWaterAmount() * PRICE_PER_M3;
  };

  const calculateTotal = () => {
    return (
      calculateElectricityMoney() +
      calculateWaterMoney() +
      (room?.roomAmount ?? 0) +
      (room?.others ?? 0)
    );
  };

  const exportImage = () => {
    const exportArea = document.getElementById('export');
    if (!exportArea) return;

    domtoimage.toJpeg(exportArea, { quality: 1 }).then(function (dataUrl) {
      const link = document.createElement('a');
      link.download = `Tien phong ${props.input.renter?.name} thang ${
        (props.input.reportDate?.getMonth() ?? 0) + 1
      }-${props.input.reportDate?.getFullYear()}.png`;
      link.href = dataUrl;
      link.click();
    });
  };

  return (
    <div id="export" className="report-wrapper">
      <FormContainer
        onBack={props.onBack}
        onRestart={props.onRestart}
        onSave={exportImage}
      >
        <div className="report-container">
          <h2>PHIẾU BÁO TIỀN TRỌ</h2>
          <div>
            <div style={{ width: 'fit-content', margin: '0 auto' }}>
              <span>Ngày </span>
              <span>{reportDate?.getDate()}</span>
              <span> Tháng </span>
              <span>{(reportDate?.getMonth() ?? 0) + 1}</span>
              <span> Năm </span>
              <span>{reportDate?.getFullYear()}</span>
            </div>
          </div>
          <div>
            <div>
              <div>
                <span>Tên người trọ:</span>
                <span className="value">{renter?.name}</span>
              </div>
              <div>
                <span> Phòng số: </span>
                <span className="value">{renter?.roomNumber}</span>
              </div>
            </div>
          </div>
          <div>
            <h4>Điện</h4>
            <div>
              <span>Số cuối: </span>
              <span className="value">{electricity?.newValue} KWh</span>
              <span> Số đầu: </span>
              <span className="value">{electricity?.oldValue} KWh</span>
            </div>
            <div>
              <span>Tiêu thụ: </span>
              <span className="value">{calculateElectricityAmount()} KWh</span>
              <span>Thành tiền: </span>
              <span className="value">
                {calculateElectricityMoney().toLocaleString()} đ
              </span>
            </div>
          </div>
          <div>
            <h4>Nước</h4>
            <div>
              <span>Số cuối:</span>
              <span className="value">{water?.newValue} m³</span>
              <span>Số đầu: </span>
              <span className="value">{water?.oldValue} m³</span>
            </div>
            <div>
              <span>Tiêu thụ: </span>
              <span className="value">{calculateWaterAmount()} m³</span>
              <span>Thành tiền: </span>
              <span className="value">
                {calculateWaterMoney().toLocaleString()} đ
              </span>
            </div>
          </div>
          <div>
            <h4>Phòng</h4>
            <div>
              <span>Tiền phòng: </span>
              <span className="value">
                {room?.roomAmount?.toLocaleString() ?? 0} đ
              </span>
            </div>
            <div>
              <span>Phụ thu (khác): </span>
              <span className="value">
                {room?.others?.toLocaleString() ?? 0} đ
              </span>
            </div>
          </div>
          <div className="total">
            <h3>TỔNG CỘNG: </h3>
            <span> {calculateTotal().toLocaleString()}</span>
            <span>đ </span>
          </div>
        </div>
      </FormContainer>
    </div>
  );
}
